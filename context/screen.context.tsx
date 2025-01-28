"use client"
import { IScreenSizeContext } from "@/types";
import { createContext, useContext } from "react";

export const ScreenSizeContext = createContext<IScreenSizeContext | undefined>(undefined);

export function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
}
