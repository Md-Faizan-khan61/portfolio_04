import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2  order-2 md:order-1'>
             <span className='text-xl'>Welcome in my Feed!</span>
             <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello I am a</h1>
                {/* <span className='text-purple-500'>Developer❤️</span> */}
                <ReactTyped
                className='text-purple-500'
                strings={[
                        "Developer❤️",
                        "Programmer",
                        "Coder",
                    ]}
                typeSpeed={40}
                backSpeed={50}
                loop
     />
             </div>
             <br/>
             <p className='text-sm md:text-md text-justify text-gray-500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit, rem vero saepe magnam impedit aliquid fugiat? Nobis fugiat deleniti harum magni inventore mollitia id totam iusto laudantium aut ipsam repellat tempora, veritatis, debitis ex, aliquid quidem necessitatibus beatae placeat.
             </p>
             <br />
             <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className='space-y-2'>
                <h1 className='font-bold text-center'>Available on</h1>   
                <ul className='flex space-x-3 text-2xl cursor-pointer'>
                  <li><a href="https://www.facebook.com/login/ " target='_blank'><FaFacebook/></a> </li>   
                  <li><a href="https://www.linkedin.com/login/ " target='_blank'><CiLinkedin /></a> </li>      
                  <li><a href="https://www.github.com/login/ " target='_blank'><FaGithub /></a> </li>      
                  <li><a href="https://web.telegram.org/a/ " target='_blank'><FaTelegram /></a> </li>      
                   
                </ul>                                                                
                </div>
                <div>
                <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working on</h1>   
                <ul className='flex space-x-5 text-2xl cursor-pointer'>
                  <li><DiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>   
                  <li><SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>   
                  <li><FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>   
                  <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>   
                </ul>                                                                
                </div>
                </div>
            </div>            
        </div>
        <div className='md:w-1/2  md:ml-40 ml-10 order-1 '>
        <img className='rounded-full md:w-[400px] w-[300px] md:h-[650px] h-[400px]' src='./public/pic01.png'></img>
        </div>
    </div>
    <br />
    <hr />
    </div>
  )
}

export default Home