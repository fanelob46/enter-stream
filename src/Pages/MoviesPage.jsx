import React from 'react'
import { Link } from 'react-router-dom'
import ListMovies from '../Componets/ListMovies'

const MoviesPage = () => {
  return (
    <>
    
<section>
    <Link to='/Add-movie' className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
        Add
    </Link>
    <div className='px-4 py-6'>
        <ListMovies />

    </div>
</section>
    </>
    
  )
}

export default MoviesPage