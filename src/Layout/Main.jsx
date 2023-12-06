import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBer from '../components/NavBer/NavBer';

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className='min-h-[calc(100vh-10px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;