import React from 'react';
import FormDialogueBox from './FormDialogueBox'

export default {
    title: "Organism/FormDialogueBox",
    component: FormDialogueBox,
}

const Template = args => (<FormDialogueBox {...args} />)

const test = () => {
    console.log("Check")
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
    }],
    fetchCategory: test
}