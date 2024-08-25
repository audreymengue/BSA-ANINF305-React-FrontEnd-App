import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex-1 h-screen'>
                <div className='w-1/2 mx-auto mt-60 '>
                    <h1>this is the layout</h1>
                    
                </div>
            </div>
            <div class="h-80 w-1 bg-gray-900 mt-80"></div>
            <div className='flex-1 h-screen'>
            </div>
        </div>
    );
};

export default Layout;