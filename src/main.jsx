import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Components/Banner/Banner.jsx';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Education from './Components/Education/Education';
import Layout from './Layout/Layout';
import { Effect } from './Effect/Effects';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/skill',
        element:<Skills></Skills>
      },
      {
        path:'/project',
        element:<Project></Project>
      },
      {
        path:'/education',
        element:<Education></Education>
      }
    ]
  },
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Effect></Effect>
   <RouterProvider router={router} />
  
    
   
      
  </React.StrictMode>,
)
