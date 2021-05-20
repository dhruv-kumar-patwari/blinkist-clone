import React from 'react'
import Form from './Form'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

const mockLib = jest.fn()

const menuItemsList= [
    {
    "id": 1,
    "name": "Entrepreneurship Value"
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

it("Enter values in form changes form state", async () => {
    render(<Form menuItemsList={menuItemsList} 
        category= {{id: 1}} 
        setBookTitle={mockLib} 
        setBookAuthor={mockLib} 
        setBookDuration={mockLib} 
        handleChange={mockLib} 
        fetchCategory = {mockLib}
        setCategory={mockLib}
        bookTitle="title book"
        bookAuthor="book author name"
        bookDuration={20}
    />)

    screen.getByDisplayValue('title book')
    screen.getByDisplayValue('book author name')
    screen.getByDisplayValue('20')
    screen.getByRole("button", {name: "Entrepreneurship Value"})

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Animal' }})
    expect(mockLib).toHaveBeenCalledTimes(1)

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'Animal' }})
    expect(mockLib).toHaveBeenCalledTimes(2)

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 30 }})
    expect(mockLib).toHaveBeenCalledTimes(3)
    
    // fireEvent.click(screen.getByRole("button", {name: "Entrepreneurship Value"}))
    // await waitFor(() =>expect(screen.getByRole("button", {expanded:true})).toBeTruthy())
    // expect(mockLib).toHaveBeenCalledTimes(5)
})
