import React from 'react'

import movies from '../movies.json';
import MovieListing from './MovieListing';

const ListMovies = ({isHome = false}) => {
const listMovies = isHome ? movies.Movies.slice(0,4) : movies;
    
  return (
    <div className='flex pt-5'>
       
        {listMovies.map((movie) => (
            <MovieListing key={movie.id} movie={movie}/>
        ))}

    </div>
  )
}

export default ListMovies