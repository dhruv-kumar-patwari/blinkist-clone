import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabsList = (props) => {


    return (
        <div>
            <Tabs
                value={props.value}
                onChange={props.onChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {props.children.map((child) => <Tab label= {child} />)}
            </Tabs>
        </div>
    )
}

export default TabsList
