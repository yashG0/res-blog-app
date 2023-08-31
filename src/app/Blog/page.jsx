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

  const logo = "YashBlog";

  const blogData = [
    { id: '1', link: 'https://picsum.photos/1200/720', name: 'This is my first blog', para: '"Exploring the hidden gems of nature can truly be a transformative experience. The rustling leaves, the soothing babble of a nearby stream, and the gentle caress of a cool breeze all work ' },
    { id: '2', link: 'https://picsum.photos/1200/721', name: 'This is my second blog', para: 'tropical dozen introduced doing enjoy great feathers tent oil food capital western sharp spread themselves shirt underline writing across suggest your expect cabin ' },
    { id: '3', link: 'https://picsum.photos/1200/722', name: 'This is my third blog', para: ' a curious critter peeking from the bushes, or the dappled sunlight creating playful patterns on the forest floor. In these moments, technology fades into the background,  fat sharp situation introduced' },
    { id: '4', link: 'https://picsum.photos/1200/723', name: 'This is my forth blog', para: 'ran recent making beyond border rush calm leave ground who eager stone rich advice clothes plate mother asleep log community human job neighbor beat allowing us to embrace', },
  ];

  return (
    <>
      {/* MAIN CONTAINER */}
      <div className={`w-full pb-5 md:max-h-[106.5vh] h-full ${dark ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'} `}>

        {/* MY HEADER */}
        <header className='h-[14vh]'>
          <nav className='max-w-full md:max-w-screen-xl h-full flex items-center justify-around m-auto'>
            <div className='text-3xl md:text-4xl font-medium'>{logo}</div>
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
            <ul className={`z-10 md:hidden absolute  top-[77.8px] ${dark ? 'bg-slate-200 text-slate-800' : 'bg-slate-800 text-slate-200'}  px-4 backdrop-blur-md right-16 ${isOpen ? 'block' : 'hidden'}`}>
              {
                nav_item.map((item, id) => (
                  <li key={id} className={`cursor-pointer capitalize text-center my-4`}><Link href={'/'}>{item}</Link></li>
                ))
              }

            </ul>
          </nav>
          <button onClick={toggleDarkMode} className={`top-[34.3px] md:top-8 right-0 rounded-l-xl absolute px-3 py-1 ${dark ? 'text-slate-800 bg-slate-200' : 'text-slate-200 bg-slate-800'}`}>{dark ? 'L' : 'D'}</button>
        </header>

        {/* MY HERO SECTION */}
        <main className={`w-full h-fit md:pb-4`}>
          {blogData.map((item, index) => (
            <div
              className={`px-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center md:gap-8 max-w-screen-xl m-auto md:my-24 my-20`}
              key={index.id}
            >
              {/* IMAGE */}
              <div className="mx-auto md:w-1/4">
                <Image src={item.link} width={600} height={700} alt="Blog Image" className='cursor-pointer h-56 w-40 md:w-72 md:h-96 shadow-lg rounded-lg shadow-gray-600 hover:scale-105 duration-300'/>
              </div>

              {/* TEXT */}
              <div className="text-center md:w-2/3 ">
                {/* Heading */}
                <h1 className={`text-2xl md:text-4xl font-bold my-4 ${index===0 && dark ?'md:text-gray-300':'md:text-gray-700'}`}>{item.name}</h1>

                {/* Paragraph */}
                <p className={`${dark?'text-gray-500':''} ${index===0 && dark ?'md:text-gray-400':'md:text-gray-600'}`}>{item.para}</p>

                <p className={`hidden md:block ${dark?'text-gray-500':''} ${index===0 && dark ?'md:text-gray-400':'md:text-gray-600'}`}>{item.para}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>

  )
}

export default Page