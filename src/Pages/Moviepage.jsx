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
        <h1 className=' absolute bottom-[70%]  w-full text-center bg-white h-0 text-3xl text-white uppercase  big:bottom-[80%] big:text-7xl'>{movie.Title}</h1>
       <div className='grid grid-cols-1 pt-12 pb-12 pl-6 sm:place-items-center md:flex xl:justify-center big:py-[300px]'>
      <div className='flex justify-center pr-4'>
      <img src={movie.Image} className=' sm:size-72 md:h-[500px] md:w-[400px] kobus:w-[600px] kobus:h-[800px] big:w-[800px] big:h-[1000px]'/>

      </div>

      <div className='pl-9  lg:pt-0'>
        <div className='py-7 ' >
        <h1 className='font-bold text-3xl lg:text-5xl kobus:text-7xl big:text-9xl'><bold>{movie.Title}</bold></h1>
        </div>
        <div className='pb-5  '>
        <p className='text-sm w-[200px] text-justify tracking-tighter  lg:w-[400px] lg:text-2xl kobus:text-5xl kobus:w-[700px] big:text-6xl big:w-[700px]'>{movie.Description}</p>
        </div>
      <div className='pb-8 pt-6 lg:text-2xl kobus:text-4xl big:text-5xl'> 
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
      <button   className='text-white rounded-full bg-blue-500 pr-3 pl-3 lg:py-3 lg:px-5 kobus:py-7 kobus:px-10'>
        Edit
    </button>
      </Link>
        </div>
      <div>
      <button onClick={() => onDeleteClick(movie.id)}  className='text-white rounded-full bg-blue-400 pr-3 pl-3 lg:py-3 lg:px-5 kobus:py-7 kobus:px-10'>
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
