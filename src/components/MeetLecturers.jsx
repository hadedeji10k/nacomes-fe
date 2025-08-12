import React from 'react'
import { IoMdContacts } from "react-icons/io";
import profImg from "../assets/profImage.png"
import { FaStar, FaGreaterThan, FaLessThan } from "react-icons/fa6";

function MeetLecturers() {
  return (
    <div className= 'w-full h-full bg-(--light-blue) py-25 px-25 text-white '>
            <div className='flex justify-center items-center w-full gap-15 h-full pt-10'>
            <div className='flex flex-col w-[35%] ml-8'>
                <div className='flex flex-row gap-2 items-center mb-4'>
                  <div className='bg-yellow-300 text-3xl p-2.5 cursor-pointer rounded-full '><IoMdContacts /></div>
                  <p className=''>Get in touch</p>
                </div>
                <h1 className='flex w-full text-3xl font-bold mb-4'>Meet our Lecturers</h1>
                <p className='text-sm mb-4 opacity-60 w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nesciunt vero nisi commodi molestias assumenda!</p>
                <div className='flex flex-row gap-4 items-center mb-4'>
                  <h1 className='font-semibold text-5xl'>99%</h1>
                  <div className='border-[1px] h-9 text-gray-400 '></div> 
                  <p className='text-sm text-gray-100 max-w-[55%]  '>Lorem ipsum dolor, sit amet adipisicing elit.</p>
                </div>
            </div>
            <div className='flex flex-col gap-0.5 w-[65%] mr-5 pr-5'>
              <div className='bg-white shadow-md w-full h-80 rounded'>
                <div className='w-full h-full flex flex-row gap-2 overflow-hidden'>
                  <div className='absolute rounded-full bg-white text-2xl p-2 text-gray-700 top-215 left-127 shadow z-10'><FaLessThan/></div>
                  <img src={profImg} alt="professor" className='w-[40%] h-auto object-cover transform transition duration-500 hover:scale-105 hover:brightness-110 hover:shadow-2xl hover:rounded cursor-pointer' />
                  <div className='p-10 text-gray-800'>
                    <div className='flex flex-row text-white bg-amber-500 px-4 py-2 w-[33%] mb-3 rounded-2xl fill-white'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className='text-sm text-gray-700 py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur a consectetur quidem voluptas ex ad, culpa similique, numquam nemo cumque iusto, sunt incidunt iure dolorum provident neque cupiditate maiores!</p>
                    <h3 className='font-bold py-2 text-gray-900'>Prof. Adedeji Yusuf</h3>
                    <p className='text-gray-700'>Professor</p>
                    <div className='absolute rounded-full bg-white text-2xl p-2 text-gray-700 top-215 right-30 shadow'><FaGreaterThan /></div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
  )
}

export default MeetLecturers
