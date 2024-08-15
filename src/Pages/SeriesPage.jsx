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
    <div className='flex justify-center pt-12 pb-12 pl-6'>
      <div>
      <img src={series.Image} className='w-[500px] h-[500px]'/>

      </div>

      <div className='pl-9'>
        <div className='pb-7' >
        <h1 className='font-bold text-3xl'><bold>{series.Title}</bold></h1>
        </div>
        <div className='pb-9'>
        <p>{series.Description}</p>
        </div>
      <div className='pb-8'> 
      <h5><bold>Country:</bold>{series.Country}</h5>
      <h5><bold>Year:</bold>{series.Year}</h5>
      <h5><bold>Type:</bold>{series.Type}</h5>

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