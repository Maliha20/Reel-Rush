import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto max-w-screen-xl'>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </div>
  </React.StrictMode>,
)
