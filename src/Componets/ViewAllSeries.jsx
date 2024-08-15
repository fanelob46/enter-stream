import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllSeries = () => {
  return (
    <section className='flex justify-center pt-2 pb-4 pl-[800px]'>
        <Link to='/series' className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
            More
        </Link>
    </section>
  )
}

export default ViewAllSeries