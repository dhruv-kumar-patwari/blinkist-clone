import {useState, useEffect } from 'react';

const useFilter = (bookList) => {
    const [filteredBookList, setFilteredBookList] = useState([])
    const [filterTerm, setFilterTerm] = useState("");

    

    return { filteredBookList, setFilteredBookList, filterTerm, setFilterTerm };
};

export default useFilter;