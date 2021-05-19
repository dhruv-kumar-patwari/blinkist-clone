import React from 'react'
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './Form.css'


const FormSelectField = (props) => {
    var { labelText, menuItemsList , ...rest} = props
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
            <Select
                size= 'medium'
                variant= 'outlined'
                fullWidth
                {...rest}
            >
                {menuItemsList.map((listItem, index) => (<MenuItem key={index} value={listItem.id}>{listItem.name}</MenuItem>))}
            </Select>
        </div>
    )
}

export default FormSelectField
