import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import { RxCross2 } from "react-icons/rx";
const CustomEdge = (props) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;
  // console.log(props.id)
  const { setEdges } = useReactFlow();
  const [edgePath,labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  //console.log(labelX)
  //console.log(labelY)
  //console.log(id)

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
          <RxCross2
            style={{
              position: " absolute",
              left: labelX,
              top: labelY,
              transform: "translate(-50%, -50%)",
              fontSize: 20,
            }}
            className="text-pink-600 hover:text-pink-700 bg-slate-100  cursor-pointer   "
            //tries to remove the edge but does not work
            onClick={() =>
              setEdges((prevEdges) =>
                prevEdges.filter((edge) => edge.id !== id)
              )
            }
          />
        
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
