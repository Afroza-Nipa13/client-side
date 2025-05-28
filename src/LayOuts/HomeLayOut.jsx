import React from 'react';
import Navbar from '../Pages/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/shared/Footer';

const HomeLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayOut;