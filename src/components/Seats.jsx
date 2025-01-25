import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import styled from "styled-components"



export default function Seats({setSelectedSeats,selectedSeats,setMovieName, setSessionDate, setSessionTime}){
let idSession = useParams()
idSession = idSession.idSessao

const [seats, setSeats] = useState(null)
console.log(selectedSeats)

function selectSeat(seatName){
    if(selectedSeats.includes(seatName)) { 
         
        const seatsSelectedUpdated = selectedSeats.filter((item) => item != seatName)
        setSelectedSeats(seatsSelectedUpdated)
       
    }else{
       
        setSelectedSeats([...selectedSeats, seatName])
        
    }
     
}


useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
    promise.then((res) => {
        const data = res.data;
        setSeats(data.seats);
        setSessionDate(data.day.date);
        setMovieName(data.movie.title);
        setSessionTime(data.name);
    });
    promise.catch((error)=>{console.log(error)})
    
},[])

   if(!seats){
    return(<>
    Carregando...
    </>)
   }

    return(
    <>
    <SeatsPlaces>
    {seats.map((seat)=>(
         <SeatPlace key={seat.id} isAvailable={seat.isAvailable}   isSelected={selectedSeats.includes(seat.name)} onClick={()=>selectSeat(seat.name)}>
         
        <h1> {seat.name}</h1>
     </SeatPlace>
    ))}
    </SeatsPlaces>
    </>
    )
}

const SeatsPlaces = styled.div`

    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    height: 50vw;
    width: 70vw;
    max-width: 400px;
    max-height: 400px;
    gap:2%;
    margin-bottom: 3vh;
`

const SeatPlace = styled.div`
    height: 3vh;
    width: 3vh;
    min-height: 10px;
    min-width: 10px;
    font-family: "Sarala", serif;
    font-size: x-small;
    color:#2B2D36;
    background-color: ${(props) => ( props.isSelected == true ? "#fadbc5" :  props.isAvailable == true ? "#9DB899" : "#2B2D36")};
    border:${(props)=>( props.isSelected == true ? "2px solid #EE897F" : "none")};
    border-radius: 100%;
    text-align: center;
    justify-items: center;
    align-content:center;
    pointer-events: ${(props)=>props.isAvailable == true ? "" : "none"};
    
    
    
`