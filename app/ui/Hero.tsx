import React from "react";
import { poppins_bold, poppins_regular, rubik } from "./fonts";
import Image from "next/image";

function Hero() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <section>
      <div className="flex min-h-[40vh] sm:min-h-[80vh] border ml-14 mr-14 border-[rgb(237_237_237_/_15%)]">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between xl:block">
            <div className="h-6 w-6 border-t border-l border-white"></div>
            <div className="xl:hidden h-6 w-6 border-t border-r border-white"></div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <div
              className={`text-3xl sm:text-6xl xl:text-9xl text-center px-4 lg:px-0 leading-0 ${rubik.className} text-gray-50 font-bold`}
            >
              SOFTWARE ENGINEER
            </div>
            <p className="mt-2 text-center text-[0.6rem] sm:text-lg">
              DENI OCHICHE | {month} {day}, {year}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="h-6 w-6 border-b border-l border-white"></div>
            <div className="xl:hidden h-6 w-6 border-b border-r border-white"></div>
          </div>
        </div>
        <div className="hidden xl:flex w-[25%] max-w-[250px] min-h-[80vh] flex-col justify-between border-l border-[rgb(237_237_237_/_15%)]">
          <div>
            <div className="h-6 w-6 border-t border-r border-white ml-auto"></div>
            <div className="text-sm pb-3 px-3 border-b border-gray-50">
              HIGHLIGHTS
            </div>
            <ul>
              <li
                className={`flex gap-2 items-center text-sm py-5 px-3 border-b border-[rgb(237_237_237_/_15%)]`}
              >
                <Image
                  width={14}
                  height={16}
                  alt="code-branch"
                  src="/codebranch.svg"
                />
                <span>
                  <span className="text-sm font-light mr-1">3+</span>
                  <span className={`${rubik.className} font-light`}>
                    years of experience.
                  </span>
                </span>
              </li>
              <li
                className={`${poppins_regular.className} flex gap-2 items-center text-sm py-5 px-3 border-b border-[rgb(237_237_237_/_15%)]`}
              >
                <Image width={16} height={16} alt="brain" src="/brain.svg" />
                <span className={`${rubik.className} font-light`}>
                  Programming in over 3 languages.
                </span>
              </li>
              <li
                className={`${poppins_regular.className} flex gap-2 items-center text-sm py-5 px-3 border-b border-[rgb(237_237_237_/_15%)]`}
              >
                <Image width={16} height={16} alt="grad" src="/grad.svg" />
                <span className={`${rubik.className} font-light`}>
                  ALX Graduate; Current UOpeople Student.
                </span>
              </li>
              <li
                className={`${poppins_regular.className} flex gap-2 items-center text-sm py-5 px-3 border-b border-[rgb(237_237_237_/_15%)]`}
              >
                <Image width={16} height={16} alt="grad" src="/grad.svg" />
                <span className={`${rubik.className} font-light`}>
                  Currently learning 3D development.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <a
              href="https://github.com/den-ii"
              className={`text-black flex items-center gap-2 bg-gray-50 py-2 px-4 rounded-lg text-sm ${rubik.className} mr-4 shadow-md`}
            >
              <Image
                width={16}
                height={16}
                alt="github"
                src="/github_black.svg"
              />
              <span className={`${rubik.className}`}>Github</span>
            </a>
            <div className="h-6 w-6 border-b border-r border-white ml-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
