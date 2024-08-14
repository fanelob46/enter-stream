import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllSeries = () => {
  return (
    <section>
        <Link to='/series' className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
            More
        </Link>
    </section>
  )
}

export default ViewAllSeries