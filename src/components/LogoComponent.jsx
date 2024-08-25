import React from 'react';
import logo from '../assets/305banklogo.png'

const ImageComponent = () => {
    return (
        <img src={logo} alt='Logo of the bank' className='w-80 h-30 mb-20'/>
    );
};

export default ImageComponent;