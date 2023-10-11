import React from 'react'

const Button = (props) => {
  return (
    <div className='button bg-[#dfe8e6] text-black  p-2 px-4 rounded-full text-lg font font-black font-sans text'>
        {props.text}
    </div>
  )
}

export default Button;
