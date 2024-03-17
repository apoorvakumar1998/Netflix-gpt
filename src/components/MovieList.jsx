import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  return (
    <div className='m-10 relative bottom-64'>
      <div className='text-white font-bold text-2xl mb-6'>{title}</div>
      <div className='flex overflow-x-scroll flex-nowrap'>
        <div className='flex items-center gap-4'>
          {
            movies?.map(movie =>
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
              />)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList