import React from 'react';
import { NavLink } from 'react-router-dom';

function Button(){
    return (
        <span className="flex justify-center m-10 p-10">
            <div>
                <NavLink to="/plans" className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 font-bold uppercase px-8 py-10 rounded outline-none focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150">Explore Plans</NavLink>
            </div>
            <div>
                <NavLink to="/contact" className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 font-bold uppercase px-8 py-10 rounded outline-none focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150">Questions</NavLink>
            </div>
        </span>
    )
}

export default Button