import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonItem from '../../atom/Button/Button'
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography'
import img from '../../../images/download.png'
import './Card.css'

const BookCard = (props) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={props.bookTitle}
                image={img}
                title={props.bookTitle}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" color="primary" component="h2">
                    {props.bookTitle}
                </Typography>
                <Typography className="author" gutterBottom variant="body1" color="secondary" component="h2">
                    {props.bookAuthor}
                </Typography>
                <Typography gutterBottom variant="body2" component="h2">
                    <div class="timeSection">
                        <ScheduleIcon className="icon"/> <div class="timeText">{props.bookDuration}-minute read</div>
                    </div>
                </Typography>
            </CardContent>
            <CardActions  onClick={(e) => props.onClick(e, props.id)}>
                {props.isFinished ? 
                    <ButtonItem size="medium" color="secondary" variant="contained" fullWidth="true">
                        Read Again
                    </ButtonItem> : 
                    <ButtonItem size="medium" color="primary" variant="contained" fullWidth="true">
                        Mark as Finished
                    </ButtonItem>
                }
            </CardActions>
    </Card>
    )
}

BookCard.defaultProps = {
    bookTitle: "Animal Farm",
    bookAuthor: "Gorge Orwell",
    bookDuration: "20",
}

export default BookCard
