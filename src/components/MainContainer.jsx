import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const movies = useSelector(state => state.movies?.nowPlayingMovies);
  if (!movies) return;

  const randomNumber = Math.floor(Math.random() * 20);
  const mainMovie = movies[randomNumber];

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  )
}

export default MainContainer;