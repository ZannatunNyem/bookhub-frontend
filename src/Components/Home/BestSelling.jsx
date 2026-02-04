import React, { useEffect, useState } from 'react'
import BookCard from '../AllBooks/BookCard';

export default function BestSelling() {
  const [books,setBooks]=useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch("http://localhost:3000/allBooks")
    .then(res=>res.json())
    .then(data=>setBooks(data))
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
  <h1 className="text-3xl font-bold mb-6 text-center">Trending Books</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-10 md:p-15'>
      {
        books.slice(5,10).map(book=>(<BookCard key={book._id} book={book}></BookCard>))
      }
    </div>
    </div>
  )
}

