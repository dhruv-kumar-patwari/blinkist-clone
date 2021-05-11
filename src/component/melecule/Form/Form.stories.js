import React from 'react';
import Form from './Form'

export default {
    title: "Molecule/Form",
    component: Form,
}

const Template = args => (<Form {...args} />)

export const Default = Template.bind({})