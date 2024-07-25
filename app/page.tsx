import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Projects from "./ui/Projects";
import Tools from "./ui/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="bg-black min-h-screen">
        <div className="border-l border-r border-[rgb(237_237_237_/_15%)] min-h-[80vh] ml-4 mr-4 sm:ml-7 sm:mr-7 lg:ml-14 lg:mr-14 pt-14">
          <Hero />
          <Projects />
        </div>
        <div className="hidden sm:block border-t-[3px] border-dashed border-[rgb(237_237_237_/_15%)]">
          <div className="flex justify-between ml-[1.62rem] mr-[1.62rem] lg:ml-[3.4rem] lg:mr-[3.4rem]">
            <div className="h-[6px] w-[6px] bg-white -mt-[4px]"></div>
            <div className="h-[6px] w-[6px] bg-white -mt-[4px]"></div>
          </div>
        </div>
        <div className="hidden sm:block border-l border-r border-[rgb(237_237_237_/_15%)] min-h-[80vh] ml-4 mr-4 sm:ml-7 sm:mr-7 lg:ml-14 lg:mr-14 pt-14">
          <Tools />
        </div>
        <div className="text-[0.7rem] text-gray-50 py-6 px-3 flex flex-wrap justify-center text-center font-light">
          <span>
            &copy; 2024 Deni. ALL RIGHTS RESERVED. CREDIT - VERCEL SHIP.
          </span>
          <a href="mailto:wisdomochiche@gmail.com">
            <Image
              width={18}
              height={18}
              alt="mail"
              src="/mail.svg"
              className="ml-2"
            />
          </a>
        </div>
      </main>
    </>
  );
}
