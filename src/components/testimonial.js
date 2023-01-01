import React from 'react';

function Testimonial(){
    return (
        <div className="border py-10">
            <span className="flex justify-center font-bold text-xl">
                <h1 >Testimonial</h1>
            </span>
            <div className="flex justify-center w-full pt-10">
                <h1 className="text-base">David Tewkesbury</h1>
            </div>
            <div className="px-20 text-base">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="flex justify-center w-full pt-10">
                <h1 className="text-base">Trent Something</h1>
            </div>
            <div className="pl-20 text-base">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default Testimonial;