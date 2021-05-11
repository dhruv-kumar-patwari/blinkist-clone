import React from 'react'
import ButtonItem from '../../atom/Button/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const DropDownMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
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
                style={{top: "40px", left: "10px", right: "0px", overflow: "hidden", minWidth: "100%"}}
            >
                <Container maxWidth="md">
                    <Grid container direction={"row"}>
                        {listItems.map((listItem) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <MenuItem
                                    onClick={handleClose}
                                    children={listItem}
                                    color= 'secondary'
                                    variant= "text"
                                    size= 'large'
                                    style={{paddingBottom: "10px"}}
                                    {...others}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Menu>
        </div>
    )
}

export default DropDownMenu
