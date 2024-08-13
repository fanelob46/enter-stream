import React from 'react'
import { useRef,useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddMoviesPage = ({AddMovieSubmit}) => {

   const [image, setImage] = useState('');
   const [description, setDescription] = useState('');
   const [country, setCountry] = useState('');
   const [year, setYear] = useState('');
   const [file, setFile] = useState();


   const navigate = useNavigate()

   const fileRef = useRef();
   const onChangeFile = async (e) => {
    if(e.target.files && e.target.files[0]){
      const updatedJSON = e.target.files[0];
      console.log(updatedJSON);
    }
   };
   

   const submitForm = (e) => {
    e.preventDefault();

    const newMovie ={
        image,
        description,
        country,
        year
    }

    AddMovieSubmit(newMovie)

    toast.success('Movie added succesfully');

    return navigate('/movies')
   }

   
    
  return (
    <section className='bg-white'>
        
    <div className=' m-auto max-w-2xl py-24'>
      <div className=''>
        <form onSubmit={submitForm}>
        <div>
        <div class="font-[sans-serif] max-w-md mx-auto">
      <label class="text-base text-gray-500 font-semibold mb-2 block">Upload file</label>
      <input type="file"
        id='file'
        class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        ref={fileRef}
        value={image}
        onChange={onChangeFile} />
      <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    </div>
        </div>

        { /*<div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Movies/Series name
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Movie/Series name'
              required
              
            />
          </div>*/}

         
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='border rounded w-full py-2 px-3'
              rows='4'
              placeholder='Movies/Series Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Country
            </label>
            <input
              type='text'
              id='country'
              name='country'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Select country'
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Year
            </label>
            <input
              type='text'
              id='year'
              name='year'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='2024/08/01'
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
       

         { /*<div class="flex">
          <div class="flex items-center me-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checked-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Movie</label>
    </div>
    <div class="flex items-center me-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Series</label>
    </div>
    
   
    
</div>*/}

    


          <div>
            <button
              className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
              type='submit'
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddMoviesPage