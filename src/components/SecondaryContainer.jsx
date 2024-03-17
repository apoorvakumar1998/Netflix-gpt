import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  return (
    <>
      <MovieList title='Now Playing' movies={movies.nowPlayingMovies} />
      <MovieList title='Popular Movies' movies={movies.popularMovies} />
    </>
  )
}

export default SecondaryContainer;