import Button from '@material-ui/core/Button';
import big from '../../../logo/big.svg'
import small from '../../../logo/small.svg'
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ButtonItem = (props) => {
    return (
            !props.endIconNeeded ?
                <Button {...props} >
                    {props.logoSize === "big" ? 
                    <img style={{display: 'block', minWidth: "9rem"}} src={big} alt="logo" /> : 
                    (props.logoSize === "small" ? 
                    <img src={small} alt="logo" /> : props.children)}
                </Button> :
            <Button endIcon = {props.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} {...props} >
                {props.children}
            </Button>
    )
}

export default ButtonItem
