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
                <h1 className='  absolute bottom-[70%]  w-full text-center bg-white h-0 text-4xl text-white uppercase big:bottom-[80%] big:text-7xl'>{series.Title}</h1>

    <div className='grid grid-cols-1 md:flex md:justify-center place-items-center  pt-12 pb-12 pl-6 big:py-[300px]'>
      <div>
      <img src={series.Image} className='w-[280px] h-[400px] lg:w-[400px] lg:h-[450px] xl:w-[450px] xl:h-[500px] pc:w-[600px] pc:h-[700px] big:w-[800px] big:h-[1000px]'/>

      </div>

      <div className='pl-9 md:pt-0'>
        <div className='pb-7 ' >
        <h1 className='font-bold text-5xl pt-3 pc:text-7xl kobus:text-8xl kobus:pt-0 big:text-9xl'><bold>{series.Title}</bold></h1>
        </div>
        <div className='pb-7  h-26 w-72  '>
        <p className='text-sm w-[200px] text-justify tracking-tight lg:text-lg lg:w-[300px] xl:text-3xl xl:w-[500px] kobus:text-4xl kobus:w-[600px] big:text-6xl big:w-[700px]'>{series.Description}</p>
        </div>
      <div className='pb-8 pc:text-3xl xl:text-3xl kobus:text-4xl big:text-5xl'> 
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
      <button   className='text-white rounded-full bg-blue-500 pr-3 pl-3 pc:py-5 pc:px-10 xl:py-6 xl:px-8'>
        Edit
    </button>
      </Link>
        </div>
      <div>
      <button onClick={() => onDeleteClick(series.id)}  className='text-white rounded-full bg-blue-400 pr-3 pl-3 pc:py-5 pc:px-10 xl:py-6 xl:px-8'>
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