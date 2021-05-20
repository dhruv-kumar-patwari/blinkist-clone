import { React } from 'react'
import FormInputField from '../../atom/InputFields/FormInputField';
import FormSelectField from '../../atom/InputFields/FormSelectField';



const AddBookForm = (props) => {

    const handleChange = async (e) => {
        const categoryName = await props.fetchCategory(e.target.value)
        props.setCategory({
            id: e.target.value,
            name: categoryName
        })
    }
    
    return (
        <div>
            <div>
            <FormInputField 
                id= "bookTitle"
                type= "text"
                placeholder= 'Book Name'
                labelText = "Book Name"
                value = {props.bookTitle}
                onChange={(e) => {props.setBookTitle(e.target.value)}}
            /> <br />
            <FormInputField 
                id= "bookAuthor"
                type= "text"
                placeholder= 'Author Name'
                labelText = "Author"
                value = {props.bookAuthor}
                onChange={(e) => {props.setBookAuthor(e.target.value)}}
            /> <br />
            <FormSelectField 
                id= "category"
                labelText = "Category"
                value = {props.category.id}
                onChange={(e) => {handleChange(e)}}
                menuItemsList = {props.menuItemsList}
                data-testid = "select"
            /> <br />
            <FormInputField 
                id= "bookDuration"
                type= "number"
                placeholder= 'Duration'
                labelText = "Duration"
                value = {props.bookDuration}
                onChange={(e) => {props.setBookDuration(e.target.value)}}
            /> <br />
        </div>
        </div>
    )
}

export default AddBookForm
