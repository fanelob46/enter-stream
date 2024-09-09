import React from 'react'
import { Link } from 'react-router-dom'

const SeriesListing = ({series}) => {
  return (
    <div className=''>
                <div className=' m-5 w-[88px] h-[225px] lg:w-[150px] lg:h-[290px] xl:w-[210px] kobus:w-[400px] kobus:h-[700px] pc:w-[320px] pc:h-[500px]'>
                    <Link to={`/Series/${series.id}`}>
                    <img src={series.Image}/>

                    </Link>
                </div>
              
            </div>
  )
}

export default SeriesListing