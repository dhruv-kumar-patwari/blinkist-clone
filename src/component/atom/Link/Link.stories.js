import React from 'react';
import LinkItem from './Link';

export default {
    title: "Atom/Link",
    component: LinkItem
}

const Template = args=>(<LinkItem {...args} />)

export const Primary = Template.bind({})
Primary.args = {
    variant: 'body1',
    color: 'primary',
    gutterBottom: true,
    children: "Primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'body2',
    color: 'secondary',
    underline: 'none',
    children: "Secondary"
}

export const BigLogo = Template.bind({})
BigLogo.args = {
    size: "big",
}

export const SmallLogo = Template.bind({})
SmallLogo.args = {
    size: "small"
}
