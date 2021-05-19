import React from 'react';
import BookCard from './Card'

export default {
    title: "Molecule/Card",
    component: BookCard,
}

const Template = args => (<BookCard {...args} />)

const test = () => {
    return false
}

export const CardWithDynamicInput = Template.bind({})
CardWithDynamicInput.args = {
    isFinished: false,
    isInLibrary: test
}