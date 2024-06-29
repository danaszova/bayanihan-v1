"use client";

import { useCallback, useState } from "react";

import {
  useMutation,
} from "@/liveblocks.config";
import {
  pointerEventToCanvasPoint,
} from "@/lib/utils";

import {
  Camera,
  CanvasMode,
  CanvasState,
} from "@/types/canvas";


import { Info } from "./info";
import { Participants } from "./participants";
import { CursorsPresence } from "./cursors-presence";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  
const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
 
 
  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);
      console.log("Pointer Move: ", current);
      setMyPresence({ cursor: current });
    },
    [
      camera,
      canvasState,
    ]
  );


  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
 
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          <CursorsPresence />        
        </g>
      </svg>
    </main>
  );
};
