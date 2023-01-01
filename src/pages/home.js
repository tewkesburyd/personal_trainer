import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-white overflow-hidden relative">
            <div className="bg-canyon bg-cover object-cover bg-center h-[450px] w-full md:h-[650px]">
                <div className="absolute left-1/3 bottom-1/4 h-30 text-blue-600 p-2 ">
                    <NavLink to="/plans" className="bg-zinc-800 font-semibold py-2 px-4 rounded shadow m-2">Personalized Coaching</NavLink>
                </div>
                <div className="absolute bottom-0 right-0 h-30 text-white p-2">
                    <h1 className="text-base font-semibold">Photo by: Josh's Roomate</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
