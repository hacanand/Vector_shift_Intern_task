//documentNode.js;

import BaseNode from "./baseNode";
import { IoIosDocument } from "react-icons/io";
export const DocumentNode = ({ id, data }) => {
  return (
    <BaseNode id='1' data={data}
       
      icon={<IoIosDocument />}
      nodeType="Document" handlePosition="source" />
  );
};
