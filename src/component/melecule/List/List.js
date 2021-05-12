import React from 'react'
import ButtonItem from '../../atom/Button/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { BrowserRouter as Router, 
    Switch, Route, Link} from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none"
    }
}))


const List = (props) => {
    const classes = useStyles()
    const {listItems, startIconNeeded, linkTo,   ...others} = props
    return (
        <div>
            <ButtonGroup orientation={props.orientation}>
                {startIconNeeded?  
                    listItems.map((listItem) => (<ButtonItem children={listItem} startIconNeeded={listItem} {...others} />)) : 
                    listItems.map((listItem, index) => (<Link className={classes.link} to={linkTo[index]}>
                                                            <ButtonItem children={listItem} {...others} />
                                                        </Link>))}
            </ButtonGroup>
        </div>
    )
}

export default List
