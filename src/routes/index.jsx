import React from 'react'
import App from '../App';
import Home from '../views/Home/Home';
// import Cart from '../views/Cart/Cart';
import { createBrowserRouter } from 'react-router-dom';
import Menu from '../views/Menu/Menu';
import Service from '../views/Service/Service';
import Checkout from '../views/Checkout/Checkout';
import PlaceOrder from '../views/PlaceOrder/PlaceOrder';
import ContactUs from '../views/ContactUs/ContactUs';
import Gallery from '../views/Gallery/Gallery';
import Facilities from '../views/Facilities/Facilities';

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
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/facilities',
                element: <Facilities />,
            },
            // {
            // path: '/order',
            // element: <PlaceOrder />,
            // },
        ],
    },
]);

export default router;