import {React, useState, useEffect} from 'react'
import ButtonItem from '../../atom/Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import SearchInputField from '../../atom/InputFields/SearchInputField'
import './NavBar.css'

const NavBarWithSearch = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleSearch = (e) => {
        props.setSearchTerm(e.target.value)
        if(props.searchTerm !== ""){
            const filteredBooks = props.bookList.filter((book) => {
                return Object.values(book)
                                .join(" ")
                                .toLowerCase()
                                .includes(props.searchTerm
                                .toLowerCase())
            })

            props.setSearchResult(filteredBooks)
        }
        else{
            props.setSearchResult(props.bookList)
        }
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
                />
            </div>
            <ButtonItem children="Logout" variant="contained" className="logout" color="primary" />
        </div>
    )
}

export default NavBarWithSearch
