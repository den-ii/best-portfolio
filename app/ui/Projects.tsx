import React from "react";
import { rubik } from "./fonts";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AMPLIFY AI - FOUNDING FRONTEND ENGINEER",
    description: `Amplify AI is an AI-powered platform designed to help Shopify store owners easily generate and manage ad campaigns. I led frontend development, building approximately 97% of the application using Next.js, Zustand, React Query, and Tailwind CSS. Follow @useamplify_ai on Instagram for updates on the launch.`,
    techStack: ["react", "nextjs", "tailwind-css"],
    projectImage: "amplify_ai.png",
    projectLink: "https://useamplify.ai/",
  },
  {

    title: "PARCSYNC - SOFTWARE ENGINEER",
    description: `ParcSync is a collaborative platform that helps users find available parking spots in real time. Key features include live parking availability, navigation assistance, and EV charging support.
As a Software Engineer on the team, I was responsible for developing and maintaining 100% of both the mobile and backend applications — using React Native with Expo for the mobile app and Node.js for the backend.
The platform is launching soon.`,
    techStack: ["react", "nodejs", "expo", "supabase"],
    projectImage: "parcsync.png",
    // projectLink: "https://parcsync.com/",
  },
  {
   title: "INSEARCH.LINK - FRONTEND DEVELOPER",
   description: `Insearch.link is a platform that enable users share social media links and images. I worked on turning Figma designs into a responsive, SEO-friendly Vue.js application with Pinia for state management and Tailwind CSS for styling.`,
   techStack: ["vuejs", "tailwind-css"],
    projectImage: "insearch-link.png",
    projectLink: "https://insearch.link",
  },
    {
    title: "SWAPLY FINANCE - FOUNDING MOBILE ENGINEER",
    description: `As the Founding Mobile Engineer, I built 98% of the mobile app from the ground up using React Native. I worked closely with product and design to implement secure payments, real-time transaction tracking, and biometric authentication.`,
    techStack: ["react", "expo", ],
    techStackImages: ["react.svg", "expo.svg"],
    projectImage: "swaply.png",
    projectLink: "https://github.com/den-ii/swaply",
  },
  {
    title: "BURNER LIVE - MOBILE DEVELOPER",
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
    title: "LOVEME APP - FRONTEND INTERN",
    description: `Generating letters for loved ones, on different occasions. View dashboard for past letters, reuse letters,
      share letters.`,
    techStack: ["react", "python", "openai"],
    techStackImages: ["react.svg", "python.svg", "openai.svg"],
    projectImage: "loveme.jpg",
    projectLink: "https://love-me.app",
  },
  {
    title: "ANKARA WORLD CATALOGUE - FULLSTACK DEVELOPER",
    description: `Ankara products catalogue app, with a dashboard for admin to add, update, delete products. Users can view products and their prices`,
    techStack: ["typescript", "nextjs", "firebase"],
    projectImage: "ankaraworldcatalog.jpg",
    projectLink: "https://ankaraworldcatalog.netlify.app/",
  },
  {
    title: "ROLLA WAITLIST - FRONTEND ENGINEER",
    description: `Waitlist Page for future project, with analytics and user data collection integrated with firebase`,
    techStack: ["typescript", "nextjs", "firebase"],
    projectImage: "rolla.jpg",
    projectLink: "https://www.rollabiz.com/",
  },
  
  {
    title: "SACHET@DEVOS INC - FULLSTACK DEVELOPER",
    description: `Developed for Kaios devices`,
    techStack: ["javascript", "react", "kaios", "nodejs", "postgres", "aws"],
    projectImage: "sachet.jpg",
    projectLink: "https://github.com/den-ii/Sachet",
  },
  {
    title: "WEATHER DESKTOP APP@UOPEOPLE - STUDENT PROJECT",
    description: `A weather app created for desktop, with a search feature to get weather data for any city in the world`,
    techStack: ["java"],
    projectImage: "weather.jpg",
    projectLink: "https://github.com/den-ii/weather-information-app",
  },
  {
    title: "CHAT APP@UOPEOPLE - STUDENT PROJECT",
    description: `A chat-app app based on the server to connect to multiple clients, learnt about sockets in java`,
    techStack: ["java"],
    projectImage: "chatapp.jpg",
    projectLink: "https://github.com/den-ii/CS1103/tree/main/src/unit7",
  },
  {
    title: "EARTH@UOPEOPLE - STUDENT PROJECT",
    description: `A depiction of the moon revolving around the earth in the solar system using three.js`,
    techStack: ["javascript", "threejs"],
    projectImage: "earth.png",
    projectLink: "https://programming-assignment-unit6.netlify.app",
  },
  {
    title: "ESHOP - LEARNING PROJECT",
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
            target="_blank"
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
              <div style={{filter: 'grayscale(100%)', borderRadius: 8, }}>
                <Image
                  width={300}
                  height={300}
                  alt={project.projectLink || ""}
                  src={`/${project.projectImage}`}
                  className="rounded-md "
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
