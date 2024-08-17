import { useState, useEffect} from 'react'
import { useParams, useLoaderData, useNavigate} from 'react-router-dom'
import Spinner from '../Componets/Spinner'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const SeriesPage = ({deleteSeries}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const series = useLoaderData();
    console.log(series);
  
    const onDeleteClick = (seriesId) => {
      const confirm = window.confirm('Are you sure you want to delete?')
      console.log(seriesId);
      if(!confirm) return;
  
      deleteSeries(seriesId);
  
      toast.success('Series Deleted Succesfully');
      
     navigate('/series')
  }

  return (
    <>
                <h1 className='  absolute bottom-[70%]  w-full text-center bg-white h-0 text-4xl text-white'>{series.Title}</h1>

    <div className='flex justify-center pt-12 pb-12 pl-6'>
      <div>
      <img src={series.Image} className='w-[500px] h-[500px]'/>

      </div>

      <div className='pl-9'>
        <div className='pb-7' >
        <h1 className='font-bold text-3xl'><bold>{series.Title}</bold></h1>
        </div>
        <div className='pb-7  h-26 w-72  '>
        <p className='text-sm'>{series.Description}</p>
        </div>
      <div className='pb-8'> 
        <div className='flex'>
        <h5><strong>Country:</strong></h5>
         <p className='pl-2'>{series.Country}</p>
        </div>
        <div className='flex'>
        <h5><strong>Year:</strong></h5>
        <p className='pl-2'>{series.Year}</p>
        </div>
        <div className='flex'>
        <h5><strong>Type:</strong></h5>
         <p className='pl-2'>{series.Type}</p>
        </div>

      </div>
      
      <div className='flex'>
        <div className='pr-3'>
        <Link to={`/edit-series/${series.id}`}>
      <button   className='text-white rounded-full bg-blue-500 pr-3 pl-3'>
        Edit
    </button>
      </Link>
        </div>
      <div>
      <button onClick={() => onDeleteClick(series.id)}  className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
        Delete
    </button>
      </div>
      
    
      </div>
      
      </div>
    </div>
    </>
  )
}
const seriesLoader = async ({ params }) => {
    const res = await fetch(`/api/Series/${params.id}`);
    console.log(params.id);
    const data = await res.json();
    return data;
}
export { SeriesPage as default, seriesLoader };