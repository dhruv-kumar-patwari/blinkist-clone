import React from 'react'
import {render, screen} from '@testing-library/react'
import ButtonItem from './Button'

it('Button name should equal the children prop', () => {
    const { getByText } = render(<ButtonItem children="Test" />)

    getByText("Test")
});