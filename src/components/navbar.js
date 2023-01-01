import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return(
        <div className="bg-white p-5">
            <div className="">
                <h1 class="inline-block text-2xl text-blue-600 hover:text-blue-700 w-300 font-semibold py-2 px-4">Personalized Training Plans</h1> 
                <div className="w-300 inline-block float-right p-2">
                    <NavLink to="/"className="text-2xl text-blue-600 hover:text-blue-700">Home</NavLink>
                    <NavLink to="/about" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">About</NavLink>
                    <NavLink to="/plans" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">Plans</NavLink>
                    <NavLink to="/contact" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;