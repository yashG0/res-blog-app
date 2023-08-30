'use client'

import React, { useState } from 'react';

const Page = () => {
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);
    const [amber, setAmber] = useState(false);


    const toggleForRed = () => {
        setRed(!red);
        setBlue(false);
        setGreen(false);
        setAmber(false);
    };

    const toggleForGreen = () => {
        setGreen(!green);
        setRed(false);
        setBlue(false);
        setAmber(false);
    };
    const toggleForBlue = () => {
        setBlue(!blue);
        setRed(false);
        setGreen(false);
        setAmber(false);
    };
    const toggleForAmber = () => {
        setAmber(!amber);
        setRed(false);
        setBlue(false);
        setGreen(false);
    };
    const reset = () => {
        setAmber(false);
        setRed(false);
        setBlue(false);
        setGreen(false);
        
    };



    return (
        <div className='flex flex-col items-center justify-center h-screen'>
        <div className='grid grid-cols-2 gap-8'>
            <button className={`w-24 h-fit p-2 cursor-pointer ${red ? 'bg-red-500' : 'bg-gray-400'}`} onClick={toggleForRed}>
                Red
            </button>
            <button className={`w-24 h-fit p-2 cursor-pointer ${green ? 'bg-green-500' : 'bg-gray-400'}`} onClick={toggleForGreen}>
                Green
            </button>
            <button className={`w-24 h-fit p-2 cursor-pointer ${blue ? 'bg-blue-500' : 'bg-gray-400'}`} onClick={toggleForBlue}>
                Blue
            </button>
            <button className={`w-24 h-fit p-2 cursor-pointer ${amber ? 'bg-amber-500' : 'bg-gray-400'}`} onClick={toggleForAmber}>
                Amber
            </button>
        </div>
        <button className={`w-24 h-fit p-2 cursor-pointer bg-gray-400 mt-12`} onClick={reset}>Reset</button>
    </div>
    );
};

export default Page;
