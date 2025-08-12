import React from 'react'
import { PiTargetLight } from "react-icons/pi";
import { PiLightbulbLight } from "react-icons/pi";
import { PiCheckCircleLight } from "react-icons/pi";

function AboutIcons() {
  return (
    <div className='about-icons flex items-center justify-center gap-0 py-20 px-10'>
        <div className='card max-w-[350px] p-12 flex flex-col gap-5 items-center justify-center border-r-2 border-gray-200 bg-white relative'>
            <div className="absolute top-3.5 left-1.5/3 w-[100px] h-[100px] bg-gray-100 rounded-full"></div>
                <div className=" mx-auto z-10 text-[100px] flex items-center justify-center ">
                    <PiTargetLight />
                </div>
            <div className="text text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Our Mission</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>

        <div className='card max-w-[350px] p-12 flex flex-col gap-5 items-center justify-center border-r-2 border-gray-200 bg-white relative'>
            <div className="absolute top-3.5 left-1.5/3 w-[100px] h-[100px] bg-gray-100 rounded-full"></div>
                <div className=" mx-auto z-10 text-[100px] flex items-center justify-center font-light">
                    <PiLightbulbLight />
                </div>
            <div className="text text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Our Vision</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>

         <div className='card max-w-[350px] p-12 flex flex-col gap-5 items-center justify-center  bg-white relative'>
            <div className="absolute top-3.5 left-1.5/3 w-[100px] h-[100px] bg-gray-100 rounded-full"></div>
                <div className=" mx-auto z-10 text-[100px] flex items-center justify-center ">
                  <PiCheckCircleLight />
                </div>
            <div className="text text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Our Goals</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </div>
  )
}

export default AboutIcons
