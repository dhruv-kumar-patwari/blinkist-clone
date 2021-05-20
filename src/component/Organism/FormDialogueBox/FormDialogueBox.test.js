import React from 'react'
import FormDialogueBox from './FormDialogueBox'
import {render, screen, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
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

it("Add book button is rendered initially", () => {
    render(<FormDialogueBox menuItemsList={menuItemsList} 
        fetchCategory={mockLib}
    />)

    screen.getByRole("button", {name: "Add Book"})
})

it("Dialog box opens if add book button is clicked", () => {
    render(<FormDialogueBox menuItemsList={menuItemsList} 
        fetchCategory={mockLib}
    />)

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}))
    screen.getByRole("dialog")
})

it("Change value in the text field is reflected on screen", () => {
    render(<FormDialogueBox menuItemsList={menuItemsList} 
        fetchCategory={mockLib}
    />)

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}))

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Animal' }})
    screen.getByDisplayValue('Animal')

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Farm' }})
    screen.getByDisplayValue('Farm')

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'Author name new' }})
    screen.getByDisplayValue('Author name new')

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'newer name boi' }})
    screen.getByDisplayValue('newer name boi')

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 'newer name boi' }})
    expect(screen.getByRole("spinbutton").textContent).toBe("")

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 20 }})
    expect(screen.getByRole("spinbutton")).toHaveValue(20)
})

it("Pressing the close button closes the dialog box", async () => {
    render(<FormDialogueBox menuItemsList={menuItemsList} 
        fetchCategory={mockLib}
    />)

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}))
    screen.getByRole("dialog")

    fireEvent.click(screen.getByRole("button", {name: "Close"}))

    await waitForElementToBeRemoved(screen.getByRole("dialog"))
    screen.getByRole("button", {name: "Add Book"})
})