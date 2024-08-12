import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Componets/Home'


const MainLayout = () => {
  return (
    <>
    <Home/>
     <Outlet/>
     
     
     
    </>
  )
}

export default MainLayout