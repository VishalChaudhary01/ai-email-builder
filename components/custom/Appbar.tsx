"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Appbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b rounded-md shadow-sm my-4">
      <h3 className="text-lg font-bold text-foreground/90">AI Email Builder</h3>
      {session ? (
        <Button>Dashboard</Button>
      ) : (
        <Button onClick={() => router.push("/signin")}>Get Started</Button>
      )}
    </div>
  );
}
