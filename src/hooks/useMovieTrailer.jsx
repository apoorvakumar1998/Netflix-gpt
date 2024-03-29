

import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    const videoData = json.results.filter(movie => movie.type === 'Trailer');
    const trailer = videoData.length ? videoData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useMovieTrailer;