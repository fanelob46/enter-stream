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
import SeriesesPage from './Pages/SeriesesPage';
import SeriesPage, { seriesLoader } from './Pages/SeriesPage';
import AddSeriesPage from './Pages/AddSeriesPage';
import EditSeriesPage from './Pages/EditSeriesPage';


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

  //add series
  const addSeries = async (newSeries) => {
    const res = await fetch('/api/Series', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSeries),
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

  //delete series
  const deleteSeries = async (id) => {
    const res = await fetch(`/api/Series/${id}`, {
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

  //update series
  const updateSeries = async (series) => {
    const res = await fetch(`/api/Series/${series.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(series),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path='/' element={<MainLayout/>} >
              <Route index element={<HomePage/>}/>
              <Route path='/movies' element={<MoviesPage/>} />
              <Route path='/series' element={<SeriesesPage/>} />
              <Route path='/Add-movie' element={<AddMoviesPage AddMovieSubmit={addMovie}/>}/>
              <Route path='/Add-series' element={<AddSeriesPage AddSeriesSubmit={addSeries}/>}/>

              <Route
          path='/edit-movie/:id'
          element={<EditMoviePage updateMovieSubmit={updateMovie}/> }loader={movieLoader}
          
        />
         <Route
          path='/edit-series/:id'
          element={<EditSeriesPage updateSeriesSubmit={updateSeries}/> }loader={seriesLoader}
          
        />
              <Route path='/movies/:id' element={<Moviepage deleteMovie={deleteMovie}/>}loader={movieLoader} />
              <Route path='/series/:id' element={<SeriesPage deleteSeries={deleteSeries}/>}loader={seriesLoader} />

              
              <Route path='*' element={<NotFoundPage/>}/>
  
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App
