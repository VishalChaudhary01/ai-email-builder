"use client"
import { IDragDropLayoutContext } from "@/types/dragdrop";
import { createContext, useContext } from "react";

export const DragDropLayoutContext = createContext<IDragDropLayoutContext | undefined>(undefined);

export function useDragDropLayout() {
  const context = useContext(DragDropLayoutContext);
  if (context === undefined) {
    throw new Error("useDragDropLayout must be used within a DragDropLayoutProvider");
  }
  return context;
}
