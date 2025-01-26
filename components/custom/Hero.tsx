import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
     return (
          <div className="flex flex-col items-center justify-center min-w-sm md:max-w-3xl mt-8 p-4">
               <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-2 text-foreground/90">AI-Powered <span className="text-primary">Email Templates</span></h1>
               <p className="text-center">Design stunning email templates in minutes. Drag and drop elements, customize effortlessly, and download your responsive, HTML-ready design—no coding skills required!</p>
               <div className="flex items-center gap-4 my-4">
                    <Button variant={"outline"}>Try Demo</Button>
                    <Button>Get Started</Button>
               </div>
               <div className="my-6">
                    <Image src={'/hero.webp'} width={1200} height={100} alt="hero" />
               </div>
          </div>
     )
}