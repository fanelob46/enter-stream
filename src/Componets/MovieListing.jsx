import React from 'react'
import { Link } from 'react-router-dom'

const MovieListing = ({movie}) => {
  console.log(movie.Image)

  return (
    <div className=''>
                <div className=' m-5 w-[100px] h-[225px] md:w-[120px] lg:w-[180px] xl:w-[200px] big:w-[450px]   pc:w-[320px] pc:h-[500px]'>
                    <Link to={`/movies/${movie.id}`}>
                    <img src={movie.Image} className='h-[150px]   md:h-[200px] lg:h-[230px] xl:h-[260px] big:h-[500px] kobus:w-[500px] kobus:h-[500px] pc:w-[320px] pc:h-[500px]'/>
                    

                    </Link>
                </div>
              
            </div>
  )
}

export default MovieListing