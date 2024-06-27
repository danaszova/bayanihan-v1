"use client";
//import { Excalidraw } from "@excalidraw/excalidraw";
import { Info } from "./info";
import { Participants } from "./participants";
import ExcalidrawComponent from "./excaliDraw";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
 

  return (
    
    <div className="min-h-screen flex flex-col bg-neutral-100">
    {/* Top Bar Content */}
    <div className="bg-neutral-100 text-white p-4">
      <div className="container mx-auto">
      <Info boardId={boardId} />
      <Participants />
    </div>
    </div>
    
    
    {/* Main Content */}
    <main className="flex-1 w-full relative touch-none">
      {/* Example components above Excalidraw */}
      <h1 className="text-center">Excalidraw Example</h1>    
      {/* Excalidraw Component */}
      <div>
        <ExcalidrawComponent />
      </div>
    </main>
  </div>
  );





};