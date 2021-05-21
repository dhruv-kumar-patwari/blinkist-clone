import IntegratedNavBar from '../Organism/NavBar/IntegratedNavBar';
import { Container, Typography } from '@material-ui/core';
import CardsInTabs from '../Organism/CardsInTabs/CardsInTabs';
import { React, useState, useEffect, useContext } from 'react';
import CardGrid from '../molecule/CardGrid/CardGrid';
import Context from '../../util/context';

const isFinished = (x) => {
    return x.isFinished;
};

const isUnFinished = (x) => {
    return !x.isFinished;
};


function Page() {
    const {bookList,
            libraryBooks, setLibraryBooks, 
            searchResult , setSearchResult, 
            searchTerm } = useContext(Context);
    
    const [filteredBookList, setFilteredBookList] = useState([]);
    const [filterTerm, setFilterTerm] = useState("");

    const [unFinished, setUnFinished] = useState(
        libraryBooks.filter(isUnFinished)
    );
    
    const [finished, setFinished] = useState(
        libraryBooks.filter(isFinished)
    );

    useEffect(() => {
        setUnFinished(libraryBooks.filter(isUnFinished));
        setFinished(libraryBooks.filter(isFinished));
    }, [libraryBooks]);

    const fetchLibraryBook = async (id) => {
        const response = await fetch(`http://localhost:5000/myLibrary/${id}`);
        const data = await response.json();
        
        return data;
    };

    const isInLibrary = (id) => {
        for (const book of libraryBooks){
            if (book.id === id){
                return true;
            }
        }
        return false;
    };

    const fetchBook = async (id) => {
        const res = await fetch(`http://localhost:5000/allBooks/${id}`);
        const data = await res.json();

        return data;
    };
    const fetchCategory = async (id) => {
        const res = await fetch(`http://localhost:5000/category/${id}`);
        const data = await res.json();
        return data.name;
    };

    const addToLibrary = async (e, id) => {
        const bookToAdd = { id: id, isFinished: false };

        const res = await fetch(`http://localhost:5000/myLibrary`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(bookToAdd),
        });

        const jsonData = await res.json();
        let updatedData = await fetchBook(jsonData.id);
        updatedData = { ...updatedData, isFinished: false };

        setLibraryBooks([...libraryBooks, updatedData]);

        const bookStatusUpdate = (book) => {
            return book.id === id
            ? {...book, isFinished : updatedData.isFinished} 
            : book ;
        };
        
        setFilteredBookList(
        filteredBookList.map((book) => bookStatusUpdate(book)));

        setSearchResult(searchResult.map((book) => bookStatusUpdate(book)));
    };

    const changeReadStatus = async (e, data) => {

        const bookToToggle = await fetchLibraryBook(data);
        const updatedBook = { ...bookToToggle, isFinished: !bookToToggle.isFinished };

        const res = await fetch(`http://localhost:5000/myLibrary/${data}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        });

        const updatedData = await res.json();

        const bookStatusUpdate = (book) => {
            return book.id === data
            ? {...book, isFinished : updatedData.isFinished} 
            : book ;
        };
        setLibraryBooks(
            libraryBooks.map((book) => bookStatusUpdate(book)));
        
        setFilteredBookList(
        filteredBookList.map((book) => bookStatusUpdate(book)));

        setSearchResult(
        searchResult.map((book) => bookStatusUpdate(book)));
    };
    
    const findBooksByCategory = (data) => {
        const filteredList = bookList.filter((book) => (book.category.id === data));
        setFilteredBookList(filteredList);
    };

    return (
        <>
        <Container maxWidth="md" style={{maxWidth: "1024px"}}>
        <IntegratedNavBar menuItems = {["My Library"]}
                        linkTo={["/"]}
                        fetchCategory={fetchCategory}
                        findBooksByCategory={findBooksByCategory}
                        setFilterTerm={setFilterTerm}
                        />
        </Container>
        <Container maxWidth="md">
                {searchTerm ? <>
                    <Typography variant="h4"><strong>{renderTextDependingOnSearchResultLength()}</strong></Typography> 
                    <CardGrid addToLibrary={addToLibrary} isInLibrary={isInLibrary} onClick={changeReadStatus} /></> :
                    (renderFilterComponentsElseRenderMyLibrary())
                
                }
        </Container>

        </>
    );

    function renderFilterComponentsElseRenderMyLibrary() {
        return filterTerm ?
            <>
                <Typography variant="h4"><strong>{filterTerm}</strong></Typography>
                <CardGrid addToLibrary={addToLibrary} bookList={filteredBookList} isInLibrary={isInLibrary} onClick={changeReadStatus} />
            </> :
            <>
                <Typography variant="h4"><strong>My Library</strong></Typography>
                <CardsInTabs
                    changeReadStatus={changeReadStatus}
                    finished={finished}
                    unFinished={unFinished}
                    isInLibrary={isInLibrary}
                    addToLibrary={addToLibrary}
                    style={{ background: "rgba(58,70,73,.7)" }} />
            </>;
    }

    function renderTextDependingOnSearchResultLength() {
        return searchResult.length > 0 ? `All results for "${searchTerm}"` : `Nothing found for "${searchTerm}"`;
    }
}

export default Page;
