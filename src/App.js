import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PipelineToolbar />
      <PipelineUI />
        <SubmitButton />
        
    </div>
  );
}

export default App;
