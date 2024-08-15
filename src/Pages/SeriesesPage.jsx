import React from 'react'
import ListSeries from '../Componets/ListSeries'
import { Link } from 'react-router-dom'

const SeriesesPage = () => {
  return (
    <>
    
    <section>
        <div className='flex justify-end pt-4 pr-4'>
        <Link to='/Add-series' className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
            Add
        </Link>
        </div>
        
        <div className='px-4 py-6'>
            <ListSeries />
    
        </div>
    </section>
        </>
  )
}

export default SeriesesPage