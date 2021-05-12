import {React, useState} from 'react'
import NavBar from './NavBar'
import NavBarWithSearch from './NavBarWithSearch'
import './NavBar.css'

const IntegratedNavBar = ({toggleSearchBar, ...props}) => {

    const [showSearchBar, setShowSearchBar] = useState(false)

    const handleChange = () => {
        setShowSearchBar(!showSearchBar)
        props.setSearchTerm("")
    }

    return (
        <div>
            {!showSearchBar ? 
                <NavBar {...props} onClickSearch={handleChange} /> :

                <NavBarWithSearch onClickSearch={handleChange} 
                placeholder="Search by Author or Title"
                    searchResult = {props.searchResult}
                    setSearchResult = {props.setSearchResult}
                    searchTerm = {props.searchTerm}
                    setSearchTerm = {props.setSearchTerm}
                    bookList = {props.bookList}
                />            
            }
        </div>
    )
}

export default IntegratedNavBar
