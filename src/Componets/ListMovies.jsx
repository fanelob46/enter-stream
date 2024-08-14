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
    <div className='flex pt-5'>
       {loading ? (
        <Spinner loading={loading }/>
       ) : (
        <>
         <div className='flex flex-col items-center'>
         <h1 className='pt-14 text-lg text-center'>LATEST MOVIES</h1>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
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