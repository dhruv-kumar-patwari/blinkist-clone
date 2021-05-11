import React from 'react'
import Button from '../../atom/Button/Button'
import './List.css'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const List = (props) => {
    const {listItems,  ...others} = props
    // var [heading, ...rest] = listItems
    return (
        <div>
            {/* <Typography variant="body2" color="primary"> {heading} </Typography> */}
            <ButtonGroup orientation={props.orientation}>
                {listItems.map((listItem) => (<Button children={listItem} {...others} />))}
            </ButtonGroup>
        </div>
    )
}

export default List
