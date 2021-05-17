import React from 'react'
import ButtonItem from '../../atom/Button/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const List = (props) => {
    const {listItems, startIconNeeded, linkTo,   ...others} = props
    return (
        <div>
            <ButtonGroup orientation={props.orientation}>
                {startIconNeeded?  
                    listItems.map((listItem) => (<ButtonItem children={listItem} startIconNeeded={listItem} {...others} />)) : 
                    listItems.map((listItem, index) => (<ButtonItem children={listItem} onClick={props.restore_list} {...others} />))}
            </ButtonGroup>
        </div>
    )
}

export default List
