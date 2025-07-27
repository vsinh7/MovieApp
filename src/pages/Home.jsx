import { useEffect, useState, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, SearchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track previous value of searchQuery
  const prevSearchQuery = useRef("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log("Error is", err);
        setError("Failed to load movies .....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);


   // Detect manual clear of search input to reload the page
   useEffect(() => {
    if (prevSearchQuery.current !== "" && searchQuery === "") {
      window.location.reload();
    }
    prevSearchQuery.current = searchQuery;
  }, [searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; 
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await SearchMovies(searchQuery);
      setMovies(searchResults);
      setLoading(false);
    } catch (err) {
      console.log("error is...", err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            //movie.title.toLowerCase().startsWith(searchQuery) &&  (<MovieCard movie={movie} key={movies.id} />
            <MovieCard movie={movie} key={movies.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
