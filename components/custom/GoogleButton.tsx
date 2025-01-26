"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

export function GoogleButton() {
  return (
    <div className="px-8 py-4 border shadow-sm rounded-md">
      <Button
        onClick={() => signIn("google")}
        className="flex items-center gap-2 px-8 py-4"
      >
        <Image
          src={"/google.svg"}
          alt="google"
          width={24}
          height={24}
          className="bg-background rounded-full"
        />
        <span>Continew with Google</span>
      </Button>
    </div>
  );
}
