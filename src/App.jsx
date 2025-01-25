import MoviesPage from './components/MoviesPage'
import NavBar from './components/NavBar'
import SessionsPage from './components/SessionsPage'
import SeatsPage from './components/SeatsPage'
import './reset.css'
import './style.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import SuccessPage from './components/SuccessPage'


function App() {
   const [movieName, setMovieName] = useState(null)
   const [sessionDate, setSessionDate] = useState("")
   const [sessionTime, setSessionTime] = useState("")
   const [selectedSeats, setSelectedSeats] = useState([])
   const [name, setName] = useState("")
   const [CPF, setCPF] = useState("")
   
  return (
    <>
    
    
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
    <Route path="/" element={<MoviesPage /> } />
    <Route path="/sessoes/:idFilme" element={<SessionsPage  />} />
    <Route path="/assentos/:idSessao" element={<SeatsPage setName={setName} name={name} setCPF={setCPF} CPF={CPF} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setMovieName={setMovieName} setSessionDate={setSessionDate} setSessionTime={setSessionTime} />} />
    <Route path="/sucesso" element={<SuccessPage  movieName={movieName} sessionDate={sessionDate} name={name} CPF={CPF} selectedSeats={selectedSeats} sessionTime={sessionTime}/>} />
    </Routes>
    

    </BrowserRouter>
    </>
  )
}

export default App
