import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Readora from '../Logo/Readora'
import no_user from '../../img/no_user.png'
import { AuthContext } from '../../Auth/AuthContext'
import { useContext } from 'react'
import axios from 'axios'

export default function NavBar() {

  const{user,signOutUser}=useContext(AuthContext);
  const [cartCount,setCartCount]=useState(0);


  const handleLogout=()=>{
    signOutUser()
    .then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }


  useEffect(()=>{
    if(user?.email){
      axios.get(`https://bookhub-backend-six.vercel.app/cart?email=${user.email}`)
      .then(res=>setCartCount(res.data.length))
      .catch(error=>console.error(error));
      
    }
    else{
      setCartCount(0)
    }
  },[user])

  const homeLink = <><NavLink to={"/"}>Home</NavLink></>
  const bookLink = <><NavLink to={"/allBooks"}>Books</NavLink></>
  const categoryLink = <>
    <li><NavLink to={"/allBooks/drama"}>Drama</NavLink></li>
    <li><NavLink to={"/allBooks/mystery"}>Mystery</NavLink></li>
    <li><NavLink to={"/allBooks/novel"}>Novel</NavLink></li>
    <li><NavLink to={"/allBooks/recipe"}>Recipe</NavLink></li>
  </>
  const blogLink = <><NavLink to={"/blogs"}>Blogs</NavLink></>

  return (
    <div className="navbar bg-base-100 text-neutral shadow-sm sm:px-10 lg:px-15 pt-10 font-semibold">

      {/* navbar-start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{homeLink}</li>
            <li>{bookLink}</li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                {categoryLink}
              </ul>
            </li>
            <li>{blogLink}</li>
          </ul>
        </div>

        <Link to={'/'} className="text-xl">
          <Readora />
        </Link>
      </div>

      {/* navbar-center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{homeLink}</li>
          <li>{bookLink}</li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 w-40 z-1 bg-base-100 text-neutral">
                {categoryLink}
              </ul>
            </details>
          </li>
          <li>{blogLink}</li>
        </ul>
      </div>

      {/* navbar-end */}
      <div className="navbar-end flex items-center mb-2">

        {/* Notification */}
        <Link to={'/mycart'}>
        <button className="btn btn-ghost btn-circle text-neutral">
          <div className="indicator mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4
                   M7 13L5.4 5M7 13l-2.293 2.293
                   c-.63.63-.184 1.707.707 1.707H17
                   m0 0a2 2 0 100 4
                   2 2 0 000-4
                   zm-8 2a2 2 0 11-4 0
                   2 2 0 014 0z"
              />
            </svg>

            {cartCount > 0 && (
  <span className="badge badge-error badge-xs indicator-item">
    {cartCount}
  </span>
)}

          </div>
        </button>
        </Link>
        

        {/* User Avatar */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 rounded-full">
              <img alt="User profile" src={user?.photoURL || no_user} />
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to={'/profile'}>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-accent">New</span>
              </a>
            </li>
            </Link>
            
             {user ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
             ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}

          </ul>
        </div>

      </div>
    </div>
  )
}
