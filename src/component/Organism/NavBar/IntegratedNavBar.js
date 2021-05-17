import {React, useState, useEffect } from 'react'
import NavBar from './NavBar'
import NavBarWithSearch from './NavBarWithSearch'
import './NavBar.css'

const IntegratedNavBar = ({toggleSearchBar, ...props}) => {

    const [showSearchBar, setShowSearchBar] = useState(false)

    const handleChange = (e, valueToSearch) => {
        setShowSearchBar(!showSearchBar)
        valueToSearch ? props.setSearchTerm(valueToSearch) : props.setSearchTerm("")
    }

    const handleSearch = (valueToSearch) => {
        if (valueToSearch)
            props.setSearchTerm(valueToSearch)
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

    useEffect(() => {
        handleSearch()
    }, [props.searchTerm]);

    return (
        <div>
            {!showSearchBar ? 
                <NavBar {...props} onClickSearch={handleChange} 
                    searchFunction={handleSearch} 
                    setBookList={props.setBookList} 
                    findBooksByCategory={props.findBooksByCategory}
                    bookList = {props.bookList}/> :

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
