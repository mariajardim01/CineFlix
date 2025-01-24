import logoIMg from "../assets/logoImage.png"
import styled from "styled-components"

export default function NavBar(){
    return(
        <Header>
        <img src={logoIMg}></img>
        <h1>CineFlix</h1>
        </Header>
    )
}

const Header = styled.div`
    height: 10vh;
    background-color:#EE897F ;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    h1{
        font-family: "Raleway", serif;
        font-size: xx-large;
        font-weight: 600;
        color:#FADBC5;
    }
    img{
        height: 50%;
        
    }
`