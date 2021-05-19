import React from 'react'
import {render, cleanup} from '@testing-library/react'
import FormSelectField from './FormSelectField'

afterEach(cleanup)

const menuItemsList = 
[
    {
        id: 1,
        name: "Entrepreneurship"
    },
    {
        id: 2,
        name: "Science"
    },
    {
        id: 3,
        name: "Economics"
    },
    {
        id: 4,
        name: "Politics"
    },
]

// it('should take a snapshot', () => {
//     const { asFragment } = render(<FormSelectField menuItemsList={menuItemsList}  labelText="Test"/>)

//     expect(asFragment(<FormSelectField />)).toMatchSnapshot()
// });

it('Label should be equal to the passed value', () => {
    const { getByText } = render(<FormSelectField menuItemsList={menuItemsList} labelText="Test" value={1}/>)

    getByText("Test")
    getByText("Entrepreneurship")
});

it('Select should display the value picked from dropdown menu', () => {
    const { getByText } = render(<FormSelectField menuItemsList={menuItemsList} labelText="Test" value={2}/>)

    getByText("Science")
});