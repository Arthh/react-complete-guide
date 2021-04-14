import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () =>{
    setLoading(true);
    try {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const transformedMovies = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        };
      })
      setMovies(transformedMovies);
      setLoading(false);
    } catch {
      console.log('error');
    }
   
    },[]);
   
    useEffect(() => {
      fetchMoviesHandler();
    },[fetchMoviesHandler]);
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {loading ? <p>Loading</p> : <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
