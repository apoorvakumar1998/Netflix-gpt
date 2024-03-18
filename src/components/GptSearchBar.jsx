import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovieDataByName = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const query = 'act as a movie recommendation system and suggest movies for the query: ' +
      searchText.current.value + '.Give me only top 5 movies .provide comma seperated results in this format - mungaru male,rangitarange,jackie,kiccha,huccha';

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });
    const movies = chatCompletion.choices[0].message.content.split(', ');
    const promisedData = movies.map(movie => getMovieDataByName(movie));
    const movieList = (await Promise.all(promisedData));
    dispatch(addGptMovieResults({ movies, movieList }));
  }

  return (
    <div className='pt-[40%] md:pt-[10%] flex items-center justify-center'>
      <form className='w-full md:w-1/2 p-4 flex gap-2' onClick={(e) => e.preventDefault()}>
        <input type='text' placeholder='Search Movies' ref={searchText}
          className='rounded-lg px-4 py-2 bg-white w-3/4'>
        </input>
        <button
          className="bg-red-600 hover:bg-red-700
           text-white font-semibold w-1/4 py-2 px-4 rounded-lg focus:outline-none focus:ring-2
            focus:ring-red-600 focus:ring-opacity-50"
          onClick={handleGptSearchClick}>
          Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar