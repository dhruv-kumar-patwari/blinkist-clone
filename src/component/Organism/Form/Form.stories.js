import React from 'react';
import AddBookForm from './Form'

export default {
    title: "Organism/AddBookForm",
    component: AddBookForm,
}

const Template = args => (<AddBookForm {...args} />)


const test = () => {
    console.log("Yo!")
}


export const Default = Template.bind({})
Default.args = {
    menuItemsList: [
        {
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
        }
    ],
    category: {
        id: 1
    },
    setBookTitle: test,
    setBookAuthor: test,
    setBookDuration: test,
    handleChange: test,

}