import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex items-center justify-between p-5 big:text-4xl'>
      <Link to='/'>
        <h2 className='text-white'><span className='text-blue-400'>Enter-</span>Stream</h2>
      </Link>
      
      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`flex-col md:flex-row md:flex text-white absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform transform ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li className='pl-4 pt-4 md:pt-0'>
          <Link to="/movies" onClick={() => setIsOpen(false)}>MOVIES</Link>
        </li>
        <li className='pl-4 pt-4 md:pt-0'>
          <Link to="/series" onClick={() => setIsOpen(false)}>SERIES</Link>
        </li>
      </ul>

      {/* Subscribe Button */}
      <div className="hidden md:block">
        <button className='text-white rounded-full bg-blue-400 pr-3 pl-3'>
          SUBSCRIBE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
