import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
      <Toaster/>
    </div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>   
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App