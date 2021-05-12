import IntegratedNavBar from './component/Organism/NavBar/IntegratedNavBar'
import { Container } from '@material-ui/core'
import CardsInTabs from './component/Organism/CardsInTabs/CardsInTabs';
import AddBookForm from './component/Organism/Form/Form';
import { React, useState, useEffect } from 'react';
import CardGrid from './component/melecule/CardGrid/CardGrid';
import { BrowserRouter as Router, 
    Switch, Route, Link} from "react-router-dom"

const isFinished = (x) => {
    return x.isFinished
}

const isUnFinished = (x) => {
    return !x.isFinished
}


function App() {
  const [bookList, setBookList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

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

      getBooks()
  }, []);

  useEffect(() => {
      setUnFinished(bookList.filter(isUnFinished))
      setFinished(bookList.filter(isFinished))
      return <CardsInTabs />
  }, [bookList]);

  const fetchBooks = async () => {
      const response = await fetch('http://localhost:5000/books')
      const data = await response.json()
      return data
  }

  const fetchBook = async (id) => {
      const res = await fetch(`http://localhost:5000/books/${id}`)
      const data = await res.json()

      return data
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

      setBookList(
          bookList.map((book) => 
              book.id === data
              ? {...book, isFinished : updatedData.isFinished} 
              : book 
          ));
  }

  return (
    <Router>
      <Container maxWidth="md">
        <IntegratedNavBar listItems= {["Entrepreneurship", "Science", "Economics",
                  "Politics", "Health", "Money", "Marketing & Sales",
                  "Personal Development", "History",
                  "Communication", "Motivation", "Psychology", "Technology"]}
                  menuItems = {["My Library", "Add Book"]}
                  searchResult = {searchResult}
                  setSearchResult = {setSearchResult}
                  searchTerm = {searchTerm}
                  setSearchTerm = {setSearchTerm}
                  bookList = {bookList}
                  linkTo={["/", "/addBook"]}
                  />
        <Switch>
          <Route exact path="/">
            {searchTerm ? <CardGrid bookList={searchResult} onClick={changeReadStatus} /> :
              <CardsInTabs
                bookList = {bookList}
                setBookList={setBookList}
                fetchBook= {fetchBook}
                changeReadStatus = {changeReadStatus}
                finished = {finished}
                unFinished = {unFinished}
              />
            }
          </Route>
          <Route exact path="/addBook">
          {searchTerm ? <CardGrid bookList={searchResult} onClick={changeReadStatus} /> :
            <AddBookForm setBookList={setBookList} bookList = {bookList} />}
          </Route>
        </Switch>
      </Container>

    </Router>
  );
}

export default App;
