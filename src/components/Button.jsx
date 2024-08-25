import React from 'react';
import { useState } from 'react';
import Dashboard from '../pages/Dashboard';

const Button = () => {
    const [action, setAction] = useState('Login');
       
    return (
        <button className="bg-buttonColor text-white rounded-lg p-2 w-32 font-jost" onClick={()=> setAction(<Dashboard/>)}>
            {action}
        </button>
    );
};

export default Button;