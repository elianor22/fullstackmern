import React from 'react'

import {Link } from 'react-router-dom'
import propTypes from 'prop-types'



export default function Button(props) {

    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadows) className.push("btn-shadow")
  
    const onCLick= () => {
        if(props.onCLick) props.onCLick()
    };

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push("disabled")
    return(
        <span
        className={className.join(" ")} 
        style={props.style}
        >
             {props.isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading...</span>
                </>) : (
                    props.children
                )
             }
        </span>
    );}

    if(props.type ==="link"){
        if(props.isExternal){
            return (
                <a 
                href={props.href} 
                className={className.join(" ")} 
                style={props.style}
                target={props.target ==="_blank" ?"_blank" :undefined}
                rel={props.target ==="_blank" ?"noopener noreferrer" :undefined}
                >
                    {props.children}
                </a>
            );
        }else{
            return (
                <Link 
                to={props.href} 
                className={className.join(" ")} 
                style={props.style}
                onClick={onCLick}
                > 
                    {props.children}
                </Link>
            )
        }
    }

    return (
        <Button 
        className={className.join(" ")} 
        style={props.style}
        onClick={onCLick}
        >
             {props.children}
        </Button>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onCLick: propTypes.func,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isExternal: propTypes.bool,
    isLoading: propTypes.bool,
    hasShadows: propTypes.bool,
    isLarge: propTypes.bool,
    isSmall: propTypes.bool,
    isBlock: propTypes.bool,
   
    

}
