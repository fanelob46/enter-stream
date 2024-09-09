import React from 'react'
import { useState,useEffect } from 'react';
import MovieListing from './MovieListing';
import Spinner from './Spinner';

const ListMovies = ({isHome = false}) => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=> {
  const fetchMovies = async () => {
    const apiUrl = isHome ? 
    'http:/api/Movies?_limit=8' 
    : 'http:/api/Movies'
    try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setMovies(data);
      
    } catch (error) {
      console.log('Error fetching data', error);
      
    } finally {
      setLoading(false);
    }
    
  }
  fetchMovies();
}, [])
  

  return (
    <div className='flex justify-center pt-5'>
       {loading ? (
        <Spinner loading={loading }/>
       ) : (
        <>
         <div className='flex flex-col items-center'>
          <div className='text-3xl pt-5 pc:py-10'>LATEST MOVIES</div>
         
         <div className='grid grid-cols-2 space-x-6  sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
         {movies.map((movie) => (
            <MovieListing key={movie.id} movie={movie}/>
        ))}
         </div>
         </div>
        </>
       )}
        

    </div>
  )
}

export default ListMovies