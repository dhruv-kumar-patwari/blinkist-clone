import 'typeface-roboto';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = "#032356";
const secondaryColor = "#6d787e";
const tertiaryColor = "#68DF81";
const fourthColor = "#0552be";

export const theme = createMuiTheme({
    palette: {
        primary: {
        main: primaryColor,
        },
        secondary: {
        main: secondaryColor,
        },
    },
    typography: {
        overflowWrap: "break-word",
        h6: {
        fontSize: "1.125rem",
        fontWeight: "700",
        lineHeight: "1.33",
        marginBottom: "0.5rem",
        },
        body1: {
        fontWeight: "500",
        },
        body2: {
            fontWeight: "500",
        },
        h5: {
            color: fourthColor,
            fontWeight: "700"
        }
    },
    overrides: {
        MuiLink:{
        underlineHover: {
            '&:hover': { 
            textDecorationColor: tertiaryColor,
            textUnderlineOffset: '0.3em',
            textDecorationThickness: '2px'
            },
        },
        root: {
            '&:hover': { 
            color: fourthColor,
            },
            fontWeight: "500"
        }
        },
        MuiButtonBase: {
            root: {
                borderRadius: "0",
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: ".125rem solid " + tertiaryColor ,
                },
                justifyContent: "flex-start"
            },
        },
        MuiButton: {
            root: {
                borderRadius: ".25rem",
                textTransform: "none",
                color: primaryColor,
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            },
            textPrimary: {
                color: primaryColor,
                fontSize: "1rem",
                paddingBottom: "0rem",
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "0",
                    borderBottom: ".15rem solid " + tertiaryColor ,
                }
            },
            endIcon: {
                color: primaryColor,
                '&:hover':{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "0",
                    textDecoration: "underline",
                    textDecorationColor: tertiaryColor,
                    textUnderlineOffset: '0.3em',
                    textDecorationThickness: '2px'
                }
            },
            textSecondary: {
                color: secondaryColor,
                '&:hover':{
                    color: primaryColor,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            },
            outlined: {
                border: ".125rem solid rgb(58, 70, 73)",
                '&:hover':{
                    border: ".125rem solid " + secondaryColor,
                    backgroundColor: "transparent",
                },
                color: tertiaryColor,
                padding: ".6875rem 1rem .8125rem",
                minWidth: "18.5rem",
                justifyContent: "center",
            },
            textSizeLarge:{
                fontSize: "1rem"
            }
        },
        MuiIconButton: {
            root:{
                '&:hover': {
                    backgroundColor: "transparent",
                    borderBottom: "0",
                    color: primaryColor
                }
            }
        },
        MuiTab: {
            root:{
                fontSize: "1.125rem",
            },
            textColorPrimary: {
                textTransform: "none",
                minWidth: "20%",
                '&$selected': {
                    color: tertiaryColor,
                },
                '&:hover': {
                    borderColor: secondaryColor
                },
                borderBottom: ".125rem solid " + secondaryColor ,
            },
            wrapper: {
                alignItems: "baseline",
            }
        
        },
        PrivateTabIndicator: {
            colorPrimary: {
                backgroundColor: tertiaryColor,
            }
            
        },
        MuiCard:{
            root: {
                maxWidth: "100%",
                minHeight: "25rem",
            },
            media: {
                height: "18rem",
            },
        },
        MuiPopover: {
            paper: {
                overflowY: "auto",
                minWidth: "100%"
            }
        },
        MuiListItem: {
            button: {
                color: secondaryColor,
                '&:hover':{
                    color: primaryColor,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "0"
                }
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: "1.125rem",
            }
        }
    },
    props: {
        MuiButton: {
            disableRipple: true,
        },
        MuiTab: {
            disableRipple: true
        },
    }

});
