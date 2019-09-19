import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <NavLink key={props.id} to={'/movies/' + props.id}><h2>{props.title}</h2></NavLink>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars ? props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      )) : null}
    </div>
  );
};

export default MovieCard;
