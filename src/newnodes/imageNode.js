//imageNode.js;

import BaseNode from "./baseNode";
import { FaImage } from "react-icons/fa";
export const ImageNode = ({ id, data }) => {
  return (
    <BaseNode
      id='2'
      data={data}
       
      icon={<FaImage />}
      nodeType="Image"
      handlePosition="source"
    />
  );
};
