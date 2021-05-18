import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default {
    title: "Molecule/IconButton",
    component: IconButton
}

const Template = args=>(<IconButton {...args} />)


export const Search = Template.bind({})
Search.args = {
    children: <SearchIcon fontSize="large" />
}

export const Facebook = Template.bind({})
Facebook.args = {
    children: <FacebookIcon fontSize="large" />
}

export const Twitter = Template.bind({})
Twitter.args = {
    children: <TwitterIcon fontSize="large" />
}

export const LinkedIn = Template.bind({})
LinkedIn.args = {
    children: <LinkedInIcon fontSize="large" />
}

export const Instagram = Template.bind({})
Instagram.args = {
    children: <InstagramIcon fontSize="large" />
}