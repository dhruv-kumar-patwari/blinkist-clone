import {React, useState, useEffect} from 'react'
import ButtonItem from '../../atom/Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import List from '../../melecule/List/List'
import './NavBar.css'
import { BrowserRouter as Router, 
    Switch, Route, Link} from "react-router-dom"

const NavBar = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <div className="NavBar">
            <div class="left">
                {(width < breakpoint) ? <ButtonItem logoSize="small" /> : <ButtonItem logoSize="big" />}
                <ButtonItem children={<SearchIcon />} onClick={props.onClickSearch}/>
                <DropDownMenu listItems={props.listItems}/>
                <List listItems={props.menuItems} linkTo={props.linkTo} color="primary" variant= "text" />
            </div>
            <ButtonItem children="Logout" variant="contained" className="logout" color="primary" />
        </div>
    )
}

export default NavBar
