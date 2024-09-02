//videoNode.js;

import CustomHandle from "../utils/custom-handle";
import SelectOptions from "../utils/select-options";
import BaseModel from "./BaseModel";
// import BaseNode from "./baseNode";
import { FaVideo } from "react-icons/fa";
export const VideoNode = ({ id, data }) => {
  return (
    <BaseModel name={id} icon={<FaVideo />}>
      <div className="p-3">
        <SelectOptions
          label="video"
          title="Select a video"
          data={[
            { value: "video1", label: "Video 1" },
            { value: "video2", label: "Video 2" },
            { value: "video3", label: "Video 3" },
          ]}
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
