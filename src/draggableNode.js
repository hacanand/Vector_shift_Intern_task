// draggableNode.js

export const DraggableNode = ({ type, label,icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '80px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: '#1C2536',
          justifyContent: 'center', 
          flexDirection: 'column'
        }} 
        draggable
      >

        <div className=" font-bold flex flex-col items-center justify-center" style={{ color: '#fff' }}>
          {icon}
          <div>{label}</div>
        </div>
      </div>
    );
  };
  