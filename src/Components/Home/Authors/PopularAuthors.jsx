import { div } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import AuthorsCard from './AuthorsCard';
import { Link } from 'react-router-dom';

export default function PopularAuthors() {
  const [authors,setAuthors]=useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`http://localhost:3000/authors`)
    .then(res=>res.json())
    .then(data=>setAuthors(data))
    .catch(error=>console.log(error))
    .finally(() => setLoading(false));
  },[]);

    if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (

<div className='max-w-6xl mx-auto md:my-10 my-5'>
  <h1 className="text-3xl font-bold mb-6 text-center">Popular Authors</h1>
<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {
        authors.map(author=><AuthorsCard key={authors._id} author={author}></AuthorsCard>)
      }
</div>
    </div>
    

  )
}
