import React, { Component } from 'react'
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home';
import MainLayout from '../Layout/MainLayout';
import { components } from 'daisyui/imports';
import Blogs from '../Pages/Blogs';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllBooksLayout from '../Layout/AllBooksLayout';
import RightAside from '../Components/AllBooks/RightAside';
import AuthorDetail from '../Components/Home/Authors/AuthorDetail';
import BookDetail from '../Pages/BookDetail';
import MyCart from '../Pages/MyCart';
import { Profiler } from 'react';
import Profile from '../Pages/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'blogs',
          Component:Blogs
        },
        {
          path:"login",
          Component:Login
        },
        {
          path:"register",
          Component:Register
        },
        {
          path:"/authors/:id",
          Component:AuthorDetail
        },
        {
          path: "/mycart",
           Component:MyCart
           },
           {
           path: "/profile",
           Component:Profile
           },
          {
         path: "/allBooks",
          Component:AllBooksLayout,
          children:[
            {
              index: true, 
             
            Component: RightAside,
            },
            {
              
              path: ":category",
            Component: RightAside,
            },
          ]
        },
        {
          path: "/books/:id",
          Component:BookDetail,
        },
    ]
  },

]);

export default router;