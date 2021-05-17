import React from 'react';
import Navbar from './NavBar'
import NavBarWithSearch from './NavBarWithSearch'
import IntefratedNavBar from './IntegratedNavBar'

export default {
    title: "Organism/Navbar",
    component: Navbar,
}

const Template = args => (<Navbar {...args} />)

export const Default = Template.bind({})
Default.args = {
    listItems: ["Entrepreneurship", "Science", "Economics", 
                "Politics", "Health", "Money", "Marketing & Sales", 
                "Personal Development", "History", 
                "Communication", "Motivation", "Psychology", "Technology"],
    linkTo : ["/", "/addBook"],
    menuItems : ["My Library", "Add Book"]
}

const SearchTemplate = args => (<NavBarWithSearch {...args} />)

export const WithSearch = SearchTemplate.bind({})


const IntegratedTemplate = args => (<IntefratedNavBar {...args} />)

export const combined = IntegratedTemplate.bind({})
combined.args = {
    listItems: ["Entrepreneurship", "Science", "Economics", 
                "Politics", "Health", "Money", "Marketing & Sales", 
                "Personal Development", "History", 
                "Communication", "Motivation", "Psychology", "Technology"],
    menuItems : ["My Library"],
    linkTo : ["/"],
    toggleSearchBar: false
}