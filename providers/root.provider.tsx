"use client"
import { SessionProvider } from "next-auth/react";
import { ConvexProvider } from "convex/react";
import React, { useState } from "react";
import { ILayout, IScreenSize } from "@/types";
import { convexClient } from "./convex.provider";
import { ScreenSizeContext } from "@/context/screen.context";
import { DragDropLayoutContext } from "@/context/dragdrop.layout.context";
import { EmailTemplateContext } from "@/context/emailTemplate.context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState<IScreenSize>("Desktop");
  const [selectedLayout, setSelectedLayout] = useState<ILayout | undefined>(undefined);
  const [emailTemplate, setEmailTemplate] = useState<any[]>([]);

  return (
    <SessionProvider>
      <ConvexProvider client={convexClient}>
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
          <DragDropLayoutContext.Provider value={{ selectedLayout, setSelectedLayout }}>
            <EmailTemplateContext.Provider value={{ emailTemplate, setEmailTemplate }}>
            {children}
            </EmailTemplateContext.Provider>
          </DragDropLayoutContext.Provider>
        </ScreenSizeContext.Provider>
      </ConvexProvider>
    </SessionProvider>
  )
};
