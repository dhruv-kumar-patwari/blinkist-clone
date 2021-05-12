import React from 'react'
import Input from '@material-ui/core/Input'
import './Form.css'
import CloseIcon from '@material-ui/icons/Close';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


const SearchInputField = (props) => {
    return (
        <div>
            <Input 
                size= 'large'
                endAdornment= {
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={props.onClickCross}
                            edge="end"
                            >
                            <CloseIcon />
                        </IconButton>
                    </InputAdornment>
                }
                fullWidth
                {...props}
            />
        </div>
    )
}

export default SearchInputField
