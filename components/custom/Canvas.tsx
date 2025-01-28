"use client";
import { useDragDropLayout } from "@/context/dragdrop.layout.context";
import { useEmailTemplate } from "@/context/emailTemplate.context";
import { useScreenSize } from "@/context/screen.context";
import { useState } from "react";
import { ColumnLayout } from "./ColumnLayout";
import { ILayout } from "@/types";

export function Canvas() {
  const { selectedLayout } = useDragDropLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { screenSize } = useScreenSize();
  const [dragOverLayout, setDragOverLayout] = useState(false);

  const handleDragOverLayout = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverLayout(true);
  };

  const handleOnDropLayout = () => {
    setDragOverLayout(false);
    setEmailTemplate((prev: ILayout[]) => [...prev, selectedLayout]);
  };

  const getLayoutComponent = (layout: ILayout) => {
    if (layout.type === "column") {
      return <ColumnLayout layout={layout} />;
    }
  };

  return (
    <div
      className={`${screenSize === "Desktop" ? "w-full" : "w-[360px]"} flex items-start justify-center`}
    >
      <div
        className={`w-full p-6 ${dragOverLayout ? "bg-purple-100" : "bg-white"}`}
        onDragOver={handleDragOverLayout}
        onDrop={() => handleOnDropLayout()}
      >
        {emailTemplate.map((item, index) => (
          <div key={index}>{getLayoutComponent(item)}</div>
        ))}
        {!selectedLayout && (
          <h2 className="text-lg text-center md:text-xl font-semibold bg-background border border-dashed rounded-md p-4">
            Add Layout here
          </h2>
        )}
      </div>
    </div>
  );
}
