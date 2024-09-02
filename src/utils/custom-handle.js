import React from 'react'
import { Handle } from 'reactflow'
const CustomHandle = (props ) => {
  return (
    <Handle {...props} className=" !h-3 !w-3 " />
  );
}

export default CustomHandle