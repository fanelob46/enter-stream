import React from 'react'
import { Link } from 'react-router-dom'
import ListMovies from '../Componets/ListMovies'

const MoviesPage = () => {
  return (
    <>
    
<section>
  <div className='flex justify-end pt-4 pr-4'>
  <Link  to='/Add-movie' className=' text-white rounded-full bg-blue-400 pr-3 pl-3 pt-1 pb-1'>
        Add
    </Link>

  </div>
    
    <div className='px-4 py-6'>
        <ListMovies />

    </div>
</section>
    </>
    
  )
}

export default MoviesPage