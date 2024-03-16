

import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(state => state.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe className='w-screen aspect-video top-0 -z-10 absolute'
        src={'https://www.youtube.com/embed/' + trailerVideo?.key + '?autoplay=1&mute=0&modestbranding=0&autohide=1&showinfo=0&controls=0'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground