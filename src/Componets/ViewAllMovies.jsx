import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllMovies = () => {
  return (
    <section className='flex justify-end pr-5 lg:pr-28 xl:pr-80 2xl:pr-[900px] kobus:pr-[240px] pc:pr-[150px]'>
        <Link to='/movies' className='text-white rounded-full bg-blue-400 pr-3 pl-3 pc:px-6 pc:py-3'>
            More
        </Link>
    </section>
  )
}

export default ViewAllMovies