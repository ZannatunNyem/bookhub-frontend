import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookCard from './BookCard';

export default function RightAside() {
  const {category}=useParams();
  const [books,setBooks]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    console.log("category:", category);
    const params=new URLSearchParams();
    if(category) params.append("category",category);

    const url=`https://bookhub-backend-six.vercel.app/allBooks?${params.toString()}`
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [category]);

    if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}