import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import Home from './views/Home/Home';
import PlaceOrder from './views/PlaceOrder/PlaceOrder';
import router from './routes/index.jsx';

// Create the router instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
