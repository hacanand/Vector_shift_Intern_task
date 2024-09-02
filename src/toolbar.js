// toolbar.js

import { DraggableNode } from './draggableNode';
import { FaImage } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";


export const PipelineToolbar = () => {

    return (
      <div style={{ padding: "10px" }}>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {/* <DraggableNode
            type="text"
            label="Text"
            icon={<IoDocumentText className="size-7" />}
          />
          <DraggableNode
            type='llm'
            label={'LLM'}
            icon={<FaChartArea className="size-7" />}
          /> */}

          <DraggableNode
            type="image"
            label="Image"
            icon={<FaImage className="size-7" />}
          />
          <DraggableNode
            type="chart"
            label="Chart"
            icon={<FaChartArea className="size-7" />}
          />
          <DraggableNode
            type="document"
            label="Document"
            icon={<IoIosDocument className="size-7" />}
          />

          <DraggableNode
            type="text"
            label="Text"
            icon={<IoDocumentText className="size-7" />}
          />
          <DraggableNode
            type="video"
            label="Video"
            icon={<FaVideo className="size-7" />}
          />
        </div>
      </div>
    );
};
