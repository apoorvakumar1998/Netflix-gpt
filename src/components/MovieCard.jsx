import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-44'>
      <img className='rounded-lg' alt='poster' src={POSTER_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard