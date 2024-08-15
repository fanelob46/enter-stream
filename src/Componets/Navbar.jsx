import React from 'react'
import { Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between pr-7 pl-7 pt-7'>
      <Link href='/'>
      <h2  className='text-white'><span className='text-blue-400'>Enter-</span>Stream</h2>

      </Link>
        <ul className='flex text-white'>
                <li className='pr-6 '>
                    <Link to="/movies">MOVIES</Link>
                </li>
                <li className='pl-6 '>
                    <Link to="/series">SERIES</Link>
                </li>
            </ul>
            

            
            <button className='text-white rounded-full bg-blue-400 pr-3 pl-3' >SUBCRIBE</button>

            
    </nav>
  )
}

export default Navbar