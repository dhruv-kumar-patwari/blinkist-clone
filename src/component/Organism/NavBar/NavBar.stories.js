import React from 'react';
import Navbar from './NavBar'
import NavBarWithSearch from './NavBarWithSearch'
import IntegratedNavBar from './IntegratedNavBar'

export default {
    title: "Organism/Navbar",
    component: Navbar,
}

const test = () => {
    console.log("Yo!")
}

const Template = args => (<Navbar {...args} />)

const dropDownText = [{
      "id": 1,
      "name": "Entrepreneurship"
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
    }]

export const Default = Template.bind({})
Default.args = {
    listItems: dropDownText,
    linkTo : ["/"],
    menuItems : ["My Library"],
    etSearchResult: test,
    setSearchTerm: test,
    setFilterTerm: test
}

const SearchTemplate = args => (<NavBarWithSearch {...args} />)

export const WithSearch = SearchTemplate.bind({})


const IntegratedTemplate = args => (<IntegratedNavBar {...args} />)

export const combined = IntegratedTemplate.bind({})
combined.args = {
    listItems: dropDownText,
    menuItems : ["My Library"],
    linkTo : ["/"],
    toggleSearchBar: false,
    bookList: [
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "1984",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
    ],
    searchTerm: "",
    setSearchResult: test,
    setSearchTerm: test,
    setFilterTerm: test
}

