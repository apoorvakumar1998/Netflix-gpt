import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSuggestions = () => {
  const { movieNames, movieResults } = useSelector(state => state.gpt);
  if (!movieNames) return;

  return (
    <div className='p-4 mt-72'>
      {
        movieNames.map((movie, index) =>
          <MovieList title={movie} movies={movieResults[index]} />
        )
      }
    </div>
  )
}

export default GptSuggestions