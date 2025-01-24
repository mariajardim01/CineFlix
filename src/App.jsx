import MoviesPage from './components/MoviesPage'
import NavBar from './components/NavBar'
import SessionsPage from './components/SessionsPage'
import './reset.css'
import './style.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <>
    <NavBar></NavBar>

    <BrowserRouter>

    <Routes>
    <Route path="/" element={<MoviesPage />} />
    <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
