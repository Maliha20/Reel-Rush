import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import './Layout.css'
import Navbar from '../Pages/Navbar/Navbar';

const MainLayout = () => {
    
    
    return (
        <div className='footer-position'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;