import React from 'react'
import BookCard from '../../melecule/Card/Card'
import Grid from '@material-ui/core/Grid';

export const CardGrid = (props) => {
    return (
        <Grid container spacing={3}>
            {props.bookList.map((book) => (
                <Grid item xs={12} sm={6} md={4}>
                    <BookCard 
                        id={book.id} 
                        bookTitle={book.bookTitle} 
                        bookAuthor={book.bookAuthor} 
                        bookDuration={book.bookDuration} 
                        isFinished={book.isFinished} 
                        onClick={(e) => props.onClick(e, book.id)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid
