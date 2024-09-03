// submit.js

import { toast } from "react-toastify";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
const selectoe = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selectoe, shallow);
    console.log("edges", edges);
    console.log("nodes", nodes);
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes: nodes,
            edges: edges,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("data", data.cycle);
        if (data.has_cycle) {
          toast.error("Pipeline contains cycle");
          return;
        }
        toast.success(
          `Pipeline submitted successfully and pipeline contains ${
            data.nodes
          } nodes, ${data.edges} edges, and ${
            data.has_cycle ? " contains cycle" : " does not contain cycle"
          }`
        );
      } catch (error) {
        console.error("Error submitting pipeline:", error);
        toast.error("Failed to submit pipeline");
      }
    };
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className="font-bold p-3 mt-2 border-2 rounded-md hover:bg-slate-700 bg-slate-800 text-white" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
