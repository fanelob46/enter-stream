import React from 'react'
import ListMovies from '../Componets/ListMovies'
import ViewAllMovies from '../Componets/ViewAllMovies'


const HomePage = () => {
  return (
    <>
      <ListMovies isHome={true}/>
      <ViewAllMovies/> 
      
    </>
  )
}

export default HomePage