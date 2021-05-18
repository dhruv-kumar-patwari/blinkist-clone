import React from 'react';
import DropDownMenu from './DropDownMenu'

export default {
    title: "Organism/DropDownMenu",
    component: DropDownMenu,
}

const Template = args => (<DropDownMenu {...args} />)

export const Default = Template.bind({})
Default.args = {
    listItems: [
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
    children: "Explore"
}