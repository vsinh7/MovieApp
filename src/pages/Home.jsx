import MovieCard from "../components/MovieCard";


function Home() {

    const movies = [
      {id: 1, title: "Myra's Movie", release_date:"2021"},
      {id: 2, title: "Vidya's Movie", release_date:"1990"},
      {id: 3, title: "Ankita's Movie", release_date:"1992"},
      {id: 4, title: "Matrix's Movie", release_date:"1999"}

    ];
  return (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) =>(
            <MovieCard movie={movie} key={movies.id}/>
            ))}
            </div>  
    </div>
  )
}

export default Home
