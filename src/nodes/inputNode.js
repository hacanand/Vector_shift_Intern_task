// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseModel from "../newnodes/baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseModel name={id}>
      <div>
        <span>Input</span>
      </div>
      <div className="">
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        className="font-bold"
        position={Position.Left}
        id={`${id}-value`}
      />
    </BaseModel>
  );
};
