//videoNode.js;

import BaseNode from "./baseNode";
import { FaVideo } from "react-icons/fa";
export const VideoNode = ({ id, data }) => {
  return (
    <BaseNode
      id='3'
      data={data}
      nodeType="Video"
     
      icon={<FaVideo />}
      handlePosition="source"
    />
  );
};
