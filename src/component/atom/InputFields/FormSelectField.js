import React from 'react'
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NoSsr from '@material-ui/core/NoSsr'
import './Form.css'
import {secondaryColor, tertiaryColor} from '../../../Theme/Theme'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    select: {
        "&:before": {
            // normal
            borderColor: tertiaryColor
        },
        "&:after": {
            // focused
            borderColor: tertiaryColor
        },
        "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            // hover
            borderColor: tertiaryColor
        }
    }
});

const FormSelectField = (props) => {
    const classes = useStyles();
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
                    className={classes.select}
                    {...rest}
                >
                    {menuItemsList.map((listItem) => (<MenuItem value={listItem.id}>{listItem.name}</MenuItem>))}
                </Select>
            </NoSsr>
        </div>
    )
}

export default FormSelectField
