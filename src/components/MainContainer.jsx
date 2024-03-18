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
    <div className='md:pt-0 pt-40'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;