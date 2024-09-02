//audioNode.js;

import BaseNode from "./baseNode";

export const AudioNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} nodeType="Audio" handlePosition="source" />
  );
};
