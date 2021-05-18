import React from 'react';
import ButtonItem from './Button';

export default {
    title: "Molecule/Button",
    component: ButtonItem
}

const Template = args=>(<ButtonItem {...args} />)

export const Primary = Template.bind({})
Primary.args = {
    variant: 'contained', 
    color: 'primary',
    children: "Test"
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'contained', 
    color: 'secondary',
    children: "Test"
}

export const PrimaryLink = Template.bind({})
PrimaryLink.args = {
    color: 'primary',
    children: "Test",
    href: '#',
    variant: "text",
}

export const SecondaryLink = Template.bind({})
SecondaryLink.args = {
    color: 'secondary',
    children: "Test",
    href: '#',
    variant: "text",
}

export const LoadMore = Template.bind({})
LoadMore.args = {
    children: "Test",
    variant: "outlined",
}

export const PrimaryLinkWithArrowIcon = Template.bind({})
PrimaryLinkWithArrowIcon.args = {
    color: 'primary',
    children: "Test",
    href: '',
    variant: "text",
    endIconNeeded: "more",
    isOpen: true
}

export const BigLogo = Template.bind({})
BigLogo.args = {
    size: 'large',
    logoSize: "big",
    href: '#',
}

export const SmallLogo = Template.bind({})
SmallLogo.args = {
    logoSize: "small",
    href: '#',
}

export const startIcon = Template.bind({})
startIcon.args = {
    color: 'primary',
    children: "Test",
    href: '',
    variant: "text",
    startIconNeeded: "Entrepreneurship"
}