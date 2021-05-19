import React from 'react'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import './Form.css'

const FormInputField = (props) => {
    var { labelText , ...rest} = props
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
                <TextField
                    size= 'medium'
                    variant= 'outlined'
                    className="field"
                    fullWidth
                    {...rest}
                >{props.children}
            </TextField>
        </div>
    )
}

export default FormInputField
