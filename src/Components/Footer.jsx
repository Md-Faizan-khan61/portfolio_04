import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <>
           
            <footer className='py-12'>
            <div className="max-w-screen-2xl container mx-auto mt-12 px-4 md:px-20">
            <hr />    
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4 mt-8'>
                    <a href='https:/facebook.com' target='_blank'><FaFacebook size={24} className='text-blue-500'/></a>
                    <CiLinkedin size={24} className='text-blue-400'/>
                    <FaGithub size={24}/>
                    <FaTelegram size={24} className='text-blue-700'/>
                </div>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <p>
                      &copy; All right reserved 2024  
                    </p>
                    <p>
                        Faizan khan❤️
                    </p>    
                </div>

            </div>   
            </div>
            </footer>
        </>
    )
}

export default Footer