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
                <h1>{movie.title}</h1>
                <div></div>
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
    position: relative;
    margin-bottom: 5vw;
    box-sizing: border-box;
   img{
    border-radius:8px ;
    height: 25vh;
    width: auto;
   }
   h1{
    display: none;
    position: absolute;
    bottom: 1vh;
    font-family: "Sarala", serif; 
    color: white;
    margin-left: 1vw;
    margin-right: 1vw ;
    z-index: 2;
   }
   div{
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border-radius: 8px;
    background: linear-gradient(180deg, #6868682d, #040404)
    
   }
   &:hover{
    
    h1{
        display: flex;
    }
    div{
        display: flex;
    }

   }
`