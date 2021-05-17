import IntegratedNavBar from './component/Organism/NavBar/IntegratedNavBar'
import { Container, Typography } from '@material-ui/core'
import CardsInTabs from './component/Organism/CardsInTabs/CardsInTabs';
import AddBookForm from './component/Organism/Form/Form';
import { React, useState, useEffect } from 'react';
import CardGrid from './component/molecule/CardGrid/CardGrid';
import { BrowserRouter as Router, 
    Switch, Route, Link} from "react-router-dom"
import { SearchTwoTone } from '@material-ui/icons';

const isFinished = (x) => {
    return x.isFinished
}

const isUnFinished = (x) => {
    return !x.isFinished
}


function App() {
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
    <Router>
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
        <Switch>
          <Route exact path="/">
            {searchTerm ? <>
                <Typography variant="h4"><strong>{searchResult.length > 0 ? `All results for "${searchTerm}"` : `Nothing found for "${searchTerm}"`}</strong></Typography> 
                <CardGrid bookList={searchResult} onClick={changeReadStatus} /></> :
                (filterTerm ? 
                <>
                  <Typography variant="h4"><strong>{filterTerm}</strong></Typography> 
                  <CardGrid bookList={filteredBookList} onClick={changeReadStatus} />
                </> : 
                <>
                <Typography variant="h4"><strong>My Library</strong></Typography>
                  <CardsInTabs
                    bookList = {bookList}
                    setBookList={setBookList}
                    fetchBook= {fetchBook}
                    changeReadStatus = {changeReadStatus}
                    finished = {finished}
                    unFinished = {unFinished}
                    style={{background: "rgba(58,70,73,.7)"}}
                  />
              </>)
              
            }
          </Route>
          <Route exact path="/addBook">
          </Route>
        </Switch>
      </Container>

    </Router>
  );
}

export default App;
