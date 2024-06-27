"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

//---------------------------------------------------

import { Info } from "./info";
import { Path } from "./path";
import { Toolbar } from "./toolbar";
import { Participants } from "./participants";
import { LayerPreview } from "./layer-preview";
import { SelectionBox } from "./selection-box";
import { SelectionTools } from "./selection-tools";
import { CursorsPresence } from "./cursors-presence";

//---------------------------------------------------



interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
 

  return (
    <>
    <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
    <Info boardId={boardId} />
    
    <div style={{ height: "500px" }}>
      <Excalidraw />
    </div>
  </>
  );
};
