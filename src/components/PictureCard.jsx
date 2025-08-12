import React from 'react'
import Student2 from '../assets/student2.png'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function PictureCard() {
  return (
   <div className="picture-card flex flex-col items-center justify-center gap-5 m-2.5 p-2">
        <div className="relative w-[250px] rounded-sm overflow-hidden group cursor-pointer">
            <img src={Student2} alt="student" className="w-full h-full object-cover rounded-sm" />
            
            <div className="absolute bottom-0 left-0 right-0 bg-neutral-800/50 text-white text-2xl p-4.5 px-10 rounded-b-sm flex justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <BsLinkedin />
                <FaFacebookSquare />
                <FaTwitterSquare />
            </div>
        </div>

        <div className="text flex flex-col gap-1 justify-center items-center text-center">
            <h1 className=' text-xl font-semibold'>Madam Salome</h1>
            <p>Vice President</p>
        </div>
   </div>
  )
}

export default PictureCard
