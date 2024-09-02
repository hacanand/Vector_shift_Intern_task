//imageNode.js;

import CustomHandle from "../utils/custom-handle";
import Input from "../utils/input";
import BaseModel from "./BaseModel";
import BaseNode from "./baseNode";
import { FaImage } from "react-icons/fa";
export const ImageNode = ({ id, data }) => {
  return (
    <BaseModel name={id} icon={<FaImage />}>
      <div className="p-3">
        <Input
          label="File"
          type="file"
          className="rounded-full w-full border-0 pt-1"
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
