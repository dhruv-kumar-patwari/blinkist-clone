import React from 'react'
import CardGrid from '../CardGrid/CardGrid'
import TabsList from '../../atom/Tabs/Tabs'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useEffect } from 'react';

const books = [
    {
        id: 1,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        id: 2,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        id: 3,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },

    {
        id: 4,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        id: 5,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        id: 6,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        id: 7,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        id: 8,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        id: 9,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
    {
        id: 10,
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    },
    {
        id: 11,
        bookTitle: "1984",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    },
]


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const isFinished = (x) => {
    return x.isFinished
}

const isUnFinished = (x) => {
    return !x.isFinished
}


const CardsInTabs = () => {
    const [bookList, setBookList] = React.useState(books)

    const [value, setValue] = React.useState(0);

    const [unFinished, setUnFinished] = React.useState(
        bookList.filter(isUnFinished)
    );
    
    const [finished, setFinished] = React.useState(
        bookList.filter(isFinished)
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        console.log(bookList)
        setUnFinished(bookList.filter(isUnFinished))
        setFinished(bookList.filter(isFinished))
    }, [bookList]);
    

    const changeReadStatus = (e, data) => {
        setBookList(
            bookList.map(book => 
                book.id === data 
                ? {...book, isFinished : !book.isFinished} 
                : book 
))
    }
    
    return (
        <>
            <TabsList children={["Currently Reading", "Finished"]} value={value} onChange={handleChange} />
            <TabPanel value={value} index={0}>
                <CardGrid bookList={unFinished} onClick={changeReadStatus} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CardGrid bookList={finished} onClick={changeReadStatus} />
            </TabPanel>
        </>
    )
}

export default CardsInTabs
