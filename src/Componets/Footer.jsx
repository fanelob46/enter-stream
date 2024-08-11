import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-800'>
        <nav className='flex items-center justify-between pr-7 pl-7 pt-7'>
        <h2 className='text-white'><span className='text-blue-400'>Enter-</span>Stream</h2>
        <ul className='flex text-white'>
                <li className='pr-2 '>
                    <a href="#">MOVIES</a>
                </li>
                <li>
                    <a href="#">SERIES</a>
                </li>
            </ul>
            

            
            <button className='text-white rounded-full bg-blue-400 pr-3 pl-3' >SUBCRIBE</button>

            
    </nav>

    </footer>
  )
}

export default Footer