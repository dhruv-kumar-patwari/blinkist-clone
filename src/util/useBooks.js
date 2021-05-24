import {useState, useEffect } from 'react';

const useBooks = () => {
    const [bookList, setBookList] = useState([]);
    const [libraryBooks, setLibraryBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const booksFromServer =  await fetchBooks();
            setBookList(booksFromServer);
        };
        
        const getCategories = async () => {
            const categoriesFromServer =  await fetchCategories();
            setCategories(categoriesFromServer);
        };

        const getLibraryBooks = async () => {
            const booksFromServer =  await fetchLibraryBooks();
            setLibraryBooks(booksFromServer);
        };

        getBooks();
        getCategories();
        getLibraryBooks();
    }, []);

    return { bookList, setBookList, libraryBooks, setLibraryBooks, categories,  setCategories};
};

const fetchBooks = async () => {
    const response = await fetch('http://localhost:5000/allBooks');
    const data = await response.json();
    return data;
};

const fetchLibraryBooks = async () => {
    const response = await fetch('http://localhost:5000/myLibrary');
    const data = await response.json();
    const books = [];
    for (const book of data) {
        let newBook = await fetchBook(book.id);
        newBook = { ...newBook, isFinished: book.isFinished };
        books.push(newBook);
    }

    return books;
};

const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/category');
    const data = await response.json();
    return data;
};

const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:5000/allBooks/${id}`);
    const data = await res.json();

    return data;
};

export default useBooks;