import { Component } from "react";

import Home from "../../views/Admin/home";
import About from "../../views/Admin/About";
import ContactUs from "../../views/Admin/ContactUs";

export const adminRouterList = [
    { path: '', Component: Home },
    { path: 'about', Component: About },
    { path: 'contact', Component: ContactUs },
];