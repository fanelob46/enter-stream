import React from 'react'
import { useState,useEffect } from 'react';
import SeriesListing from './SeriesListing';
import Spinner from './Spinner';

const ListSeries = ({isHome = false}) => {
  
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    
    
    useEffect(()=> {
      const fetchSeries = async () => {
        const apiUrl = isHome ? 
        'http:/api/Series?_limit=8' 
    : 'http:/api/Series'
        try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setSeries(data);
          
        } catch (error) {
          console.log('Error fetching data', error);
          
        } finally {
          setLoading(false);
        }
        
      }
      fetchSeries();
    }, [])


  return (
    <>
    <div className='flex justify-center pt-5'>
       {loading ? (
        <Spinner loading={loading }/>
       ) : (
        <>
         <div className='flex flex-col items-center'>
         <div className='text-3xl pt-5  pc:py-10 '>LATEST SERIES</div>
         
         <div className='grid grid-cols-2 sm:grid-cols-3 space-x-6 md:grid-cols-4 gap-4 py-8 justify-items-center'>
         {series.map((series) => (
            <SeriesListing key={series.id} series={series}/>
        ))}
         </div>
         </div>
        </>
       )}
        

    </div>
    </>
  )
}

export default ListSeries