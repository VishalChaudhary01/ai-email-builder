"use client"
import { elementList } from "@/constants/element.constant";
import { layouts } from "@/constants/layout.contstant";
import { useDragDropLayout } from "@/context/dragdrop.layout.context";
import { IElementList, ILayout } from "@/types";

export function EditorLeftSidebar() {
  const { setSelectedLayout } = useDragDropLayout();
  
  const handleDragLayoutStart = (layout: ILayout) => {
    setSelectedLayout(layout)
  }

  return (
    <div className="px-4 flex flex-col gap-4 min-h-screen">
      <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold text-foreground/90 pl-1 border-b">
        Layouts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {layouts.map((layout: ILayout) => (
          <div
            key={layout.label}
            draggable
            onDragStart={() => handleDragLayoutStart(layout)}
            className="flex flex-col group/item items-center justify-center border border-dashed p-2 rounded-xl bg-background hover:border-primary/90"
          >
            <layout.icon className="group-hover/item:text-primary" />
            <span className="text-sm group-hover/item:text-primary">
              {layout.label}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold text-foreground/90 pl-1 border-b">
        Elements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {elementList.map((element: IElementList) => (
          <div
            key={element.label}
            className="flex flex-col group/item items-center justify-center border border-dashed p-2 rounded-xl bg-background hover:border-primary/90"
          >
            <element.icon className="group-hover/item:text-primary" />
            <span className="text-sm group-hover/item:text-primary">
              {element.label}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}