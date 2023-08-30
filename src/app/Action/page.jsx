'use client'

import React, { useState } from 'react'

const Page = () => {

    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(0);

    const [darkMode, setDarkMode] = useState(false); // Use a boolean to track dark mode state

    const change = () => {
        setInc(inc + 1);
        setDec(dec - 1);
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Toggle the dark mode state
    }

    return (
        <main className={`h-screen w-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} cursor-pointer`}>
            <span className={`absolute  rounded-md p-2 right-2 top-2 ${darkMode ? 'bg-gray-200 text-black':'bg-gray-500 text-white'}`} onClick={toggleDarkMode}> 
                {darkMode ? 'Light mode' : 'Dark mode'}
            </span> 
            <div className='text-center'>
                <h1 className='text-2xl'>This is Some Action :-</h1>
                <h1 className='mt-2'>Increment - <span className='text-red-400 font-bold'> {inc} </span></h1>
                <h1 className='mt-2'>Decrement - <span className='text-red-400 font-bold'> {dec} </span></h1>
                <button className='bg-violet-500 px-3 py-2 text-white rounded-md mt-4' onClick={change}>Click here</button>
            </div>
        </main>
    )
}

export default Page;
