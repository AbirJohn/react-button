import React from "react";
import styled  from 'style-components';
import PropTypes from "prop-types";


const Outlined = styled.Button`
        font-size:16px;
        padding:15px;
        border:1px solid  #e0115f;
        outline:none;
        box-shadow:none;
        background-color:##17a2b8;
        color:#dddd;
        text-decoration:none;
        transition:border 0.25s , background 0.25s ,color 0.25s;
        &:hover:{
            cursor:pointer;
            color:#ddd;
            border-color:##17a2b8;
            background-color:##17a2b8;
        }


`;


const Contained = styled.Button`
        font-size:16px;
        padding:15px;
        border:1px solid  #e0115f;
        outline:none;
        box-shadow:none;
        background-color:##ffc107;
        color:#dddd;
        text-decoration:none;
        transition:border 0.25s , background 0.25s ,color 0.25s;
        &:hover:{
            cursor:pointer;
            background-color:#dddddd;
        }


`;


const Text = styled.Button`
        font-size:16px;
        padding:15px;
        border:1px solid  ##dc3545;
        outline:none;
        box-shadow:none;
        background-color:#ddd;
        color:##dc3545;
        text-decoration:none;
        transition:border 0.25s , background 0.25s ,color 0.25s;
        &:hover:{
            cursor:pointer;

        }


`;


const reactButton = ({label,type,variant, onclick, ...props}) =>{

    let ButtonStyled = Outlined;

    if(variant === 'contained'){
        ButtonStyled = Contained    
    }

    if(variant === 'text'){
        ButtonStyled = Text  
    }

    return <ButtonStyled  {...props} type={type} variant={variant} onclick={onclick} >{label}</ButtonStyled>

}


reactButton.defaultProps={
    type:'button',
    variant:'outlined'
}





reactButton.PropTypes ={
    label:PropTypes.string.isRequired,
    type:PropTypes.oneOf(['button','submit', 'reset']),
    variant:PropTypes.oneOf(['outlined','contained','text']),
    onclick:PropTypes.func.isRequired

}



export {reactButton};
