import React from 'react'
import { CSSi, FireBase, GitHub, HTML, JavaScript, Nodei, ReactImg, Tailwind } from '../assets/images'

// import Mongo from '../assets/mongo.png';


const Skills = () => {
  return (
    <div name = 'skills' className=' bg-[#0a192f] text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600  '> Experience </p>

            <p className='py-4'>These are the technologies I've worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
             
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt="HtmlL" />
                <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={CSSi} alt="HtmlL" />
                <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={JavaScript} alt="HtmlL" />
                <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={ReactImg} alt="HtmlL" />
                <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Nodei} alt="HtmlL" />
                <p className='my-4'> NODE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={FireBase} alt="HtmlL" />
                <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={GitHub} alt="HtmlL" />
                <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Tailwind} alt="HtmlL" />
                <p className='my-4'>TAILWAIND</p>
              </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
