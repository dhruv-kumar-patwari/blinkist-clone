import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../../atom/Button/Button'
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography'
import img from '../../../images/1984OrwellBigBrotherImage_01.jpg'
import './Card.css'

const BookCard = (props) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="Startup Seed Funding for the Rest of Us"
                image={img}
                title="Startup Seed Funding for the Rest of Us"
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
                    <Button size="medium" color="secondary" variant="contained" fullWidth="true">
                        Read Again
                    </Button> : 
                    <Button size="medium" color="primary" variant="contained" fullWidth="true">
                        Mark as Finished
                    </Button>
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
