import React from 'react'
import FormInputField from '../../atom/InputFields/FormInputField';
import ButtonItem from '../../atom/Button/Button'

const Form = () => {
    return (
        <div>
            <FormInputField 
                id= "bookName"
                type= "text"
                placeholder= 'Book Name'
                labelText = "Book Name"
            /> <br />
            <FormInputField 
                id= "authorName"
                type= "text"
                placeholder= 'Author Name'
                labelText = "Author"
            /> <br />
            <FormInputField 
                id= "duration"
                type= "number"
                placeholder= 'Duration'
                labelText = "Duration"
            /> <br />
            <ButtonItem children="Add" variant="contained" color="primary"/>
        </div>
    )
}

export default Form
