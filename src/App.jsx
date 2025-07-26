
import './App.css'
import MovieCard from './components/MovieCard'
import Favorites from "./pages/Favorites"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {


  return (
    <>
      {/* <MovieCard movie={{title: "Myra's Film", release_date: "2025"}}/> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </>
  )
}

export default App
