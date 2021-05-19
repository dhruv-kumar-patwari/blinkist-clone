import React from 'react';
import CardsInTabs from './CardsInTabs'

export default {
    title: "Organism/CardsInTabs",
    component: CardsInTabs,
}

const Template = args => (<CardsInTabs {...args} />)

const books = [
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
    ]
const test = () => {
    return false
}
export const Default = Template.bind({})
Default.args = {
    unFinished: books,
    finished: books,
    currentTab: "0",
    isInLibrary: test

}