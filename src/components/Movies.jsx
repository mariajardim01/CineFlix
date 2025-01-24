import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movies (){
    const [movies, setMovies] = useState(null)


    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then((res)=>{setMovies(res.data)
        console.log(movies) })
        promise.catch((error)=>console.log(error))
    },[])
    

    if(!movies){
        return(
            <>Carregando</>
        )
    }
    return(
        
        <MoviesPosters>
        {movies.map((movie)=>{
            return(
                <MoviePoster key={movie.id} to={`/sessoes/${movie.id}`} >
                <img src={movie.posterURL}></img>
                </MoviePoster>
            )
        })}
        </MoviesPosters>
        
    )
}


const MoviesPosters = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  
    width: 100%;
    
`



const MoviePoster = styled(Link)`

    margin-bottom: 5vw;
    box-sizing: border-box;
   img{
    border-radius:8px ;
    height: 25vh;
    width: auto;
   }
`