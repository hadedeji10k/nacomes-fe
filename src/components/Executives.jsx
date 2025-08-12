import React from 'react'
import PictureCard from './PictureCard'

function Executives() {
  return (
    <div className='executives py-20 px-20 flex flex-col gap-4'>
       <div className="text  flex flex-col ">
          <h1 className=' text-4xl  font-bold text-center mb-5'>Executives</h1>
          <p className=' text-lg text-center px-5'>Our executives bring together experience, vision, and a shared passion for empowering computer engineering students. From shaping strategic goals to fostering innovation, they ensure NACOMES thrives as a hub of growth and opportunity.</p>
       </div>
       <div className="image-row flex justify-between">
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
       </div>
        <div className="image-row flex justify-between">
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
       </div>
    </div>
  )
}

export default Executives
