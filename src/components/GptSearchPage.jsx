import React, { useEffect } from 'react';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';
import GptSuggestions from './GptSuggestions';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addGptMovieResults([], []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="fixed -z-10 opacity-50">
        <img alt="background" src={BG_URL} />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  )
}

export default GptSearchPage;