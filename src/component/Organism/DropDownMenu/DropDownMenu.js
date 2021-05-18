import React from 'react'
import ButtonItem from '../../molecule/Button/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography } from '@material-ui/core';
import icons from '../../../assets/icons'


const DropDownMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExplore = (listItem) => {
        props.findBooksByCategory(listItem.id)
        props.setFilterTerm(listItem.name)
        setAnchorEl(null);
    };

    const addIcon = (name) => {
        try  { 
            return icons[name].src
        }
        catch (e) {
            return icons["Test"].src
        }
    }

    const {listItems,children,  ...others} = props

    return (
        <div>
            <ButtonItem 
                color= 'primary'
                children= {children}
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
                                    onClick={() => handleExplore(listItem)}
                                    color= 'secondary'
                                    variant= "text"
                                    size= 'large'
                                    style={{paddingBottom: "10px"}}
                                    {...others}>
                                        <ListItemIcon>
                                            {addIcon(listItem.name)}
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
