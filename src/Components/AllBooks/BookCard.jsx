import React from 'react'
import { Link } from 'react-router-dom';

export default function BookCard({book}) {
return (
<Link to={`http://localhost:5173/books/${book._id}`}>
  <div className="card bg-base-100 h-full flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
    <figure className="w-full aspect-[3/4] overflow-hidden">
      <img
        src={book.image}
        alt="Book"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </figure>

    <div className="card-body items-center text-center">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>{book.author}</p>
      <span className="text-xl text-primary-content">${book.price}</span>  
      
    </div>
  </div></Link>
);

}
