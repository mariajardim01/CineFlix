import logoIMg from "../assets/logoImage.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <>
        <Header >
            <Logo to="/">
            <img src={logoIMg}></img>
            <h1>CineFlix</h1>
            </Logo>
        </Header>
        </>
    )
}

const Header = styled.div`
position: fixed;
top: 0;
z-index: 3;
    height: 10vh;
    width: 100vw;
    background-color:#EE897F ;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
   
    
`

const Logo = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    text-decoration: none;
    width: fit-content;
    h1{
        font-family: "Raleway", serif;
        font-size: xx-large;
        font-weight: 600;
        color:#FADBC5;
    }
    img{
        height: 5vh;
        
    }
`