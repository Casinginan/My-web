import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiMicrosoftsqlserver,
  SiDotnet,
  SiSpring,
  SiMysql,
  SiGodotengine,
  SiCsharp,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Project
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: <span>GSAP</span>,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" className="w-4 h-4" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/icons8-java.svg" alt="Java" className="w-4 h-4" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  sqlserver: {
    title: "SQL Server",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftsqlserver />,
  },
  dotnet: {
    title: ".NET",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  aspnet: {
    title: "ASP.NET",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  vbnet: {
    title: "VB.NET",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  spring: {
    title: "Spring",
    bg: "black",
    fg: "white",
    icon: <SiSpring />,
  },
  godot: {
    title: "Godot Engine",
    bg: "black",
    fg: "white",
    icon: <SiGodotengine />,
  },
  csharp: {
    title: "C#",
    bg: "black",
    fg: "white",
    icon: <SiCsharp />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    // 01. HIMS - Hospital Information Management System
    id: "hims",
    category: "Healthcare System",
    title: "HIMS - Hospital Information Management System",
    src: `${BASE_PATH}/HIMS/hims.png`,
    screenshots: ["hims.png", "HIMS (2).png", "HIMS3.png", "himsss.png", "himsssss.png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Comprehensive Hospital Information Management System
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive Hospital Information Management System built with JavaScript.
            Features patient registration, appointment scheduling, electronic medical records (EMR),
            billing system, pharmacy management, and laboratory integration. Includes role-based
            access control for doctors, nurses, administrators, and patients. Streamlines healthcare
            operations and improves patient care delivery.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Patient Management</TypographyH3>
          <p className="font-mono mb-2">
            Complete patient registration and profile management with medical history tracking,
            insurance information, and emergency contacts.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/hims.png`,
              `${BASE_PATH}/HIMS/HIMS (2).png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Appointment Scheduling</TypographyH3>
          <p className="font-mono mb-2">
            Intelligent appointment scheduling system with calendar integration and doctor availability tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/HIMS3.png`,
              `${BASE_PATH}/HIMS/himsss.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Electronic Medical Records (EMR)</TypographyH3>
          <p className="font-mono mb-2">
            Secure and organized digital storage of patient medical records.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/himsssss.png`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> JavaScript, Node.js, Express, MySQL, HTML5, CSS3, Bootstrap
          </p>
        </div>
      );
    },
  },
  {
    // 02. Inventory Management System (VB.NET)
    id: "inventory-management",
    category: "Business Management",
    title: "Inventory Management System",
    src: `${BASE_PATH}/IMS/IMS.png`,
    screenshots: ["IMS.png", "IVENTORY.png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.vbnet],
      backend: [PROJECT_SKILLS.sqlserver, PROJECT_SKILLS.dotnet],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Robust Inventory Management with VB.NET and SQL Server
          </TypographyP>
          <TypographyP className="font-mono">
            A robust Inventory Management System developed using VB.NET and SQL Server.
            Features include real-time stock tracking, purchase order management, supplier management,
            barcode scanning integration, automated reordering alerts, and comprehensive reporting tools.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Real-time Stock Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Monitor inventory levels in real-time with automatic updates on stock movements.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/IMS/IMS.png`,
              `${BASE_PATH}/IMS/IVENTORY.png`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> VB.NET, SQL Server, .NET Framework, Crystal Reports
          </p>
        </div>
      );
    },
  },
  {
    // 03. PharmaCare - Pharmacy Management System (ASP.NET)
    id: "pharmacare",
    category: "Pharmacy Management",
    title: "PharmaCare - Pharmacy Management System",
    src: `${BASE_PATH}/PHARMACARE/Pharmacare.png`,
    screenshots: ["Pharmacare.png", "PHARMACARE (2).png", "PHARMACARE (4).png", "PHARMACARE (5).png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.aspnet, PROJECT_SKILLS.sqlserver, PROJECT_SKILLS.dotnet],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Full-featured Pharmacy Management with ASP.NET
          </TypographyP>
          <TypographyP className="font-mono">
            A full-featured pharmacy management system built with ASP.NET MVC and Entity Framework.
            Manages medicine inventory, prescription processing, expiry date tracking, supplier
            transactions, and sales reporting.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Medicine Inventory Management</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive medicine inventory with batch tracking and expiry date monitoring.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/PHARMACARE/Pharmacare.png`,
              `${BASE_PATH}/PHARMACARE/PHARMACARE (2).png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Prescription & Sales Management</TypographyH3>
          <p className="font-mono mb-2">
            Digital prescription management with insurance integration and loyalty program.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/PHARMACARE/PHARMACARE (4).png`,
              `${BASE_PATH}/PHARMACARE/PHARMACARE (5).png`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> ASP.NET MVC, C#, Entity Framework, SQL Server, Bootstrap
          </p>
        </div>
      );
    },
  },
  {
    // 04. Basic Calculator (Java)
    id: "basic-calculator",
    category: "Desktop Application",
    title: "Basic Calculator",
    src: `${BASE_PATH}/BASICCALC/01.jpeg`,
    screenshots: ["01.jpeg", "02.jpg", "03.png", "04.jpg"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.java],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Simple Calculator Application in Java
          </TypographyP>
          <TypographyP className="font-mono">
            A simple yet elegant calculator application developed in Java with Swing GUI.
            Performs basic arithmetic operations including addition, subtraction, multiplication,
            and division. Features a clean user interface, keyboard support, and memory functions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Calculator UI & Operations</TypographyH3>
          <p className="font-mono mb-2">
            Intuitive layout with clear display. Handles decimal numbers, negatives, and division by zero.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/BASICCALC/01.jpeg`,
              `${BASE_PATH}/BASICCALC/02.jpg`,
              `${BASE_PATH}/BASICCALC/03.png`,
              `${BASE_PATH}/BASICCALC/04.jpg`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> Java, Swing, AWT
          </p>
        </div>
      );
    },
  },
  {
    // 05. CodeQuest
    id: "codequest",
    category: "Educational Game",
    title: "CodeQuest",
    src: `${BASE_PATH}/CODEQUEST/CODEQUEST.png`,
    screenshots: ["CODEQUEST.png", "CODE.png", "codey.png", "QUEST.png", "QUEST (2).png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.godot, PROJECT_SKILLS.csharp],
      backend: [PROJECT_SKILLS.csharp, PROJECT_SKILLS.dotnet, PROJECT_SKILLS.sqlserver],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Educational Game That Makes Learning Programming Fun
          </TypographyP>
          <TypographyP className="font-mono">
            CodeQuest is an educational game developed with the Godot Engine and C# backend.
            It motivates students to enjoy programming through interactive gameplay, coding challenges,
            and quest-based learning.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Quest-Based Learning</TypographyH3>
          <p className="font-mono mb-2">
            Players embark on coding quests that teach programming concepts progressively.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/CODEQUEST/CODEQUEST.png`,
              `${BASE_PATH}/CODEQUEST/CODE.png`,
              `${BASE_PATH}/CODEQUEST/codey.png`,
              `${BASE_PATH}/CODEQUEST/QUEST.png`,
              `${BASE_PATH}/CODEQUEST/QUEST (2).png`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> Godot Engine, C#, .NET Core, SQL Server
          </p>
        </div>
      );
    },
  },
  {
    // 06. My Portfolio
    id: "my-portfolio",
    category: "Web Development",
    title: "My Portfolio",
    src: `${BASE_PATH}/portfolio/landing.png`,
    screenshots: ["landing.png", "navbar.png", "projects.png", "project.png", "skills.png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.react],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Modern Portfolio Website
          </TypographyP>
          <TypographyP className="font-mono">
            A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.
            Showcases projects, skills, and experience with a modern, responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Design & Features</TypographyH3>
          <p className="font-mono mb-2">
            Fully responsive with smooth animations, dark mode, and dynamic project galleries.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/navbar.png`,
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />

          <p className="font-mono mt-4">
            <strong>Technologies:</strong> Next.js, TypeScript, Tailwind CSS, ShadCN UI, Framer Motion
          </p>
        </div>
      );
    },
  },
];

export default projects;