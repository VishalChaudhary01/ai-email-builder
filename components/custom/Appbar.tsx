import { Button } from "@/components/ui/button";

export function Appbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b rounded-md shadow-md my-4">
      <h1>Email Builder</h1>
      <Button>Get Start</Button>
    </div>
  );
}
