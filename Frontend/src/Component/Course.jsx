import React, { useState ,useEffect} from 'react';

import Card from './Card';
import axios from "axios"
import {Link} from "react-router-dom"

function Course() {
  const [book, setbook] = useState([])
    useEffect(()=>{
      const  getbook = async()=>{
        try{
          const res = await axios.get("http://localhost:3000/book/")
          console.log(res.data)
          setbook(res.data)
        }
        catch(error){
          console.log(error)
        }
      }
      getbook()
    },[])
  
  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl font-bold text-white mt-28 py-6'>
            Hello, this is my bookstore <span className='text-red-300'>Every day is a new day</span>
          </h1>
          <p className='text-xl text-white mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, vel quidem recusandae id hic sunt vero similique illo molestiae magni pariatur cupiditate aut rem delectus est dignissimos nihil repudiandae iure.
          </p>
         <Link to ="/">
          <button className='mt-6 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
         </Link>
         
        </div>

        <div className='mt-12 flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {book.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
