import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-scroll'
function Navbar() {
  const[menu, setMenu] = useState(false);
  const navItems = [
    {
      id:1,
      name:'Home'
    },
    {
      id:2,
      name:'About'
    },
    {
      id:3,
      name:'Portfolio'
    },
    
    {
      id:4,
      name:'Experience'
    },
    {
      id:5,
      name:'Contact'
    },
  ]
  return (
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-18 h-20 shadow bg-white fixed top-0 left-0 right-0 z-10'>
   <div className='flex justify-between items-center h-20'>
        <div className='flex space-x-2'>
         <img src='./logo.png' className='h-12 w-12 rounded-full'/>
          <h1 className='font-semibold text-xl cursor-pointer'>Fai
            <span className='text-green-500 text-2xl'>zan</span>
          <p className='text-sm'>Web developer</p>
          </h1>          
        </div>
        <div>
           <ul className='hidden md:flex space-x-8' >
            {/* <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Contact</li> */}
            {navItems.map((item)=>
               <li className='cursor-pointer hover:scale-105 duration-200 text-gray-500 ' key={item.id}>
               <Link
                 to={item.name}
                 smooth={true} 
                 offset={50} 
                 duration={500}
                 activeClass="active" 
                >
                {item.name}
                </Link>
                </li>
            )}
           </ul>
      <div onClick={()=>{setMenu(!menu)}} className='md:hidden'>
          { menu ? <MdMenu size={24}/> :  <IoIosClose size={24}/> }
      </div> 
        </div>
    </div>
    {/* Mobile Navbar */}
    {!menu && (<div>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-5 text-xl bg-[rgba(33,33,33,0.9)]'>
            {/* <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Contact</li> */}
            {navItems.map((item)=>
               <li className='cursor-pointer hover:scale-105  duration-200 text-white' key={item.id}>
                <Link                 
                 to={item.name}
                 smooth={true} 
                 offset={50} 
                 duration={500}
                 activeClass="active" 
                >
                {item.name}
                </Link>
                </li>
            )}
        </ul>      
      </div>)}          
  </div> 
  
  )
}

export default Navbar