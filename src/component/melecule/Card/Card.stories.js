import React from 'react';
import BookCard from './Card'

export default {
    title: "Molecule/Card",
    component: BookCard,
}

const Template = args => (<BookCard {...args} />)

export const CardWithDynamicInput = Template.bind({})
CardWithDynamicInput.args = {
    bookTitle: "Animal Farm",
    bookAuthor: "Gorge Orwell",
    bookDuration: "20",
    isFinished: false
}