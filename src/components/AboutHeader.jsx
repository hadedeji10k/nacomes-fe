import React from 'react'
import student from '../assets/student.png'

function AboutHeader() {
  return (
    <div className="w-full bg-[var(--dark-blue)] h-[480px] flex flex-col lg:flex-row items-center justify-center overflow-hidden p-8 lg:p-10 gap-8 lg:gap-0">
   
      <div className="about-title w-full lg:w-3/5 flex flex-col gap-4 p-2.5 text-white text-center lg:text-left">
        <p className="text-sm sm:text-base font-semibold">About us</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug ">
          Empowering the Next Generation of Computer Engineers
        </h1>
      </div>

      <div className="w-full lg:w-2/5 relative flex items-center justify-center lg:mr-10 mt-8 lg:mt-0">
        <div className="donut absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] rounded-full border-[20px] sm:border-[50px] lg:border-[100px] border-[var(--light-blue)] z-0"></div>
        <img
          src={student}
          alt="Black student"
          className="relative z-10 max-h-[300px] sm:max-h-[400px] lg:max-h-[480px] object-contain"
        />
      </div>

    </div>
  )
}

export default AboutHeader
