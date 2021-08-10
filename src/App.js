import './App.css';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <div className="App">
      <button onClick={() => setOpenModal(true)} >Start</button>
      <VideoModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
