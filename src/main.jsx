import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from './components/Layout/MainLayOut.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Error/ErrorPage';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [        
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
