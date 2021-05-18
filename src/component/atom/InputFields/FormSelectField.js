import React from 'react'
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NoSsr from '@material-ui/core/NoSsr'
import './Form.css'


const FormSelectField = (props) => {
    var { labelText, menuItemsList , ...rest} = props
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
            <NoSsr>
                <Select
                    size= 'medium'
                    variant= 'outlined'
                    fullWidth
                    {...rest}
                >
                    {menuItemsList.map((listItem) => (<MenuItem value={listItem.id}>{listItem.name}</MenuItem>))}
                </Select>
            </NoSsr>
        </div>
    )
}

export default FormSelectField
