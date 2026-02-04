import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AllBooksLayout() {
  return (
    <div className='grid grid-cols-4 gap-5 mt-15'>
      <aside className="col-span-1  text-center">
      {/* LEFT SIDE */}
      <div className="w-full space-y-2">
        <NavLink to="/allBooks" end className="btn w-full">All Categories</NavLink>
        <NavLink to="drama" className="btn w-full">Drama</NavLink>
        <NavLink to="mystery" className="btn w-full">Mystery</NavLink>
        <NavLink to="novel" className="btn w-full">Novel</NavLink>
        <NavLink to="recipe" className="btn w-full">Recipe</NavLink>
      </div>
            </aside>
            <aside className="col-span-3 ">
                <Outlet></Outlet>
            </aside>
    </div>
  )
}
 