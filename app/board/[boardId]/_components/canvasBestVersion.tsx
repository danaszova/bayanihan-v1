"use client";
//import { useEffect } from "react";
import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { LiveObject } from "@liveblocks/client";




import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
  useStorage,
  useOthersMapped,
  useSelf,
} from "@/liveblocks.config";

import {
  colorToCss,
  connectionIdToColor,
  findIntersectingLayersWithRectangle,
  penPointsToPathLayer,
  pointerEventToCanvasPoint,
  resizeBounds,
} from "@/lib/utils";



import {
  Camera,
  CanvasMode,
  //CanvasState,
  Color,
  LayerType,
  Point,
  Side,
  XYWH,
} from "@/types/canvas";



import { Excalidraw } from "@excalidraw/excalidraw";
import { Info } from "./info";  
import { Participants } from "./participants";  


import { CursorsPresence } from "./cursors-presence";


interface CanvasProps {
  boardId: string;
}

//---------------------------------------------------
import {
  
  CanvasState,
  
} from "@/types/canvas";

//---------------------------------------------------









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




//---------------------------------------------
const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
 



const onPointerMove = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();

    const current = pointerEventToCanvasPoint(e, camera);

    setMyPresence({ cursor: current });


    console.log("Pointer Move: ", current);

  },
  [
    


  ]
);


const onWheel = useCallback((e: React.WheelEvent) => {
  console.log("Wheel: ", e.deltaX, e.deltaY);
  setCamera((camera) => ({
    x: camera.x - e.deltaX,
    y: camera.y - e.deltaY,
  }));
}, []);
//---------------------------------------------







  return (
    <div className="h-screen overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4 fixed top-0 w-full z-10">
      <Info boardId={boardId} />
        <Participants />
      </div>

      {/* Excalidraw Container */}
      <div id="excalidraw-container" className="mt-16 relative">
        {/*<Excalidraw
          //onChange={(elements, state) => console.log("Elements: ", elements, "State: ", state)}
          initialData={{
            appState: { zenModeEnabled: true, viewBackgroundColor: "#a5d8ff" },
            scrollToContent: true,
          }}
        />*/}
      </div>
    
    
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </div>
  );
};
