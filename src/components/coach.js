import React from 'react';

function Coach(){
    return (
        <div className="">
            <div className="border grid grid-cols-5 gap-0 min-h-500">
                <div className="">
                    <img className="h-full w-300" src={require('../assets/Josh_Kanel.jpg')} alt="Josh" />
                </div>
                <div className="col-span-4 ">
                    <div className="w-full pl-10">
                        <h1 className="font-bold text-2xl">Josh Kanel</h1>
                    </div>
                    <div className="py-2 pl-10 text-base font-bold">
                        <ul className="pb-10"> 
                            About:
                            <li className="font-semibold">MLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Scelerisque eu ultrices vitae auctor eu augue ut. Magna fermentum iaculis eu non diam phasellus vestibulum. Massa vitae tortor condimentum lacinia quis vel eros donec. Faucibus interdum posuere lorem ipsum. Arcu felis bibendum ut tristique et egestas. Hendrerit dolor magna eget est lorem ipsum. </li>
                        </ul>
                        <ul className="pb-10">
                            Coaching Philosphy:
                            <li className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Scelerisque eu ultrices vitae auctor eu augue ut. Magna fermentum iaculis eu non diam phasellus vestibulum. Massa vitae tortor condimentum lacinia quis vel eros donec. Faucibus interdum posuere lorem ipsum. Arcu felis bibendum ut tristique et egestas. Hendrerit dolor magna eget est lorem ipsum.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Coach;