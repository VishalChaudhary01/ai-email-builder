"use client"
import { Button } from "@/components/ui/button";
import { useScreenSize } from "@/context/screen.context";
import { Code, Monitor, Smartphone } from "lucide-react";

export function EditorAppbar() {
  const { screenSize, setScreenSize } = useScreenSize();

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b rounded-md shadow-sm my-4">
      <h3 className="text-lg font-bold text-foreground/90">AI Email Builder</h3>
      <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => setScreenSize("Desktop")} className={`${screenSize === "Desktop" && "bg-secondary text-primary"}`}><Monitor />Desktop</Button>
          <Button variant="outline" onClick={() => setScreenSize("Mobile")} className={`${screenSize === "Mobile" && "bg-secondary text-primary"}`}><Smartphone />Mobile</Button>
      </div>
      <div className="flex items-center gap-4">
          <Button variant="outline"><Code /></Button>
          <Button>Save Template</Button>
          <Button>Download HTML</Button>
      </div>
    </div>
  );
}
