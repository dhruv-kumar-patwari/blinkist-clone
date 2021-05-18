import Button from '@material-ui/core/Button';
import big from '../../../assets/logo/big.svg'
import small from '../../../assets/logo/small.svg'
import icons from '../../../assets/icons'


const ButtonItem = (props) => {
    return (props.endIconNeeded? 
                <Button endIcon = {ifOpenRenderUpArrowElseDownArrow(props)} style={{paddingRight: "2rem"}} {...props} >
                    {props.children}
                </Button> : 
                <Button {...props} style={{justifyContent:"center"}}>
                    {renderButtonWithLogoOrText(props)}
                </Button>
    )            
}

export default ButtonItem


function ifOpenRenderUpArrowElseDownArrow(props) {
    return props.isOpen ? icons.open.src : icons.close.src;
}

function renderButtonWithLogoOrText(props) {
    return props.logoSize === "big" ?
        <img style={{ display: 'block', minWidth: "9rem" }} src={big} alt="logo" /> :
        (renderSmallButtonOrButtonWithText());

    function renderSmallButtonOrButtonWithText() {
        return props.logoSize === "small" ?
            <img src={small} alt="logo" /> : props.children;
    }
}

