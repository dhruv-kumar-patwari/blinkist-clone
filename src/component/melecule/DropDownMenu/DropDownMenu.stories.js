import React from 'react';
import DropDownMenu from './DropDownMenu'

export default {
    title: "Molecule/DropDownMenu",
    component: DropDownMenu,
}

const Template = args => (<DropDownMenu {...args} />)

export const Default = Template.bind({})
Default.args = {
    listItems: ["Entrepreneurship", "Science", "Economics", "Politics", "Health", "Entrepreneurship", "Science", "Economics", "Politics", "Health"],
}