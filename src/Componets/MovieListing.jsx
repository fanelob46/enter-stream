import React from 'react'

const MovieListing = ({movie}) => {
  return (
    <div className=''>
                <div className=' m-5 w-[170px] h-[225px] '>
                    <a href={movie.id}>
                    <img src={movie.Image}/>

                    </a>
                </div>
              
            </div>
  )
}

export default MovieListing