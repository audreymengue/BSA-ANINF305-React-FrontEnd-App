import React from 'react';

const InputComponent = ({ type = "text", value, onChange, placeholder = 'User key' }) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border w-80 h-12 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:green-500 mb-8 font-jost"
            />
        </div>
    );
};

export default InputComponent;