import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { CiCircleInfo } from "react-icons/ci";
const BaseModel = ({children,icon,name}) => {
  return (
    <div className="min-h-72 w-64 h-full bg-neutral-50 border-2 border-neutral-500 rounded-xl hover:border-neutral-800">
      <div className="flex  justify-between">
        <div className="flex gap-2 text-xl font-bold p-3 items-center">
          {icon}
          {name}
        </div>
        <div className="flex gap-2 text-xl font-bold p-3 items-center cursor-pointer ">
          <CiCircleInfo className="size-6 fill-blue-500 hover:fill-blue-700" />
          <TiDeleteOutline className="size-6 fill-pink-500 hover:fill-pink-700" />
        </div>
      </div>
      {children}
    </div>
  );
}

export default BaseModel