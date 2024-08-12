import { Route,createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MainLayout from './Layaouts/MainLayout';
import MoviesPage from './Pages/MoviesPage';
import NotFoundPage from './Pages/NotFoundPage';
import Moviepage from './Pages/Moviepage';
import AddMoviesPage from './Pages/AddMoviesPage';



function App() {

  const addMovie = async (newMovie) => {
    const res = await fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    return;
  };

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path='/' element={<MainLayout/>} >
              <Route index element={<HomePage/>}/>
              <Route path='/movies' element={<MoviesPage/>}/>
              <Route path='/Add-movie' element={<AddMoviesPage AddMovieSubmit={addMovie}/>}/>
              <Route path='/movies/:id' element={<Moviepage/>} />
              
              <Route path='*' element={<NotFoundPage/>}/>
  
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App
