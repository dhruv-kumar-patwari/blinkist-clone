import React from 'react';
import AddBookForm from './Form'

export default {
    title: "Organism/AddBookForm",
    component: AddBookForm,
}

const Template = args => (<AddBookForm {...args} />)

export const Default = Template.bind({})