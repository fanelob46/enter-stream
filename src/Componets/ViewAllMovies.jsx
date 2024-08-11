import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllMovies = () => {
  return (
    <section>
        <Link to='/movies' className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
            More
        </Link>
    </section>
  )
}

export default ViewAllMovies