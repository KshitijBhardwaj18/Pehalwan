import React from 'react'
import logo from "@/public/assets/LOGO.png"
import Image from 'next/image'
import Button from './button.jsx'

const Navbar = () => {
  return (
    <div className='navbar bg-transparent'>

        <div className="flex justify-between p-7">
            <div className='logo   text-white font font-black'><Image src={logo} alt="logo"></Image></div>

            <div className='buttons  flex justify-between'>
                <div className='SignUp text-xl text-white font-black pr-2'><Button text={"Register"}/></div>
                <div className='SignUp text-xl text-white font-black '><Button text={"Login"}/></div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
