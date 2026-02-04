import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftAside() {
  return (
      <div className="w-full space-y-2">
        <NavLink to="/allBooks" end className="btn w-full">All Categories</NavLink>
        <NavLink to="drama" className="btn w-full">Drama</NavLink>
        <NavLink to="mystery" className="btn w-full">Mystery</NavLink>
        <NavLink to="novel" className="btn w-full">Novel</NavLink>
        <NavLink to="recipe" className="btn w-full">Recipe</NavLink>
      </div>
  )
}
