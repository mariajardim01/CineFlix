import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Line from "./Line"

export default function Sessions (){
    const [sessions, setSessions] = useState(null)
    const [idSessions, setIdSessions] = useState(null)
    let idMovie = useParams()
    idMovie = idMovie.idFilme

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`)
        promise.then((res)=>{setSessions(res.data.days), setIdSessions(res.data.id)})
        promise.catch((error)=>{console.log(error.response.data)})
        console.log(sessions)
    },[])

    console.log(sessions)
  
    
    if(!sessions){
        return(
            <>
            Carregando...
            </>
        )
    }else{
    
    return(
        <SessionsTimes>
            {sessions.map((session) => (
                <Session key={session.id}>
                    <h1>{`${session.weekday},  ${session.date}`}</h1>
                    <Line></Line>
                    <ShowTimes>
                    {session.showtimes.map((showtime)=>(
                        <ShowTime key={showtime.id} to={`/assentos/${idSessions}`}>{showtime.name}</ShowTime>
                    ))}
                    </ShowTimes>
                </Session>
            ))}
        </SessionsTimes>
    )
}}

const SessionsTimes = styled.div`
display: flex;
flex-direction: column;
width: 100%;
    gap: 4vh;
`

const Session = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #2b2d36;
    text-align: center;
    align-items: center;
    border-radius: 8px;

    h1{
        margin-top: 2vh;
        margin-bottom: 2vh;
        font-family: "Sarala", serif; 
        color: white;
        font-size: large;
        font-weight: 400;
    }

   
`

const ShowTimes = styled.div`

    display: flex;
   width: 80%;
    margin-top: 2vh;
    margin-bottom: 2vh;
    flex-wrap: wrap;
    align-items: start;
    
    
    gap:6vw;
    
`

const ShowTime = styled(Link)`
    display: flex;
    height: 4vh;
    width: 16vw;
    
    border-radius: 4px;
    border: 2px solid #EE897F ;
    
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color:#EE897F;
    font-family: "Sarala", serif;
`