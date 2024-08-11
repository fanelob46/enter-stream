import React from 'react'
import { Link } from 'react-router-dom'

const MovieListing = ({movie}) => {
  return (
    <div className=''>
                <div className=' m-5 w-[170px] h-[225px] '>
                    <Link to={`/movies/${movie.id}`}>
                    <img src={movie.Image}/>

                    </Link>
                </div>
              
            </div>
  )
}

export default MovieListing