import React from 'react'

const BaseModel = ({children,icon,name}) => {
  return (
    <div className="h-72 w-64 bg-neutral-50 border-2 border-neutral-600 rounded-xl">
      <div className='flex gap-2 text-xl font-bold p-3 items-center'>
        {icon}
         {name} 
      </div>
      {children}
    </div>
  );
}

export default BaseModel