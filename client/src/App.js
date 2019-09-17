import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" component={MovieList} />
      <Route path="/movies/:id" render={props => {
        const currentId = props.match.params.id;

        //console.log(MovieList;
        // const MovieObject = MovieList.find(movie => {
        //   return movie.id === currentId;
        // })

        return <Movie id={currentId} />
      }} />
    </div>
  );
};

export default App;
