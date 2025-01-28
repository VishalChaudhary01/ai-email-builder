import { ILayout } from "@/types";

export const ColumnLayout = ({ layout }: { layout: ILayout }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${layout.numOfCol}, 1fr)`,
      }}
    >
      {Array.from({ length: layout.numOfCol }).map((_, index) => (
        <div
          key={index}
          className="text-center p-4 border border-dashed col-span-1"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
