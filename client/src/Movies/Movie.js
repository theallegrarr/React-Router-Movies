import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState({});
 
  useEffect(() => {
    const id = props.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  console.log('this is it ',movie);
  //return null;

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard id={movie.id} title={title} metascore={metascore} director={director} stars={stars} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
