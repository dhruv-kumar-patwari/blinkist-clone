import React from 'react'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import NoSsr from '@material-ui/core/NoSsr'
import './Form.css'
import styled from 'styled-components';
import {secondaryColor, tertiaryColor} from '../../../Theme/Theme'

const StyledTextField = styled(TextField)`
    .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: ${secondaryColor};
        }
        &.Mui-focused fieldset {
            border-color: ${tertiaryColor};
        }
    }
`;

const FormInputField = (props) => {
    var { labelText , ...rest} = props
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
            <NoSsr>
                <StyledTextField
                    size= 'medium'
                    variant= 'outlined'
                    className="field"
                    fullWidth
                    {...rest}
                >{props.children}</StyledTextField>
            </NoSsr>
        </div>
    )
}

export default FormInputField
