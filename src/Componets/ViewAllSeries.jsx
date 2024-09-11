import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllSeries = () => {
  return (
    <section className='flex justify-end pr-5  pb-4  xl:pr-[220px] 2xl:pr-[900px] kobus:pr-[400px] pc:pr-[150px] big:pr-[230px]'>
        <Link to='/series' className='text-white rounded-full bg-blue-400 pr-3 pl-3 kobus:px-6 kobus:py-4 pc:px-6 pc:py-3 big:text-xl big:py-7 big:px-8' >
            More
        </Link>
    </section>
  )
}

export default ViewAllSeries