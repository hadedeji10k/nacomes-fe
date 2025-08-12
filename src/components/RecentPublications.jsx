import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from './ArticleCard';


function RecentPublications() {
  return (
     <div className= 'w-full h-full pb-15 py-10 px-30'>
        <div className='flex flex-row justify-between pb-5'>
            <h1 className='font-semibold text-4xl text-gray-800'>Recent Publications</h1>
            <button className='flex flex-row gap-2 justify-center items-center cursor-pointer'>Explore all articles <FaArrowRight /></button>
        </div>
        <div className='flex flex-row overflow-hidden justify-between mt-5'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        </div>
     </div>
  )
}

export default RecentPublications
