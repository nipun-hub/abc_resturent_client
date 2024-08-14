import React from 'react'
import App from '../App';
import Home from '../views/Home/Home';
import Cart from '../views/Cart/Cart';
import PlaceOrder from '../views/PlaceOrder/PlaceOrder';
import { createBrowserRouter } from 'react-router-dom';
import Menu from '../views/Menu/Menu';

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
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/order',
                element: <PlaceOrder />,
            },
        ],
    },
]);

export default router;