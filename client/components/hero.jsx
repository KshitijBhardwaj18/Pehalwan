import React from 'react'
import arnold from "@/public/assets/arnold.png"
import Image from 'next/image'
import Button from './button'

const Hero = () => {
  return (
    <div className='hero  flex  justify-between'>

        <div className='heading p-20 pt-[100px]'>
            <span className='text-[#dfe8e6] font text-bold text-heading'>Connecting Fitness <br/> Warriors: </span>
            <br />
            <span className='text-white font text-bold text-3xl'>Pehalwan - Your Social Hub for Fitness</span>
            <br />
            <div className='buttons flex gap-2 pt-5'>
            <Button text={"Join"}/>
            <Button text={"Login"}/>
            </div>

        </div>

        <div className='arnold'>
            <Image src={arnold} alt="arnold"></Image>

        </div>
      
    </div>
  )
}

export default Hero
