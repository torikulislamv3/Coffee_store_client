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
    element: <App></App>
  },
  {
    path: "/CoffeeAdded",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/UpdateCoffee",
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
