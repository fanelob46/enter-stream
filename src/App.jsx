import { Route,createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MainLayout from './Layaouts/MainLayout';
import MoviesPage from './Pages/MoviesPage';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element={<MainLayout/>} >
            <Route index element={<HomePage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>

    </Route>
  )
);

function App() {

  return <RouterProvider router={router}/>
}

export default App
