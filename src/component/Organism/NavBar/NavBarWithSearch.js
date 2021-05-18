import {React, useState, useEffect} from 'react'
import ButtonItem from '../../molecule/Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import SearchInputField from '../../atom/InputFields/SearchInputField'
import './NavBar.css'
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "../Profile/Profile"


const NavBarWithSearch = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleSearch = (e) => {
        props.setSearchTerm(e.target.value)
    }
    
    return (
        <div className="NavBar">
            <div class="left">
                {(width < breakpoint) ? <ButtonItem logoSize="small" /> : <ButtonItem logoSize="big" />}
                <ButtonItem children={<SearchIcon />} onClick={props.onClickSearch} />
                <SearchInputField 
                    className="SearchBar" 
                    onClickCross={props.onClickSearch} 
                    placeholder={props.placeholder} 
                    value = {props.searchTerm}
                    onChange = {handleSearch}
                    style={{width: "30rem"}}
                />
            </div>
            {!isAuthenticated ? 
                <ButtonItem children="Login" variant="text" className="profileButton" color="primary" onClick={() => loginWithRedirect()} />
                : <Profile />
            }
        </div>
    )
}

export default NavBarWithSearch
