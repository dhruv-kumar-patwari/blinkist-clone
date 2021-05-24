import React from 'react';
import Page, { fetchLibraryBook, fetchBook, fetchCategory, util } from './Page';
import {render, screen, fireEvent, waitFor, getByTestId, getByPlaceholderText} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Context from '../../util/context';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn();
const mockSetSearchResult = jest.fn();

const bookList = [
    {
        "id": 4,
        "bookTitle": "The Bully Pulpit",
        "bookAuthor": "Doris Kearns Goodwin",
        "bookDuration": "19",
        "category": {
            "id": 4,
            "name": "Politics"
        },
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    },
    {
        "id": 5,
        "bookTitle": "ROI in Marketing",
        "bookAuthor": "Jack Phillips",
        "bookDuration": "12",
        "category": {
            "id": 10,
            "name": "Money"
        },
        "img": "https://images.blinkist.com/images/books/6014114b6cee070008ada76e/1_1/640.jpg"
    },
    {
        "id": 6,
        "bookTitle": "Sales EQ",
        "bookAuthor": "Jeb Blount",
        "bookDuration": "13",
        "category": {
            "id": 10,
            "name": "Money"
        },
        "img": "https://images.blinkist.com/images/books/6064bf2d6cee070007018112/1_1/640.jpg"
    },
    {
        "id": 7,
        "bookTitle": "Genesis",
        "bookAuthor": "Guido Tonelli",
        "bookDuration": "12",
        "category": {
            "id": 2,
            "name": "Science"
        },
        "img": "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/640.jpg"
    },
];

const searchResult = [
    {
        bookTitle: "Test Search",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        bookTitle: "Animal Farm finished",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    }
];

const dropDownText = [
    {
        "id": 1,
        "name": "Entrepreneurship"
    },
    {
        "id": 2,
        "name": "Science"
    },
    {
        "id": 3,
        "name": "Economics"
    },
    {
        "id": 4,
        "name": "Politics"
    },
    {
        "id": 5,
        "name": "History"
    },
    {
        "id": 6,
        "name": "Marketing & Sales"
    }
];

const args = {
    categories: dropDownText,
    bookList: bookList,
    searchTerm: "",
    setSearchTerm: mockLib,
    setSearchResult: mockSetSearchResult,
    libraryBooks: bookList,
    setLibraryBooks: mockLib,
    searchResult: searchResult
};

function renderPage(args) {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    return render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );
}

it("Card in tabs is rendered", async () => {
    renderPage(args);

    screen.getByText("The Bully Pulpit");
});

it("setSearchTerm must be called if search term needs to be set", async () => {
    renderPage(args);

    fireEvent.click(screen.getByTestId("searchButton"));

    fireEvent.change(screen.getByPlaceholderText("Search by Author or Title"), {target: { value: "Test search result" }});

    expect(mockLib).toHaveBeenCalledWith("Test search result");
});

it("If search term is non empty search result is displayed", async () => {
    const args = {
        categories: dropDownText,
        bookList: bookList,
        searchTerm: "test",
        setSearchTerm: mockLib,
        setSearchResult: mockSetSearchResult,
        libraryBooks: bookList,
        setLibraryBooks: mockLib,
        searchResult: searchResult
    };

    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );

    screen.getByText("Test Search");

    screen.getByText("Animal Farm finished");

    screen.getByText(`All results for "test"`);
});

it("If search result is empty Nothing found for xyz is displayed", () => {
    const args = {
        categories: dropDownText,
        bookList: bookList,
        searchTerm: "test",
        setSearchTerm: mockLib,
        setSearchResult: mockSetSearchResult,
        libraryBooks: bookList,
        setLibraryBooks: mockLib,
        searchResult: []
    };
    
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );
    
    screen.getByText(`Nothing found for "test"`);
});

it("Filter must be set", async () => {
    renderPage(args);

    fireEvent.click(screen.getByText("Explore"));

    fireEvent.click(screen.getByText("Politics"));

    screen.getAllByText("Politics");
    screen.getByText("The Bully Pulpit");
});

xit("fetchLibraryBook returns the book with available id", async () => {    

    await fetchLibraryBook(1);
    // expect(fetch).toHaveBeenCalledTimes(1);
    // expect(fetch).toHaveBeenCalledWith("http://localhost:5000/myLibrary/26");
});