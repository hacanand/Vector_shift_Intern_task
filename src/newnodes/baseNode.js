// baseNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseModel from './BaseModel';
import CustomHandle from '../utils/custom-handle';

const BaseNode = ({ id, data, nodeType, handleNameChange, handleTypeChange, handlePosition, icon }) => {
  const [variable,setVariable]=useState(4);
  const [currName, setCurrName] = useState(data?.name || id?.replace(`${nodeType}-`, `${nodeType}_`));
  const [type, setType] = useState(data.type || 'Text');

  const onNameChange = (e) => {
    setCurrName(e.target.value);
    handleNameChange && handleNameChange(e);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
    handleTypeChange && handleTypeChange(e);
  };

  return (
    <BaseModel name={nodeType} icon={icon}>

      {variable && nodeType==="Text" &&   [...Array(variable-1)].map((v,i)=>(
        <CustomHandle
          key={i}
          type="target"
          position={Position.Left}
          id={`${id}-prompt-${i}`}
          style={{ top: `${20*(i+1)}%` }}
        />
      ))}

      <CustomHandle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '50%' }}
      />  
      <div className='p-4'>
        <label htmlFor="text" className='flex flex-col font-medium'>LLM</label>
        <input type="text" className='border-2 rounded-md focus:outline-none border-neutral-400 px-1 h-10'/>
      </div>
      <div className='p-4'>
        <span>This is a LLM.</span>
      </div>
      <CustomHandle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseModel>
  );
};

export default BaseNode;