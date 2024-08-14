import { Route,createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MainLayout from './Layaouts/MainLayout';
import MoviesPage from './Pages/MoviesPage';
import NotFoundPage from './Pages/NotFoundPage';
import Moviepage, { movieLoader } from './Pages/Moviepage';
import AddMoviesPage from './Pages/AddMoviesPage';
import EditMoviePage from './Pages/EditMoviePage';


function App() {
  //add movie
  const addMovie = async (newMovie) => {
    const res = await fetch('/api/Movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    return;
  };
  //delete movie
  const deleteMovie = async (id) => {
    const res = await fetch(`/api/Movies/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  //update movie

 const updateMovie = async (movie) => {
    const res = await fetch(`/api/Movies/${movie.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path='/' element={<MainLayout/>} >
              <Route index element={<HomePage/>}/>
              <Route path='/movies' element={<MoviesPage/>} />
              <Route path='/Add-movie' element={<AddMoviesPage AddMovieSubmit={addMovie}/>}/>
              <Route
          path='/edit-movie/:id'
          element={<EditMoviePage updateMovieSubmit={updateMovie}/> }loader={movieLoader}
          
        />
              <Route path='/movies/:id' element={<Moviepage deleteMovie={deleteMovie}/>}loader={movieLoader} />
              
              <Route path='*' element={<NotFoundPage/>}/>
  
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App
