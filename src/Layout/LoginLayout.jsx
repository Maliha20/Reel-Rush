import React from 'react';
import Login from '../Pages/Login/Login';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Shared/Footer/Footer';
import './Layout.css'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
const LoginLayout = () => {
    return (
        <div className='footer-position'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;