import IntegratedNavBar from '../Organism/NavBar/IntegratedNavBar'
import { Container, Typography } from '@material-ui/core'
import CardsInTabs from '../Organism/CardsInTabs/CardsInTabs';
import { React, useState, useEffect } from 'react';
import CardGrid from '../molecule/CardGrid/CardGrid';
const isFinished = (x) => {
    return x.isFinished
}

const isUnFinished = (x) => {
    return !x.isFinished
}


function Page() {
    const [bookList, setBookList] = useState([])
    const [categories, setCategories] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBookList, setFilteredBookList] = useState([])
    const [filterTerm, setFilterTerm] = useState("");

    const [unFinished, setUnFinished] = useState(
        bookList.filter(isUnFinished)
    );
    
    const [finished, setFinished] = useState(
        bookList.filter(isFinished)
    );

    useEffect(() => {
        const getBooks = async () => {
            const booksFromServer =  await fetchBooks()
            setBookList(booksFromServer)
        }
        
        const getCategories = async () => {
            const categoriesFromServer =  await fetchCategories()
            setCategories(categoriesFromServer)
        }

        getBooks()
        getCategories()
    }, []);

    useEffect(() => {
        setUnFinished(bookList.filter(isUnFinished))
        setFinished(bookList.filter(isFinished))
    }, [bookList]);

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:5000/books')
        const data = await response.json()
        return data
    }

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/category')
        const data = await response.json()
        return data
    }

    const fetchBook = async (id) => {
        const res = await fetch(`http://localhost:5000/books/${id}`)
        const data = await res.json()

        return data
    }
    const fetchCategory = async (id) => {
        const res = await fetch(`http://localhost:5000/category/${id}`)
        const data = await res.json()
        return data.name
    }

    const changeReadStatus = async (e, data) => {

        const bookToToggle = await fetchBook(data)
        const updatedBook = { ...bookToToggle, isFinished: !bookToToggle.isFinished }

        const res = await fetch(`http://localhost:5000/books/${data}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })

        const updatedData = await res.json()

        const bookStatusUpdate = (book) => {
            return book.id === data
            ? {...book, isFinished : updatedData.isFinished} 
            : book 
        }
        
        setBookList(
            bookList.map((book) => bookStatusUpdate(book)))
        
        setFilteredBookList(
        filteredBookList.map((book) => bookStatusUpdate(book)))

        setSearchResult(
        searchResult.map((book) => bookStatusUpdate(book)))
    }

    useEffect(() => {
        console.log(filteredBookList)
    }, [filteredBookList]);

    const findBooksByCategory = (data) => {
        const filteredList = bookList.filter((book) => (book.category.id === data))
        setFilteredBookList(filteredList)
    }

    return (
        <>
        <Container maxWidth="md" style={{maxWidth: "1024px"}}>
        <IntegratedNavBar listItems= {categories}
                        menuItems = {["My Library"]}
                        searchResult = {searchResult}
                        setSearchResult = {setSearchResult}
                        searchTerm = {searchTerm}
                        setSearchTerm = {setSearchTerm}
                        setBookList={setBookList} 
                        bookList = {bookList}
                        linkTo={["/"]}
                        fetchCategory={fetchCategory}
                        findBooksByCategory={findBooksByCategory}
                        setFilterTerm={setFilterTerm}
                        />
        </Container>
        <Container maxWidth="md">
                {searchTerm ? <>
                    <Typography variant="h4"><strong>{renderTextDependingOnSearchResultLength()}</strong></Typography> 
                    <CardGrid bookList={searchResult} onClick={changeReadStatus} /></> :
                    (renderFilterComponentsElseRenderMyLibrary())
                
                }
        </Container>

        </>
    );

    function renderFilterComponentsElseRenderMyLibrary() {
        return filterTerm ?
            <>
                <Typography variant="h4"><strong>{filterTerm}</strong></Typography>
                <CardGrid bookList={filteredBookList} onClick={changeReadStatus} />
            </> :
            <>
                <Typography variant="h4"><strong>My Library</strong></Typography>
                <CardsInTabs
                    bookList={bookList}
                    setBookList={setBookList}
                    fetchBook={fetchBook}
                    changeReadStatus={changeReadStatus}
                    finished={finished}
                    unFinished={unFinished}
                    style={{ background: "rgba(58,70,73,.7)" }} />
            </>;
    }

    function renderTextDependingOnSearchResultLength() {
        return searchResult.length > 0 ? `All results for "${searchTerm}"` : `Nothing found for "${searchTerm}"`;
    }
}

export default Page;
