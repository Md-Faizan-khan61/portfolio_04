import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


function Experience() {
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto mt-12 px-4 md:px-20">
        <h1 className='font-bold text-2xl mb-8'>Experience</h1>
        <div className='grid grid-cols-2 md:grid-cols-5'>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3 '>
            <FaHtml5 className='w-[80px] h-[80px] mt-6 ml-7 text-orange-500'/>
            <span className='ml-12  '>Html</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <IoLogoCss3 className='w-[80px] h-[80px] mt-6 ml-7 text-blue-700'/>
            <span className='ml-12  '>CSS</span>   
            </div>
            <div className=' bg-yellow-400 shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <IoLogoJavascript className='w-[80px] h-[80px] mt-6 ml-7'/>
            <span className='ml-7  '>JavaScript</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <SiExpress className='w-[80px] h-[80px] mt-6 ml-7 text-purple-500'/>
            <span className='ml-11  '>Express</span>   
            </div>
            <div className=' bg-black shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <FaReact className='w-[80px] h-[80px] mt-6 ml-7 text-blue-500' />
            <span className='ml-12 text-white '>React</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <FaNodeJs className='w-[80px] h-[80px] mt-6 ml-7'/>
            <span className='ml-12  '>Node</span>   
            </div>
            <div className=' bg-gray-200 shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <DiMongodb className='w-[80px] h-[80px] mt-6 ml-7 text-green-600'/>
            <span className='ml-8  '>MongoDB</span>   
            </div>
            <div className=' bg-black shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <RiTailwindCssFill className='w-[80px] h-[80px] mt-6 ml-7 text-blue-600'/>
            <span className='ml-9 text-white '>Tailwind</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <SiMysql className='w-[80px] h-[80px] mt-6 ml-7 text-green-600'/>
            <span className='ml-10  '>MySql</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <SiPostman className='w-[80px] h-[80px] mt-6 ml-7 text-orange-500'/>
            <span className='ml-8  '>Postman</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[140px] h-[140px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <FaGithub className='w-[80px] h-[80px] mt-6 ml-7 text-black'/>
            <span className='ml-10  '>Github</span>   
            </div>
            <div className=' bg-white shadow-md rounded-full w-[145px] h-[145px] hover:scale-105 duration-300 cursor-pointer mb-3'>
            <SiVisualstudiocode className='w-[80px] h-[80px] mt-6 ml-7 text-blue-600'/>
            <span className='ml-5 text-xs '>Visualstudiocode</span>   
            </div>
        </div>
    </div>        
  )
}

export default Experience