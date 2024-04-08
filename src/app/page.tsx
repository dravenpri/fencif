
import { ContainerScroll } from "@/components/global/containter-scroll-animation";
import { Hero } from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// To do:
// navbar padding on window size
// line break in hero text
// hero buttons
// get started button default color or maybe new button
// picture for container + background colors

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="h-screen w-full rounded-md !overflow-visible flex flex-col items-center antialiased">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Allow us to do the boring stuff
                </h1>
              </div>
            }
          />
        </div>
      </section>
    </main>
  );
}

