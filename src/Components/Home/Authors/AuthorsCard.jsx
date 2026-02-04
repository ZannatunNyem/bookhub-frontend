import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthorsCard({author}) {
    
  return (
<Link to={`http://localhost:5173/authors/${author._id}`}>
    <div className="card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer mx-2">
  <figure className="px-10 pt-10">
    <img
      src={author.image}
      alt="Author"
      className="rounded-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{author.name}</h2>
  </div>
</div>
</Link>
  )
}
