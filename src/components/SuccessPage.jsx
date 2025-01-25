import Title from "./Title"
import styled from "styled-components"
import Button from "./Button"
import Line from "./Line"
import { useNavigate } from "react-router-dom"



export default function SuccessPage({ name, CPF, selectedSeats, movieName, sessionDate, sessionTime }){
    const navigate = useNavigate(); 

    
    return(
        <>
        <Page>
       <Title text="Pedido finalizado!" color="#9DB899"></Title>
       <Informations>
        <Info>
            <InfoTitle>Filme e sessão</InfoTitle>
            <Line></Line>
            <h1>{movieName}</h1>
            <h1>{`${sessionDate} às ${sessionTime}`}</h1>
            
        </Info>
        <Info>
            <InfoTitle>Ingressos</InfoTitle>
            <Line></Line>
            {selectedSeats.map((seat)=>{
                return(
                   <h1 key={seat}>{`Assento ${seat}`}</h1>
                )
            })}
            
            
        </Info>
        <Info>
            <InfoTitle>Comprador(a)</InfoTitle>
            <Line></Line>
            <h1>{`Nome: ${name}`}</h1>
            <h1>{`CPF: ${CPF}`}</h1>
            
        </Info>
       </Informations>
       <Button text="Voltar para tela inicial" onClick={() => {console.log("clicando no botão") ;navigate("/")}}></Button>
       
        </Page>

        
        </>
    )
}

const Page = styled.div`
margin-top: 10vh;
background-color: #212226;
min-height: 90vh;
height: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding-left:5vw ;
padding-right: 5vw;
align-items: center;

Button{
    margin-top: 1vh;
    width: 100%;
}

`

const Informations = styled.div`
    box-sizing: border-box;
    background-color: #2B2D36;
    border-radius: 8px;
    width: 100%;
    padding: 2vh;
`

const InfoTitle = styled.div`
    font-family: "Sarala", serif; 
    font-size: x-large;
    font-weight: 500;
    color:#EE897F;
    margin-left: 2vw;
    margin-bottom: 2vh;
`
const Info = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-content: center;
text-align: start;
margin-bottom: 4vh;
    h1{
        margin-left: 2vw;
        font-family: "Sarala", serif; 
        color: white;
        margin-top: 2vh;
        

    }
`