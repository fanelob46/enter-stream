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
       <div className='grid grid-cols-2 gap-0 pt-5 pl-6'>
      <div>
      <img src={movie.Image} className='w-[500px] h-[500px]'/>

      </div>

      <div>
      <h1>{movie.Description}</h1>
      <Link to={`/edit-movie/${movie.id}`}>
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
const movieLoader = async ({ params }) => {
  const res = await fetch(`/api/Movies/${params.id}`);
  console.log(params.id);
  const data = await res.json();
  return data;
};
export { Moviepage as default, movieLoader };
