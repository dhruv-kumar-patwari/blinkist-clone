import Button from '@material-ui/core/Button';
import big from '../../../logo/big.svg'
import small from '../../../logo/small.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faFlask, faRupeeSign, faLandmark, faFirstAid, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const icons = {
    "Entrepreneurship":{
        src: <FontAwesomeIcon icon={faRocket} />
    },
    "open": {
        src: <ExpandLessIcon />
    },
    "close":{
        src: <ExpandMoreIcon />
    },
    "Science":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "Economics":{
        src: <FontAwesomeIcon icon={faRupeeSign} />
    },
    "Politics":{
        src: <FontAwesomeIcon icon={faLandmark} />
    },
    "Health":{
        src: <FontAwesomeIcon icon={faFirstAid} />
    },
    "Money":{
        src: <FontAwesomeIcon icon={faPiggyBank} />
    },
}


const ButtonItem = (props) => {
    return (props.endIconNeeded? 
                <Button endIcon = {props.isOpen ? icons.open.src : icons.close.src} {...props} >
                    {props.children}
                </Button> : 
                <Button {...props} style={{justifyContent:"center"}}>
                    {props.logoSize === "big" ? 
                    <img style={{display: 'block', minWidth: "9rem"}} src={big} alt="logo" /> : 
                    (props.logoSize === "small" ? 
                    <img src={small} alt="logo" /> : props.children)}
                </Button>
    )            
}

export default ButtonItem
