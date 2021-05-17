import React from 'react'
import ButtonItem from '../../atom/Button/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faFlask, faRupeeSign, 
        faLandmark, faFirstAid, faPiggyBank, 
        faChartLine, faComments, faMonument, 
        faLightbulb, faBrain, faMicrochip } from '@fortawesome/free-solid-svg-icons'


const icons = {
    "Entrepreneurship":{
        src: <FontAwesomeIcon icon={faRocket} />
    },
    "Science":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "Test":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "Economics":{
        src: <FontAwesomeIcon icon={faRupeeSign} />
    },
    "Politics":{
        src: <FontAwesomeIcon icon={faLandmark} />
    },
    "Health":{
        src: <FontAwesomeIcon icon={faFirstAid} />
    },
    "Money":{
        src: <FontAwesomeIcon icon={faPiggyBank} />
    },
    "Marketing & Sales":{
        src: <FontAwesomeIcon icon={faChartLine} />
    },
    "Personal Development":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "History":{
        src: <FontAwesomeIcon icon={faMonument} />
    },
    "Communication":{
        src: <FontAwesomeIcon icon={faComments} />
    },
    "Motivation":{
        src: <FontAwesomeIcon icon={faLightbulb} />
    },
    "Psychology":{
        src: <FontAwesomeIcon icon={faBrain} />
    },
    "Technology":{
        src: <FontAwesomeIcon icon={faMicrochip} />
    },
    "Philosophy":{
        src: <FontAwesomeIcon icon={faBrain} />
    }
}


const DropDownMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (listItem) => {
        props.findBooksByCategory(listItem.id)
        props.setFilterTerm(listItem.name)
        setAnchorEl(null);
    };

    const {listItems,  ...others} = props

    return (
        <div>
            <ButtonItem 
                color= 'primary'
                children= "Explore"
                variant= "text"
                endIconNeeded= "more"
                isOpen = {anchorEl}
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{top: "60px", left: "10px", right: "0px", overflow: "hidden", minWidth: "100%"}}
            >
                <Container maxWidth="md">
                    <Grid container direction={"row"}>
                        {listItems.map((listItem) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <MenuItem
                                    onClick={() => handleSearch(listItem)}
                                    color= 'secondary'
                                    variant= "text"
                                    size= 'large'
                                    style={{paddingBottom: "10px"}}
                                    {...others}>
                                        <ListItemIcon>
                                            {icons[listItem.name].src}
                                        </ListItemIcon>
                                        <Typography variant="h6">
                                            {listItem.name}
                                        </Typography>
                                    </MenuItem>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Menu>
        </div>
    )
}

export default DropDownMenu
