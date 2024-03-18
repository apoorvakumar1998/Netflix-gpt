import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const gptSearchToggle = useSelector(state => state.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      {
        gptSearchToggle ?
          <GptSearchPage /> : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )
      }
    </>
  )
}

export default Browse