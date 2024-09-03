import { Position } from "reactflow";
import CustomHandle from "../utils/custom-handle";
import Input from "../utils/input";
import BaseModel from "./BaseModel";
import { IoDocumentText } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
export const TextNode = ({ id}) => {
  const [value, setValue] = useState("{{input}}");
  const [variable, setVariable] = useState(1);
   const textareaRef = useRef(null);
  // console.log(variable);
   useEffect(() => {
     if (textareaRef.current) {
       textareaRef.current.style.height = "auto";
       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
     }
     // check in textareaRef how many number  of "{{input }}" then  setVariable
     function checkString() {
       const regex = /\{\{\s*(.+?)\s*\}\}/g;
       let match;
       const counts = {};
     
       while ((match = regex.exec(value)) !== null) {
         const content = match[1]; // Extract the content inside the double brackets
         if (counts[content]) {
           counts[content]++;
         } else {
           counts[content] = 1;
         }
       }
       if (Object.keys(counts).length > 6) {
         toast.error("You can only have 6 variables in a single node");
       } else {
         setVariable(Object.keys(counts).length);
       }
     }
      checkString();
   }, [value]);
  return (
    <BaseModel name={id} icon={<IoDocumentText />}>
      <div
        className="p-4  
        "
      >
        <label
          for="message"
          class="block mb-2 text-md font-medium text-gray-900   "
        >
          Your Input
        </label>
        <textarea
          ref={textareaRef}
          className="w-full overflow-hidden p-2 border rounded-md resize-none focus:outline-none border-neutral-400 min-h-32"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {variable &&[...Array(variable)].map((v, i) => (
      <CustomHandle
        key={i}
        type="target"
        position={Position.Left}
        id={`${id}-prompt-${i + 1}`}
        style={{ top: `${15 * (i + 1)}%` }}
      />
      ))}
      <CustomHandle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseModel>
  );
};
