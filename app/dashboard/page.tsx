import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Dashboard() {
     const session = await getServerSession(authOptions);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-5xl my-6">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90">
            Hello, <span>{session?.user?.name}</span>
          </h2>
          <Button>Create New Email Template</Button>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            src={"/email.webp"}
            width={300}
            height={300}
            alt="image"
            className="items-center"
          />
          <Button>Create Email Template</Button>
        </div>
      </div>
    </div>
  );
}
