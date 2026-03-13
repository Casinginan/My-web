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

// ─── 3D Logo Header — fully inlined, zero external dependencies ───────────────
type LogoConfig = {
  gradient: string;
  shadow: string;
  icon: ReactNode;
};

const LOGO_CONFIGS: Record<string, LogoConfig> = {
  hims: {
    gradient: "linear-gradient(145deg, #1a7fcf, #0d5a9e)",
    shadow: "0 6px 0 0 #0a3d6b, 0 10px 24px rgba(13,90,158,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <rect x="8" y="6" width="24" height="28" rx="3" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
        <path d="M14 14h12M14 19h12M14 24h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="27" r="6" fill="#e74c3c"/>
        <path d="M26 27h4M28 25v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  "inventory-management": {
    gradient: "linear-gradient(145deg, #27ae60, #1a7a42)",
    shadow: "0 6px 0 0 #0e4d25, 0 10px 24px rgba(27,122,66,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <rect x="6" y="10" width="28" height="20" rx="3" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
        <path d="M12 18h6M12 22h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="22" y="15" width="8" height="10" rx="2" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1"/>
        <path d="M24 20h4M26 18v4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  pharmacare: {
    gradient: "linear-gradient(145deg, #8e44ad, #5e2d82)",
    shadow: "0 6px 0 0 #3b1a52, 0 10px 24px rgba(94,45,130,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <rect x="7" y="8" width="26" height="24" rx="3" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
        <path d="M13 16h6M13 20h14M13 24h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="29" cy="13" r="5" fill="#f39c12"/>
        <path d="M27 13l1.5 1.5L31 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  "basic-calculator": {
    gradient: "linear-gradient(145deg, #e67e22, #b85e0a)",
    shadow: "0 6px 0 0 #7a3e05, 0 10px 24px rgba(184,94,10,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <rect x="8" y="8" width="24" height="24" rx="4" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
        <path d="M14 20h12M20 14v12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="11" y="28" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="0.8"/>
      </svg>
    ),
  },
  codequest: {
    gradient: "linear-gradient(145deg, #e74c3c, #a93226)",
    shadow: "0 6px 0 0 #6e1f1a, 0 10px 24px rgba(169,50,38,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <polygon points="20,7 33,28 7,28" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="20" cy="22" r="3" fill="white"/>
        <path d="M20 14v5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="28" cy="32" r="4" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1"/>
        <path d="M27 32h2M28 31v2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  "my-portfolio": {
    gradient: "linear-gradient(145deg, #2c3e50, #1a252f)",
    shadow: "0 6px 0 0 #0b1117, 0 10px 24px rgba(26,37,47,0.45)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <rect x="6" y="9" width="28" height="18" rx="3" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5"/>
        <path d="M10 14h10M10 18h7M10 22h12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
        <rect x="20" y="12" width="10" height="10" rx="2" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1"/>
        <path d="M11 27l2 4M29 27l-2 4M9 31h22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
};

const ProjectHeader = ({
  projectId,
  title,
  tagline,
}: {
  projectId: string;
  title: string;
  tagline: string;
}) => {
  const cfg = LOGO_CONFIGS[projectId];
  if (!cfg) return null;
  return (
    <div className="flex flex-col items-center gap-3 mb-6 pt-2">
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 16,
          background: cfg.gradient,
          boxShadow: cfg.shadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        {cfg.icon}
      </div>
      <div className="text-center">
        <p className="font-mono text-xl font-semibold">{title}</p>
        <p className="font-mono text-sm text-muted-foreground mt-1">{tagline}</p>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

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
    src: `${BASE_PATH}/HIMS/billing.png`,
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
          <ProjectHeader
            projectId="hims"
            title="HIMS"
            tagline="Hospital Information Management System"
          />
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

          <TypographyH3 className="my-4 mt-8">Pharmacy Management</TypographyH3>
          <p className="font-mono mb-2">
          Registration and profile management system with prescription records, medication history tracking, insurance details, and emergency contacts.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/pharmadb.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Billing Management</TypographyH3>
          <p className="font-mono mb-2">
Intelligent billing management system with invoice generation, payment tracking, and insurance claim integration.          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/billing.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Electronic Medical Records (EMR)</TypographyH3>
          <p className="font-mono mb-2">
            Secure and organized digital storage of patient medical records.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HIMS/emr.png`,
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
          <ProjectHeader
            projectId="inventory-management"
            title="Inventory IMS"
            tagline="Stock & Purchase Order Management"
          />
          <TypographyP className="font-mono text-xl text-center mb-4">
            Robust Inventory Management with VB.NET and SQL Server
          </TypographyP>
          <TypographyP className="font-mono">
            A robust QCU Stall Inventory Management System developed using VB.NET and SQL Server.
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
              `${BASE_PATH}/IMS/IMS.png.jpg`,
              `${BASE_PATH}/IMS/inventory-management-system.png`,
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
          <ProjectHeader
            projectId="pharmacare"
            title="PharmaCare"
            tagline="Pharmacy & Prescription Management"
          />
          <TypographyP className="font-mono text-xl text-center mb-4">
            Full-featured Pharmacy Management with ASP.NET
          </TypographyP>
          <TypographyP className="font-mono">
            A full-featured pharmacy management system built with ASP.NET MVC and Entity Framework.
            Manages medicine inventory, prescription processing, expiry date tracking, supplier
            transactions, and sales reporting.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Sales Report and Analytics</TypographyH3>
          <p className="font-mono mb-2">
Generate detailed sales reports and analytics with trend tracking, revenue monitoring, and actionable insights.          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/PHARMACARE/Pharmacare.png`,
              
            ]}
          />

          <TypographyH3 className="my-4 mt-8">System Management</TypographyH3>
          <p className="font-mono mb-2">
Pharmacy system management with role-based access, inventory control, and settings administration.          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/PHARMACARE/PHARMACARE (2).png`,
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
    src: `${BASE_PATH}/BASICCALC/01.png`,
    screenshots: ["01.png", "02.png",],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.java],
    },
    get content() {
      return (
        <div>
          <ProjectHeader
            projectId="basic-calculator"
            title="Basic Calculator"
            tagline="Java Swing GUI Calculator App"
          />
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
              `${BASE_PATH}/BASICCALC/01.png`,
              `${BASE_PATH}/BASICCALC/02.png`,
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
          <ProjectHeader
            projectId="codequest"
            title="CodeQuest"
            tagline="Quest-Based Programming Learning Game"
          />
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
  
    // 06. My Portfolio
 {
    // 06. My Portfolio
    id: "my-portfolio",
    category: "Web Development",
    title: "My Portfolio",
    src: `${BASE_PATH}/myportfolio/landing.png`,
    screenshots: ["landing.png", "navbar.png", "skills.png", "Contact.png", "projects.png"],
    live: "https://github.com/Casinginan",
    github: "https://github.com/Casinginan",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.react],
      backend: [],
    },
    get content() {
      return (
        <div>
          <ProjectHeader
            projectId="my-portfolio"
            title="My Portfolio"
            tagline="Modern Next.js Developer Portfolio"
          />
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
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/navbar.png`,
              `${BASE_PATH}/myportfolio/skills.png`,
              `${BASE_PATH}/myportfolio/Contact.png`,
                            `${BASE_PATH}/myportfolio/projects.png`,

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