import React from 'react'
import App from '../App';
import Home from '../views/Home/Home';
// import Cart from '../views/Cart/Cart';
import PlaceOrder from '../views/PlaceOrder/PlaceOrder';
import { createBrowserRouter } from 'react-router-dom';
import Menu from '../views/Menu/Menu';
import Service from '../views/Service/Service';
import Checkout from '../views/Checkout/Checkout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/Checkout',
                element: <Checkout />,
            },
            {
                path: '/order',
                element: <PlaceOrder />,
            },
        ],
    },
]);

export default router;