import Title from "./Title"
import Movies from "./Movies"
import styled from "styled-components"

export default function MoviesPage (){
    return(
        <Page>
        <Title text="Em Cartaz" color="white"></Title>
        <Movies></Movies>
        </Page>
    )
}

const Page = styled.div`
margin-top: 10vh;
background-color: #212226;
min-height: 100vh;
height: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding-left:10vw ;
padding-right: 10vw;
align-items: center;

    
`