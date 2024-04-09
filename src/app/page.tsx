import { ContainerScroll } from "@/components/global/containter-scroll-animation";
import { Hero } from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";;

// To do:
// navbar padding on window size
// line break in hero text
// get started button default color or maybe new button
// picture for container + background colors
// figure out what we want on navbar
// fix color transition into other parts of site
// transition on open/scroll
// payment plans / pricing
// payment, authentication, main program part

export default function Home() {
  return (
    <main>
      <Navbar data-aos="fade-in" />
      <section data-aos="fade-in">
      <Hero />
      </section>
      <section data-aos="fade-in" className="h-screen w-full rounded-md !overflow-visible flex flex-col items-center antialiased">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300 font-sans font-bold">
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
