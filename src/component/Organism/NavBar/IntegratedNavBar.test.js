import React from 'react'
import IntegratedNavBar from './IntegratedNavBar'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { useAuth0 } from '@auth0/auth0-react';

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn()
const mockSetSearchTerm = jest.fn()

const bookList = [
    {
        bookTitle: "Test",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
]

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
]


it("Clicking on search button displays the search bar", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    })
    render(<IntegratedNavBar 
            listItems={dropDownText} 
            linkTo = {["/"]}
            menuItems = {["My Library"]}
            toggleSearchBar= {false}
            bookList={bookList}
            searchTerm=""
            setSearchResult= {mockSetSearchTerm}
            setSearchTerm= {mockLib}
            setFilterTerm= {mockLib}
        />)

    expect(mockLib).toHaveBeenCalledTimes(1)

    screen.getByText("Explore")

    fireEvent.click(screen.getByTestId("searchButton"))
    
    screen.getByPlaceholderText("Search by Author or Title")
})

it("Clicking on search button displays the search bar", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    })
    render(<IntegratedNavBar 
            listItems={dropDownText} 
            linkTo = {["/"]}
            menuItems = {["My Library"]}
            toggleSearchBar= {false}
            bookList={bookList}
            searchTerm=""
            setSearchResult= {mockSetSearchTerm}
            setSearchTerm= {mockLib}
            setFilterTerm= {mockLib}
        />)

    fireEvent.click(screen.getByTestId("searchButton"))
    
    fireEvent.change(screen.getByPlaceholderText("Search by Author or Title"), {target: {value: "test"}})

    expect(screen.getByPlaceholderText("Search by Author or Title")).toHaveValue("test")

    await waitFor(() => expect(mockSetSearchTerm).toHaveBeenCalledWith(`[{"bookAuthor": "Gorge Orwell", "bookDuration": "20", "bookTitle": "Test", "isFinished": false}]`))
})
