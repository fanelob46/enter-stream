import React from 'react'
import React from 'react'
import { useState,useEffect } from 'react';
import SeriesListing from './SeriesListing';
import Spinner from './Spinner';

const ListSeries = () => {
  
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
    <div className='flex pt-5'>
       {loading ? (
        <Spinner loading={loading }/>
       ) : (
        <>
         <div className='flex flex-col items-center'>
         <h1 className='pt-14 text-lg text-center'>LATEST SERIES</h1>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
         {series.map((series) => (
            <SeriesListing key={series.id} series={series}/>
        ))}
         </div>
         </div>
        </>
       )}
        

    </div>
  )
}

export default ListSeries