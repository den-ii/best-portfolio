"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { poppins_bold, rubik } from "./fonts";

function Navbar() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    setDate(`${month.toUpperCase()} ${year}, LAGOS`);
  }, []);

  return (
    <nav className="flex sticky h-[50px] sm:h-[80px] top-0 bg-black justify-between items-center px-4 sm:px-7 lg:px-14 py-5 border-b border-[rgb(237_237_237_/_15%)]">
      <div className="hidden sm:block text-[#A1A1A1] text-sm">{date}</div>
      <div className="flex items-start gap-1">
        <span
          className={`text-gray-50 text-lg sm:text-2xl font-semibold ${rubik.className}`}
        >
          TribalDeni
        </span>
        <span
          className={`border border-gray-[#A1A1A1] rounded-md w-[28px] h-[20px] flex items-center justify-center 
        text-[0.5rem] font-semibold text-gray-50 ${rubik.className}`}
        >
          TECH
        </span>
      </div>
      <div className="hidden sm:flex gap-3 items-center">
        <a href="#home" className={`text-sm ${rubik.className} `}>
          HOME
        </a>
        <a href="#projects" className={`text-sm ${rubik.className}`}>
          PROJECTS
        </a>
        <a
          href="https://github.com/den-ii"
          className={`text-sm ${rubik.className} `}
        >
          GITHUB
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
