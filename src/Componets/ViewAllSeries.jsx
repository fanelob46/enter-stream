import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllSeries = () => {
  return (
    <section className='flex justify-end pr-5  pb-4 lg:pr-28 xl:pr-80 2xl:pr-[900px] kobus:pr-[240px] pc:pr-[150px]'>
        <Link to='/series' className='text-white rounded-full bg-blue-400 pr-3 pl-3 kobus:px-6 kobus:py-4 pc:px-6 pc:py-3' >
            More
        </Link>
    </section>
  )
}

export default ViewAllSeries