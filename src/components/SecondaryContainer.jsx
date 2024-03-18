import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  return (
    <div className='bg-black'>
      <MovieList title='Now Playing' movies={movies.nowPlayingMovies} />
      <MovieList title='Popular Movies' movies={movies.popularMovies} />
    </div>
  )
}

export default SecondaryContainer;