import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Componets/Spinner';

const Moviepage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchMovies = async () => {
          try {
          const res = await fetch(`/api/Movies/${id}`);
          const data = await res.json();
          console.log(data);
          setMovie(data);
            
          } catch (error) {
            console.log('Error fetching data', error);
            
          } finally {
            setLoading(false);
          }
          
        }
        fetchMovies();
      }, [])
  return loading ? <Spinner/> : (
    <>
    <h1>{movie.Description}</h1>
    <img src={movie.Image}/>
    </>
    
  )
  
}
export default Moviepage;

