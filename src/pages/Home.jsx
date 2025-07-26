import MovieCard from "../components/MovieCard";


function Home() {

    const movies = [
      {id: 1, title: "Myra's Movie", release_date:"2021"},
      {id: 2, title: "Vidya's Movie", release_date:"1990"},
      {id: 3, title: "Ankita's Movie", release_date:"1992"},
      {id: 4, title: "Matrix's Movie", release_date:"1999"}

    ];

    const handleSearch = () =>{
        
    }

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" className="search-input" 
            placeholder="Search for Movies..." />

            <button className="search-button" type="submit">Search</button>

        </form>

        <div className="movies-grid">
            {movies.map((movie) =>(
            <MovieCard movie={movie} key={movies.id}/>
            ))}
            </div>  
    </div>
  )
}

export default Home
