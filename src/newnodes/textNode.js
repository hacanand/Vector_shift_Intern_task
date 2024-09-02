import BaseNode from "./baseNode";
import { IoDocumentText } from "react-icons/io5";
export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id='4'
      data={data}
      nodeType="Text"
       
      icon={<IoDocumentText />}
      handlePosition="source"
    />
  );
};
