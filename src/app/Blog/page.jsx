'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {

  const nav_item = ['feature', 'use cases', 'blog', 'login'];
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const blogData = [
    { id: '1', link: 'https://picsum.photos/300/360', name: 'This is my first blog', para: 'waste track then surface fifth mood sale continent even single bill breathing case scene deer asleep strike motor made exclaimed hour particles salt book' },
    { id: '2', link: 'https://picsum.photos/300/350', name: 'This is my second blog', para: 'tropical dozen introduced doing enjoy great feathers tent oil food capital western sharp spread themselves shirt underline writing across suggest your expect cabin hung' },
    { id: '3', link: 'https://picsum.photos/300/340', name: 'This is my third blog', para: 'fat sharp situation introduced for river involved scientist quarter remarkable imagine beat telephone saved settlers mud scared stepped tiny gas radio sure color fallen' },
    { id: '4', link: 'https://picsum.photos/300/370', name: 'This is my forth blog', para: 'ran recent making beyond border rush calm leave ground who eager stone rich advice clothes plate mother asleep log community human job neighbor beat' },
  ];

  return (
    <>
      {/* MAIN CONTAINER */}
      <div className={`w-full md:max-h-[120.5vh] min-h-full ${dark ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'} `}>

        {/* MY HEADER */}
        <header className='h-[14vh]'>
          <nav className='max-w-full md:max-w-screen-xl h-full flex items-center justify-around m-auto'>
            <div className='text-4xl font-medium'>LOGO</div>
            <ul className='hidden md:flex items-center justify-center gap-6'>
              {
                nav_item.map((item, id) => (
                  <li key={id} className={`cursor-pointer capitalize`}> <Link href={'/'}>{item}</Link></li>
                ))
              }
              <button className={`${dark ? 'bg-slate-200 text-slate-800' : 'bg-slate-800 text-slate-200'} px-2 py-1 rounded-md active:bg-gray-500 duration-150`}>Request Demo</button>
            </ul>

            {/* HAMBURGER */}
            <div className='cursor-pointer md:hidden' onClick={toggleMenu}>
              <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>

            {/* MOBILE VIEW */}
            <ul className={`md:hidden absolute top-[77.8px] ${dark ? 'bg-slate-200 text-slate-800' : 'bg-slate-800 text-slate-200'}  p-2 backdrop-blur-md right-16 ${isOpen ? 'block' : 'hidden'}`}>
              {
                nav_item.map((item, id) => (
                  <li key={id} className={`cursor-pointer capitalize text-center`}><Link href={'/'}>{item}</Link></li>
                ))
              }

            </ul>
          </nav>
          <button onClick={toggleDarkMode} className={`top-6 md:top-8 right-0 rounded-l-xl absolute px-3 py-1 ${dark ? 'text-slate-800 bg-slate-200' : 'text-slate-200 bg-slate-800'}`}>{dark ? 'L' : 'D'}</button>
        </header>

        {/* MY HERO SECTION */}
        <main className={`w-full h-fit`}>
          {blogData.map((item, index) => (
            <div
              className={`px-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                } md:items-center md:gap-8 max-w-screen-xl m-auto md:my-24 my-20`}
              key={index.id}
            >
              {/* IMAGE */}
              <div className="md:w-1/3 mx-3">
                <Image src={item.link} width={400} height={500} alt="Blog Image" />
              </div>

              {/* TEXT */}
              <div className="md:w-2/3">
                {/* Heading */}
                <h1 className={`text-2xl md:text-4xl font-bold mb-4 ${index===0 && dark ?'md:text-gray-300':'md:text-gray-700'}`}>{item.name}</h1>

                {/* Paragraph */}
                <p className={`${dark?'text-gray-500':''} ${index===0 && dark ?'md:text-gray-400':'md:text-gray-600'}`}>{item.para}</p>
              </div>
            </div>
          ))}


        </main>
      </div>
    </>

  )
}

export default Page