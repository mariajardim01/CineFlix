import Title from "./Title"
import Sessions from "./Sessions"
import styled from "styled-components"

export default function SessionsPage(){
    return(
        <>
        <Page>
       <Title text="Selecione o horário" color="white"></Title>
       <Sessions>
        
       </Sessions>
        </Page>

        
        </>
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
padding-left:5vw ;
padding-right: 5vw;
align-items: center;

    
`