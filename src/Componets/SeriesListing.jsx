import React from 'react'
import { Link } from 'react-router-dom'

const SeriesListing = ({series}) => {
  return (
    <div className=''>
                <div className=' m-5 w-[170px] h-[225px] '>
                    <Link to={`/Series/${series.id}`}>
                    <img src={series.Image}/>

                    </Link>
                </div>
              
            </div>
  )
}

export default SeriesListing