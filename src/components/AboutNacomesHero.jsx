import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function AboutNacomesHero() {
  return (
    <div className= 'w-full h-full pb-25'>
        <div className='flex justify-center items-center w-full gap-15 h-full py-25'>
        <div className='flex flex-col w-[50%] ml-10'>
            <h1 className='flex w-full text-3xl font-bold mb-4'>National Association of Computer Engineering Students (NACOMES) - University of Maiduguri Chapter</h1>
            <button className='flex gap-2 text-lg items-center py-3 px-4 w-[30%] text-center rounded-3xl bg-(--light-blue) text-white cursor-pointer hover:bg-(--dark-blue) shadow-lg'>Learn more <FaArrowRight /></button>
        </div>
        <div className='flex flex-col gap-0.5 w-[50%] mr-5 pr-5'>
          <div className='text-left'>
            <h2 className='absolute text-gray-500/35 font-bold text-7xl'>01</h2>
            <h1 className='font-semibold mt-8 ml-2 pt-3 text-gray-800'>Computer Engineering</h1>
            <p className=' relative  z-10 px-3 text-gray-700'>The Official Website of the National Association of Computer Engineering Students (NACOMES) - University of Maiduguri Chapter and the Department of Computer Engineering </p>
            <div className='border-2 w-20 ml-3 rounded text-yellow-300 mt-3'></div>
          </div>
        <div className='text-right self-end'>
            <h2 className='absolute text-gray-500/35 font-bold right-0 text-7xl mr-20'>02</h2>
            <h1 className='font-semibold mt-8 ml-2 pt-3 text-gray-800'>About NACOMES</h1>
            <p className='relative px-3'>The NACOMES UNIMAID was brought into existence in 2024 by the 2023/2024 EXCOs</p>
            <div className=' border-2 w-20 rounded text-yellow-300 mt-3 ml-auto'></div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AboutNacomesHero
