import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import axios from 'axios';


const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          //console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  // const navigate = (e, to) => {
  //   e.preventDefault();
  //   history.pushState(null, null, to);
  // };

  return (
    <div className="movie-list">
      { 
        movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie}/>
        ))
      }
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  console.log(movie);
  return (
    <MovieCard id={movie.id} title={title} metascore={metascore} director={director} stars={stars} />
  );
}

export default MovieList;
