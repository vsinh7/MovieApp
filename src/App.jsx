
import './css/App.css'
import MovieCard from './components/MovieCard'
import Favorites from "./pages/Favorites"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from './components/NavBar'

function App() {


  return (
    
    <div>
      <NavBar/>
    <main className='main-content'> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
