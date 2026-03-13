"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "jercasinginan@gmail.com",
    href: "mailto:jercasinginan@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
  {
    name: "Phone",
    content: "09501515628",
    href: "tel:09501515628",
    icon: <FaPhone size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/je-r-casinginan-48b238391/",
    content: "/je-r-casinginan",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Casinginan",
    content: "/Casinginan",
    icon: <FaGithub size={20} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={30} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={30} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "HTML5 markup language",
    icon: <FaHtml5 size={30} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "CSS3 styling language",
    icon: <FaCss3 size={30} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Node.js",
    content: "Node.js runtime environment",
    icon: <FaNodeJs size={30} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "React UI library",
    icon: <FaReact size={30} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Docker containerization",
    icon: <FaDocker size={30} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "Nginx web server",
    icon: <DiNginx size={30} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "Vue.js framework",
    icon: <FaVuejs size={30} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Express.js framework",
    icon: <SiExpress size={30} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "PostgreSQL database",
    icon: <DiPostgresql size={30} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "MongoDB database",
    icon: <DiMongodb size={30} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Tailwind CSS framework",
    icon: <RiTailwindCssFill size={30} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Firebase platform",
    icon: <RiFirebaseFill size={30} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Git version control",
    icon: <FaGit size={30} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "GitHub platform",
    icon: <FaGithub size={30} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Visual Studio Code",
    icon: <SiVisualstudiocode size={30} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Prettier",
    content: "Prettier code formatter",
    icon: <SiPrettier size={30} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Node Package Manager",
    icon: <DiNpm size={30} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Vercel",
    content: "Vercel hosting platform",
    icon: <SiVercel size={30} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Linux operating system",
    icon: <FaLinux size={30} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "Kubuntu Linux distribution",
    icon: <SiKubuntu size={30} color="#0077C4" />,
    color: "#0077C4",
  },
  {
    name: "Terminal",
    content: "Command line interface",
    icon: <TbTerminal2 size={30} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Amazon Web Services",
    icon: <FaAws size={30} color="#FF9900" />,
    color: "#FF9900",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Je-r Casinginan"
                  src="../assets/JEEEEEEEEE.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-4 md:ml-10 lg:ml-0">
                <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Je-r!
                </p>
                <div className="text-xs bg-zinc-800/80 w-fit px-4 py-2 rounded-full border border-zinc-700">
                  CyberSavvy | 3D Enthusiast
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-700" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-4 gap-4 w-full h-14 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 border rounded-xl transition-all duration-300 group"
                      href={link.href}
                      target={link.name === "Email" || link.name === "Phone" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 text-zinc-400 group-hover:text-white transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm font-medium">{link.name}</div>
                        <div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        
        <main className="lg:basis-3/4">
          <div
            className="p-6 md:p-8 lg:p-10 border rounded-2xl border-zinc-700 bg-zinc-900/30"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p className="text-base md:text-lg">
                Hey there! I&apos;m <span className="text-blue-400 font-semibold">Je-r!</span> a passionate 3D enthusiast dedicated to creating immersive and interactive digital experiences that push creative boundaries.
              </p>
              
              <p className="text-base md:text-lg">
                I specialize in designing dynamic visuals, building engaging web projects, and transforming creative ideas into reality. With a keen eye for detail, a problem-solving mindset, and a collaborative approach, I&apos;m driven to continuously improve and deliver impactful results that resonate with users.
              </p>
              
              <p className="text-base md:text-lg">
                When I&apos;m not building 3D experiences, you can find me exploring emerging technologies, experimenting with creative concepts, or sipping coffee while brainstorming my next immersive project. I believe in the power of technology to tell stories and create meaningful connections.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl mt-12 mb-6 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tools & Technologies
            </h2>
            
            <div className="space-y-4">
              {!toolsLoaded ? (
                <div className="h-[100px] flex items-center justify-center">
                  <div className="animate-pulse text-zinc-500">Loading tools...</div>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <Splide
                      options={{
                        type: "loop",
                        interval: 2500,
                        autoplay: true,
                        pagination: false,
                        speed: 2000,
                        perPage: 6,
                        perMove: 1,
                        breakpoints: {
                          768: { perPage: 4 },
                          640: { perPage: 3 },
                        },
                        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                        arrows: false,
                      }}
                      aria-label="Tools carousel"
                    >
                      {TOOLS.slice().reverse().map((tool) => (
                        <SplideSlide key={`${tool.name}-reverse`}>
                          <div className="w-fit p-3 border border-zinc-700 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all duration-300 group">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                              {tool.icon}
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>

                  <div>
                    <Splide
                      options={{
                        type: "loop",
                        interval: 2500,
                        autoplay: true,
                        pagination: false,
                        speed: 2500,
                        perPage: 6,
                        perMove: 1,
                        breakpoints: {
                          768: { perPage: 4 },
                          640: { perPage: 3 },
                        },
                        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                        arrows: false,
                      }}
                      aria-label="Tools carousel reverse"
                    >
                      {TOOLS.map((tool) => (
                        <SplideSlide key={tool.name}>
                          <div className="w-fit p-3 border border-zinc-700 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all duration-300 group">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                              {tool.icon}
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Contact Section */}
      <div className="block lg:hidden mt-8">
        <div
          className="p-6 rounded-2xl border border-zinc-700 bg-zinc-900/30"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <ul className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  className="flex items-center px-4 gap-4 w-full h-14 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 border rounded-xl transition-all duration-300 group"
                  href={link.href}
                  target={link.name === "Email" || link.name === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <div className="w-8 text-zinc-400 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-medium">{link.name}</div>
                    <div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {link.content}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;