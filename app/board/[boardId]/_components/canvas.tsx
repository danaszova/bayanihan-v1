"use client";

import { useCallback, useState, useEffect } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { useMutation } from "@/liveblocks.config";
import { pointerEventToCanvasPoint } from "@/lib/utils";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";

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

  const onWheel = useCallback((e: WheelEvent) => {
    setCamera((prevCamera) => ({
      x: prevCamera.x - e.deltaX,
      y: prevCamera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = pointerEventToCanvasPoint(e, camera);
      console.log("Pointer Move: ", current);
      setMyPresence({ cursor: current });
    },
    [camera, canvasState]
  );

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const reactPointerEvent = {
        preventDefault: () => e.preventDefault(),
        clientX: e.clientX,
        clientY: e.clientY,
        pointerType: e.pointerType,
      } as React.PointerEvent;
      onPointerMove(reactPointerEvent);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("wheel", onWheel);
    };
  }, [onPointerMove, onWheel]);

  return (
    <div className="h-screen overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4 fixed top-0 w-full z-10">
        <Info boardId={boardId} />
        <Participants />
      </div>

      <div id="excalidraw-container" className="mt-16 relative">
        <Excalidraw />
      </div>

      <svg
        className="h-[100vh] w-[100vw] pointer-events-none"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          <CursorsPresence />
        </g>
      </svg>
    </div>
  );
};
