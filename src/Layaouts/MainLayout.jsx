import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Componets/Home'
import Footer from '../Componets/Footer'

const MainLayout = () => {
  return (
    <>
    <Home/>
     <Outlet/>
     <Footer/>
     
     
    </>
  )
}

export default MainLayout