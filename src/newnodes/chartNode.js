//chartNode.js;

import BaseNode from "./baseNode";
import { FaChartArea } from "react-icons/fa";

export const ChartNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      icon={<FaChartArea/>}
      nodeType="Chart"
       
    />
  );
};
