import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-black'>

        <div className="flex justify-between p-7">
            <div className='logo  text-xl text-white font-black'>Pehalwan</div>

            <div className='buttons  flex justify-between'>
                <div className='SignUp text-xl text-white font-black pr-2'>SignUp</div>
                <div className='SignUp text-xl text-white font-black '>SignIn</div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
