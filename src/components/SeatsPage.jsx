import Title from "./Title"
import styled from "styled-components"
import Seats from "./Seats"
import Line from "./Line"
import BuyerForm from "./BuyerForm"

export default function SeatsPage({setName, name, setCPF, CPF, selectedSeats, setSelectedSeats, setMovieName ,setSessionDate,setSessionTime}){
    return(
        <>
        <Page>
       <Title text="Selecione o(s) assento(s)" color="white"></Title>
       <Seats setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} setMovieName={setMovieName} setSessionDate={setSessionDate} setSessionTime={setSessionTime}></Seats>
       <Line className="margin"></Line>
       <BuyerForm setName={setName} name={name} setCPF={setCPF} CPF={CPF} seats={selectedSeats} ></BuyerForm>
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


`