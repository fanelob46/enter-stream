import React from 'react'
import ListMovies from '../Componets/ListMovies'
import ViewAllMovies from '../Componets/ViewAllMovies'
import ListSeries from '../Componets/ListSeries'
import ViewAllSeries from '../Componets/ViewAllSeries'



const HomePage = () => {
  return (
    <>
      <ListMovies isHome={true}/>
      <ViewAllMovies/> 
      <ListSeries isHome={true}/>
      <ViewAllSeries/>
      
      
    </>
  )
}

export default HomePage