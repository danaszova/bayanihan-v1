"use client";
import { useEffect } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { Info } from "./info";  
import { Participants } from "./participants";  


interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("excalidraw-container");
      if (container) {
        container.style.height = `${window.innerHeight - 64}px`; // 64px = 4rem (top bar height)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4 fixed top-0 w-full z-10">
      <Info boardId={boardId} />
        <Participants />
      </div>

      {/* Excalidraw Container */}
      <div id="excalidraw-container" className="mt-16 relative">
        <Excalidraw
          onChange={(elements, state) => console.log("Elements: ", elements, "State: ", state)}
          initialData={{
            appState: { zenModeEnabled: true, viewBackgroundColor: "#a5d8ff" },
            scrollToContent: true,
          }}
        />
      </div>
    </div>
  );
};
