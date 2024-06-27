"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
import { Info } from "./info";
import { Participants } from "./participants";
import ExcalidrawComponent from "./excaliDraw";

interface CanvasProps {
  boardId: string;
}


import dynamic from "next/dynamic";
const Excalidraw2 = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);

//Closest to the original
/*

  return (
    <>
   <div className="bg-red-500" style={{ height: "60px" } }>
   
   <Info boardId={boardId} />
      <Participants />
   </div>
   
   
    <div style={{ height: "900px" }}>
      <Excalidraw />
    </div>
  </>
  );




*/



export const Canvas = ({ boardId }: CanvasProps) => {
 

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <Info boardId={boardId} />
      <Participants />
      </div>
      
      {/* Excalidraw Container */}
      <div className="flex-1 relative">
      <Excalidraw />
      </div>
    </div>
  );





};