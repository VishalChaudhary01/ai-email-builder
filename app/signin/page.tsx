import { GoogleButton } from "@/components/custom/GoogleButton";
import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/");
  return (
    <div className="flex items-center justify-center mt-12">
      <GoogleButton />
    </div>
  );
}
