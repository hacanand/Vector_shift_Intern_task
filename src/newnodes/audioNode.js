//audioNode.js;

import BaseModel from "./BaseModel";
import BaseNode from "./baseNode";

export const AudioNode = ({ id, data }) => {
  return (
    <BaseModel name={id} data={data}  />
  );
};
