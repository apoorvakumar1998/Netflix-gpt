
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const getNowPlayingMoviesList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}


export default useNowPlayingMovies;