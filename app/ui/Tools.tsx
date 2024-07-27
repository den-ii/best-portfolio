import React from "react";
import { rubik } from "./fonts";
import Image from "next/image";

const tools = [
  "tailwind",
  "javascript",
  "typescript",
  "ruby",
  "java",
  "python",
  "react",
  "redux",
  "android",
  "ios",
  "nextjs",
  "nodejs",
  "rails",
  "firebase",
  "postgres",
  "aws",
  "github",
];

function Tools() {
  return (
    <div className="py-3">
      <h1
        className={`text-4xl xl:text-6xl ${rubik.className} font-medium px-14`}
      >
        Stack & Tools
      </h1>
      <div className="mt-5 sm:mt-7 lg:mt-14">
        <div className="flex flex-wrap mt-4 lg:mt-0 items-center justify-center">
          {tools.map((image, i) => {
            const zIndex = 50 - i * 10;
            let m = i > 0 ? "-ml-2" : "";
            return (
              <div
                key={i}
                className={`${m} bg-black w-[60px] h-[60px] flex items-center justify-center border border-gray-50 rounded-full`}
              >
                <Image
                  width={40}
                  height={40}
                  alt={image}
                  src={`/${image}.svg`}
                />
              </div>
            );
          })}
          {/* </div> */}
          {/* <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={60}
              height={60}
              alt="javascript"
              src="/javascript.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="javascript"
              src="/javascript.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="typescript"
              src="/typescript.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="typescript"
              src="/typescript.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="tailwind"
              src="/tailwind.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={70}
              height={70}
              alt="tailwind"
              src="/tailwind.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="react"
              src="/react.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="react"
              src="/react.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="next"
              src="/nextjs.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="next"
              src="/nextjs.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="nodejs"
              src="/nodejs.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="nodejs"
              src="/nodejs.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="ruby"
              src="/ruby.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="ruby"
              src="/ruby.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image width={70} height={70} alt="rails" src="/rails.svg" />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="java"
              src="/java.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="java"
              src="/java.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="python"
              src="/python.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="python"
              src="/python.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="github"
              src="/github.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="github"
              src="/github.svg"
              className="xl:hidden"
            />
          </div>
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
            <Image
              width={70}
              height={70}
              alt="aws"
              src="/aws.svg"
              className="hidden xl:inline-block"
            />
            <Image
              width={40}
              height={40}
              alt="aws"
              src="/aws.svg"
              className="xl:hidden"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Tools;
