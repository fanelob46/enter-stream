import { useState, useEffect} from 'react'
import { useParams, useLoaderData, useNavigate} from 'react-router-dom'
import Spinner from '../Componets/Spinner'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Moviepage = ({deleteMovie}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const movie = useLoaderData();
  console.log(movie);

  const onDeleteClick = (movieId) => {
    const confirm = window.confirm('Are you sure you want to delete?')

    if(!confirm) return;

    deleteMovie(movieId);

    toast.success('Movie Deleted Succesfully');
    
   navigate('/movies')
}

  return (
    
    <>
        <h1 className=' absolute bottom-[70%]  w-full text-center bg-white h-0 text-4xl text-white'>{movie.Title}</h1>
       <div className='flex justify-center pt-12 pb-12 pl-6'>
      <div>
      <img src={movie.Image} className='w-[500px] h-[500px]'/>

      </div>

      <div className='pl-9'>
        <div className='pb-7' >
        <h1 className='font-bold text-3xl'><bold>{movie.Title}</bold></h1>
        </div>
        <div className='pb-9'>
        <p>{movie.Description}</p>
        </div>
      <div className='pb-8'> 
      <h5><bold>Country:</bold>{movie.Country}</h5>
      <h5><bold>Year:</bold>{movie.Year}</h5>
      <h5><bold>Type:</bold>{movie.Type}</h5>

      </div>
      
      <div className='flex'>
        <div className='pr-3'>
        <Link to={`/edit-movie/${movie.id}`}>
      <button   className='text-white rounded-full bg-blue-500 pr-3 pl-3'>
        Edit
    </button>
      </Link>
        </div>
      <div>
      <button onClick={() => onDeleteClick(movie.id)}  className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
        Delete
    </button>
      </div>
      
    
      </div>
      
      </div>
    </div>
    </>
  )
}
const movieLoader = async ({ params }) => {
  const res = await fetch(`/api/Movies/${params.id}`);
  console.log(params.id);
  const data = await res.json();
  return data;
};
export { Moviepage as default, movieLoader };
