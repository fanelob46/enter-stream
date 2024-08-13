import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Componets/Spinner';

const Moviepage = ({deleteMovie}) => {
const navigate = useNavigate();

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

     const onDeleteClick = (movieId) => {
         const confirm = window.confirm('Are you sure you want to delete?')

         if(!confirm) return;

         deleteMovie(movieId);

         toast.success('Movie Deleted Succesfully');
         
        navigate('/movies')
     }

  return loading ? <Spinner/> : (
    <>
    <div className='grid grid-cols-2 gap-0 pt-5 pl-6'>
      <div>
      <img src={movie.Image} className='w-[500px] h-[500px]'/>

      </div>

      <div>
      <h1>{movie.Description}</h1>
      <Link to='/Add-movie'>
      <button   className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
        Edit
    </button>
      </Link>
      
    <button onClick={() => onDeleteClick(movie.id)}  className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
        Delete
    </button>
      </div>
    </div>
    </>
    
  )
  
}
export default Moviepage;

