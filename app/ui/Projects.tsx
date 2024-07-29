import React from "react";
import { rubik } from "./fonts";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "ROLLABIZ LLC - BURNER-LIVE MOBILE APP",
    description: `Burner shows you new releases from all the artists you like, in the order they came out. This way, you don't miss anything, and you stay up-to-date with all your favorite music on spotify.`,
    techStack: [
      "react",
      "ios",
      "android",
      "ruby",
      "rails",
      "nextjs",
      "postgres",
    ],
    projectImage: "burner.jpg",
    projectLink: "https://www.burner.live/",
  },
  {
    title: "HNG INTERNSHIP - LOVEME APP",
    description: `Generating letters for loved ones, on different occasssions. View dashboard for past letters, reuse letters, 
      share letters.`,
    techStack: ["react", "python", "openai"],
    techStackImages: ["react.svg", "python.svg", "openai.svg"],
    projectImage: "loveme.jpg",
    projectLink: "https://love-me.app",
  },
  {
    title: "PERSONAL - TASQUE APP",
    description: `Create, view and run errands based on your location. Get notifications for tasks due, and view completed tasks; upcoming.`,
    techStack: ["react", "ios", "android", "ruby", "rails", "postgres"],
    techStackImages: ["react.svg", "python.svg", "openai.svg"],
    projectImage: "tasque.jpg",
    projectLink: "https://github.com/den-ii/tasQue-api",
  },
  {
    title: "ANKARA WORLD - CATALOGUE APP",
    description: `Ankara products catalogue app, with a dashboard for admin to add, update, delete products. Users can view products and their prices`,
    techStack: ["typescript", "nextjs", "firebase"],
    projectImage: "ankaraworldcatalog.jpg",
    projectLink: "https://ankaraworldcatalog.netlify.app/",
  },
  {
    title: "ROLLABIZ LLC - ROLLA WAITLIST",
    description: `Waitlist Page for future project, with analytics and user data collection integrated with firebase`,
    techStack: ["typescript", "nextjs", "firebase"],
    projectImage: "rolla.jpg",
    projectLink: "https://www.rollabiz.com/",
  },
  {
    title: "DEVOS INC - MDM",
    description: `Mobile Device Management App for Kaios devices; incomplete`,
    techStack: ["typescript", "redux", "nextjs", "nodejs", "postgres", "aws"],
    projectImage: "mdm.jpg",
    projectLink: "https://pr-13.d3hn72cj9b8a8a.amplifyapp.com",
  },
  {
    title: "DEVOS INC - SACHET APP",
    description: `Developed for Kaios devices`,
    techStack: ["javascript", "react", "kaios", "nodejs", "postgres", "aws"],
    projectImage: "sachet.jpg",
    projectLink: "https://github.com/den-ii/Sachet",
  },
  {
    title: "UOPEOPLE - WEATHER DESKTOP APP",
    description: `A weather app created for desktop, with a search feature to get weather data for any city in the world`,
    techStack: ["java"],
    projectImage: "weather.jpg",
    projectLink: "https://github.com/den-ii/weather-information-app",
  },
  {
    title: "UOPEOPLE - CHAT APP",
    description: `A chat-app app based on the server to connect to multiple clients, learnt about sockets in java`,
    techStack: ["java"],
    projectImage: "chatapp.jpg",
    projectLink: "https://github.com/den-ii/CS1103/tree/main/src/unit7",
  },
  {
    title: "FREELANCE - ESHOP",
    description: `E-commerce website during training, with a dashboard for admin to add, update, delete products. Users can view products and their prices`,
    techStack: ["typescript", "sass", "nextjs", "firebase"],
    projectImage: "eshop.jpg",
    projectLink: "https://deni-eshop.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-14">
      <h1
        className={`text-lg sm:text-4xl xl:text-6xl ${rubik.className} font-medium`}
      >
        Projects & Collaborations
      </h1>
      <div className="mt-5 sm:mt-7 lg:mt-14">
        {projects.map((project, id) => (
          <a
            key={id}
            href={project.projectLink}
            className="block sm:flex items-center justify-between gap-3 border-b border-[rgb(237_237_237_/_15%)] py-10"
          >
            <div
              className={`text-sm sm:text-lg xl:text-[1.3rem] ${rubik.className} font-light lg:w-[50%]`}
            >
              <span className={`font-normal ${rubik.className}`}>
                {project.title}
              </span>{" "}
              <br /> {project.description}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <div className="flex mt-4 lg:mt-0 items-center">
                {project.techStack.map((image, i) => {
                  const zIndex = 50 - i * 10;
                  let m = i > 0 ? "-ml-2" : "";
                  return (
                    <div
                      key={`${id}${i}`}
                      className={`${m} bg-black w-[40px] h-[40px] flex items-center justify-center border border-gray-50 rounded-full`}
                    >
                      <Image
                        width={24}
                        height={24}
                        alt={image}
                        src={`/${image}.svg`}
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <Image
                  width={id === 2 ? 100 : 200}
                  height={200}
                  alt={project.projectLink}
                  src={`/${project.projectImage}`}
                  className="rounded-md"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
