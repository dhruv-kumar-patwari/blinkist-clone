import React from 'react'
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NoSsr from '@material-ui/core/NoSsr'
import './Form.css'
import styled from 'styled-components';
import {secondaryColor, tertiaryColor} from '../../Theme/Theme'

const StyledSelectField = styled(Select)`
    .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: ${secondaryColor};
        }
        &.Mui-focused fieldset {
            border-color: ${tertiaryColor};
        }
    }
`;

const FormSelectField = (props) => {
    var { labelText, menuItemsList , ...rest} = props
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
            <NoSsr>
                <StyledSelectField
                    size= 'medium'
                    variant= 'outlined'
                    fullWidth
                    {...rest}
                >
                    {menuItemsList.map((listItem) => (<MenuItem value={listItem.id}>{listItem.name}</MenuItem>))}
                </StyledSelectField>
            </NoSsr>
        </div>
    )
}

export default FormSelectField
