import Link from '@material-ui/core/Link';
import big from '../../../logo/big.svg'
import small from '../../../logo/small.svg'

const LinkItem = (props) => {
    return (
        <Link {...props} >
            {props.size === "big" ? 
            <img style={{display: 'block', maxWidth: '15rem'}} src={big} alt="logo" /> : 
            (props.size === "small" ? 
            <img src={small} alt="logo" /> : props.children)}
        </Link>
    )
}

export default LinkItem
