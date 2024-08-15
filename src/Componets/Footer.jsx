import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-300 pb-3'>
        <nav className='flex items-center justify-between pr-7 pl-7 pt-7'>
        <h2 className='text-black'><span >Enter-</span>Stream</h2>
        <ul className='flex text-black'>
                <li className='pr-2 '>
                    <a href="#">MOVIES</a>
                </li>
                <li>
                    <a href="#">SERIES</a>
                </li>
            </ul>
            

            
            <button className='text-black   pr-3 pl-3' >SUBCRIBE</button>

            
    </nav>

    </footer>
  )
}

export default Footer