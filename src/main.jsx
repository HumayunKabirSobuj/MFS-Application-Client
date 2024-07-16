import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import UserRegister from './Pages/UserRegister';
import AgentRegister from './Pages/AgentRegister';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/register",
    element:<Register></Register>
  },
  {
    path:"/register/user",
    element:<UserRegister></UserRegister>
  },
  {
    path:"/register/agent",
    element:<AgentRegister></AgentRegister>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
