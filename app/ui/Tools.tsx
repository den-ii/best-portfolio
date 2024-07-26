import React from "react";
import { rubik } from "./fonts";
import Image from "next/image";

function Tools() {
  return (
    <div className="py-3">
      <h1
        className={`text-4xl xl:text-6xl ${rubik.className} font-medium px-14`}
      >
        Tech
      </h1>
      <div className="mt-14">
        <div className="flex flex-wrap">
          <div className="flex items-center justify-center w-[20%] h-[150px] border-r-[2px] border-t-[2px] border-b-[2px] border-dashed border-[rgb(237_237_237_/_15%)]">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
