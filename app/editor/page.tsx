import { Canvas } from "@/components/custom/Canvas";
import { EditorLeftSidebar } from "@/components/custom/EditorLeftSidebar";
import { EditorRightSidebar } from "@/components/custom/EditorRightSidebar";

export default function Editor() {
  return (
    <div className="grid grid-cols-5 py-4">
      <EditorLeftSidebar />
      <div className="col-span-3 flex p-4 my-4 justify-center bg-gray-100">
        <Canvas />
      </div>
      <EditorRightSidebar />
    </div>
  );
}
