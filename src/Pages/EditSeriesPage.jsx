import React from 'react'
import { useState } from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditSeriesPage = ({updateSeriesSubmit}) => {

    const series = useLoaderData();
    console.log(series)
    
    const [Image, setImage] = useState(series.Image);
    const [Title, setTitle] = useState(series.Title);
     const [Description, setDescription] = useState(series.Description);
     const [Country, setCountry] = useState(series.Country);
     const [Year, setYear] = useState(series.Year);
     const [Type, setType] = useState(series.Type);
     const [uploadImage,setUploadImage] = useState(null);
    
  
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
     
      if(file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setUploadImage(reader.result);
            toast.success('Adding Successful');
  
            setImage(reader.result);
             
         };
  
         reader.readAsDataURL(file);
         
      }
   }
  
    const submitForm = (e) => {
      e.preventDefault();
  
      const updatedSeries = {
        id,
        Title,
        Image,
        Description,
        Country,
        Year,
        
      };
  
      updateSeriesSubmit(updatedSeries);
  
      toast.success('Series Updated Successfully');
  
      return navigate(`/Series/${id}`);
    };
  
  return (
    <section className='bg-white'>
                    <h1 className='  absolute bottom-[70%]  w-full text-center bg-white h-0 text-4xl text-white'>Edit a series</h1>

    <div className=' m-auto max-w-2xl py-24'>
      <div className=''>
        <form onSubmit={submitForm}>
        <div>
        <a >
       <input id='file-upload' type='file' accept='image/*' onChange={handleImageChange}>
        
       </input>
       <span className=''>Upload Image </span>
       {
         uploadImage && (
            <img src={uploadImage}  alt='Upload Movie Poster' className='w-80 h-96 object-cover text-center bg-gray-400'>
         
            </img>
         )
       }
       
       
    </a> 
        </div>

        <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Movies/Series name
            </label>
            <input
              type='text'
              id='Title'
              name='Title'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Movie/Series name'
              required
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </div>
           
         
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
              value={Description}
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
              value={Country}
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
              value={Year}
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

export default EditSeriesPage