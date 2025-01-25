import styled from "styled-components"

export default function Button({text, onClick}){
    return(<ButtonCss  onClick={onClick}>{text}</ButtonCss>)

}

const ButtonCss = styled.button`
    
        height: 6vh;
        border-radius: 8px;
        font-family: "Sarala", serif;
        background-color: #EE897F;
        border: none;
        color: #2B2D36;
        
        &:active{
        border: none;
       background-color: #e27268;}
    
`