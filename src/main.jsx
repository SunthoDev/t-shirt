import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import About from './Component/About/About';
import Order from './Component/Order/Order';

let route =createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
        loader: ()=> fetch("shart.json")
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/order",
        element:<Order></Order>
      }
    ],
    
  },
  {
    path:"*",
    element:<div>40000000000000000000000000004444444444444444444444444444444444444</div>
  }

])












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
