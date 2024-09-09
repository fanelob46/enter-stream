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
        <h1 className=' absolute bottom-[70%]  w-full text-center bg-white h-0 text-3xl text-white uppercase'>{movie.Title}</h1>
       <div className='grid grid-cols-1 pt-12 pb-12 pl-6'>
      <div>
      <img src={movie.Image} className='c'/>

      </div>

      <div className='pl-9'>
        <div className='py-7' >
        <h1 className='font-bold text-3xl'><bold>{movie.Title}</bold></h1>
        </div>
        <div className='pb-5  '>
        <p className='text-sm w-[200px]'>{movie.Description}</p>
        </div>
      <div className='pb-8 pt-6'> 
        <div className='flex'>
        <h5><strong>Country:</strong></h5>
        <p className='pl-2'>{movie.Country} </p>
        </div>
      <div className='flex'>
      <h5><strong>Year:</strong></h5>
      <p className='pl-2'>{movie.Year}</p>
      </div>
      <div className='flex'>
      <h5><strong>Type:</strong></h5>
      <p className='pl-2'>{movie.Type}</p>

      </div>
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
