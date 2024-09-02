import React from 'react'

const Input = ({label,type,placeholder,className}) => {
  return (
      <div className= "">
        <label htmlFor={label} className='flex flex-col font-medium'>{label}</label>
        <input type={type} placeholder={placeholder}
         className={`border-2 rounded-md focus:outline-none border-neutral-400 px-1 h-10 ${className}` }/>
    </div>
  )
}

export default Input