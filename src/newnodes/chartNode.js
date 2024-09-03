//chartNode.js;

import CustomHandle from "../utils/custom-handle";
import Input from "../utils/input";
import BaseModel from "./BaseModel";
import BaseNode from "./baseNode1";
import { FaChartArea } from "react-icons/fa";

export const ChartNode = ({ data, id }) => {
  return (
    <BaseModel name={id} icon={<FaChartArea />}>
      <div className="p-4">
        <Input label="Name" className="rounded-full" />
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
