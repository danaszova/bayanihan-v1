import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

const ExcalidrawWrapper = () => {
  return (
    <div style={{ paddingTop: '64px' }} className="absolute inset-0" >
      <Excalidraw />
    </div>
  );
};




const ExcalidrawComponent = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex-grow relative">
      <ExcalidrawWrapper />
    </div>
  </div>
  );
};

export default ExcalidrawComponent;