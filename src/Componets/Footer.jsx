import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-300 pb-3'>
        <nav className='flex items-center justify-between pr-7 pl-7 pt-7 text-sm big:text-4xl'>
          <Link to='/'>
          <h2 className='text-black pr-5'><span >Enter-</span>Stream</h2>

          </Link>
        <ul className='flex text-black'>
        <li className='pr-6 '>
                    <Link to="/movies">MOVIES</Link>
                </li>
                <li className='pl-6 '>
                    <Link to="/series">SERIES</Link>
                </li>
            </ul>
            

            
            <button className='text-black   pr-3 pl-3' >SUBCRIBE</button>

            
    </nav>

    </footer>
  )
}

export default Footer