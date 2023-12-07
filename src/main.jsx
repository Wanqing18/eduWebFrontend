import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header.jsx";
import Home from "./routes/home/home";
import Login from "./components/loginRegister/loginRegister";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
