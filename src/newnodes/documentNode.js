//documentNode.js;

import CustomHandle from "../utils/custom-handle";
import Input from "../utils/input";
import BaseModel from "./BaseModel";
// import BaseNode from "./baseNode1";
import { IoIosDocument } from "react-icons/io";
export const DocumentNode = ({ id, data }) => {
  return (
    <BaseModel name={id} data={data} icon={<IoIosDocument />}>
      <div className="p-4">
        <Input
          label="Name"
          type="text"
          className=""
          placeholder="About Document"
        />
      </div>
      <CustomHandle type="source" position="right" id={`${id}-response`} />
      <CustomHandle
        type="target"
        position="left"
        id={`${id}-prompt`}
        style={{ top: "50%" }}
      />
    </BaseModel>
  );
};
