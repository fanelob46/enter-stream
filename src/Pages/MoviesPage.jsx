import React from 'react'
import { Link } from 'react-router-dom'
import ListMovies from '../Componets/ListMovies'

const MoviesPage = () => {
  return (
    <>
            <h1 className='  absolute bottom-[70%]  w-full text-center bg-white h-0 text-4xl text-white'>LATEST MOVIES</h1>

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