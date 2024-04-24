import React from 'react';

import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee';
import App from './App';
import UpdateCoffee from './Components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "/CoffeeAdded",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/coffeeUpdate/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
