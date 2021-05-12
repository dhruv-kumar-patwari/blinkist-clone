import { React, useState } from 'react'
import FormInputField from '../../atom/InputFields/FormInputField';
import ButtonItem from '../../atom/Button/Button'

const AddBookForm = (props) => {
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookDuration, setBookDuration] = useState(0)
    const [category, setCategory] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault();

        if(!bookTitle){
            alert("Please add task")
            return 
        }

        addBook({bookTitle, bookAuthor, bookDuration, category})

        setBookTitle('')
        setBookAuthor('')
        setCategory('')
        setBookDuration(0)
    }

    const addBook = async (book) => {
        book = {...book, isFinished: false}
        const res = await fetch(`http://localhost:5000/books/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })

        const data = await res.json()

        props.setBookList([...props.bookList, data])
    }

    return (
        <div>
            <div>
            <FormInputField 
                id= "bookTitle"
                type= "text"
                placeholder= 'Book Name'
                labelText = "Book Name"
                value = {bookTitle}
                onChange={(e) => {setBookTitle(e.target.value)}}
            /> <br />
            <FormInputField 
                id= "bookAuthor"
                type= "text"
                placeholder= 'Author Name'
                labelText = "Author"
                value = {bookAuthor}
                onChange={(e) => {setBookAuthor(e.target.value)}}
            /> <br />
            <FormInputField 
                id= "category"
                type= "text"
                placeholder= 'Category'
                labelText = "Category"
                value = {category}
                onChange={(e) => {setCategory(e.target.value)}}
            /> <br />
            <FormInputField 
                id= "bookDuration"
                type= "number"
                placeholder= 'Duration'
                labelText = "Duration"
                value = {bookDuration}
                onChange={(e) => {setBookDuration(e.target.value)}}
            /> <br />
            <ButtonItem children="Add" variant="contained" color="primary" onClick={onSubmit}/>
        </div>
        </div>
    )
}

export default AddBookForm
