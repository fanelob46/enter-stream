import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from '../Componets/Home'
import Footer from '../Componets/Footer'

const MainLayout = () => {
  return (
    <>
    <Home/>
     <Outlet/>
     <ToastContainer/>
     <Footer/>
     
    </>
  )
}

export default MainLayout