// thoda zada ts ho gya idhar
export enum SkillNames {
  AWS = "aws",
  // AZURE = "azure",    // +
  LINUX = "linux",    
  // SHELL = "shell",    // +
  // PYTHON = "python",  // +
  GIT = "git",
  DOCKER = "docker",
  // SELENIUM = "selenium",  // +
  // JENKINS = "jenkins",    // +
  // KUBERNETES = "kubernetes",  // +
  // ANSIBLE = "ansible",    // +
  // TERRAFORM = "terraform",  // +
  // PROMETHEUS = "prometheus",  // +
  // GRAFANA = "grafana",    // +
  // SONARQUBE = "sonarqube",  // +
  // OWASP = "owasp",    // +
  // TRIVY = "trivy",    // +
  // MAVEN = "maven",    // +
  // GO = "go",        // +
  HTML = "html",
  CSS = "css",
  JS = "js",
  // JAVA = "java",    // +
  POSTGRES = "postgres",
  TS = "ts",         //
  REACT = "react",   //
  VUE = "vue",       //
  NEXTJS = "nextjs", //
  TAILWIND = "tailwind",  //
  NODEJS = "nodejs",  //
  EXPRESS = "express",  // 
  MONGODB = "mongodb",  //
  GITHUB = "github",   //
  PRETTIER = "prettier",  //
  NPM = "npm",       //
  FIREBASE = "firebase",  //
  WORDPRESS = "wordpress",  //
  NGINX = "nginx",      //
  VIM = "vim",           //
  VERCEL = "vercel",    //
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Dropping JS magic into the screen since ’95! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Cousin of JS with Superpowers 🦹🏻‍♂️!",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The backbone of the web, bussin’ over the years. 🦴🌐",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "He can make it look good, tho! 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"Rocking this framework like a boss," 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Make it Vue! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "The drama queen of the web, next.js style! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Styling on point, tailwind no CAP!  🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Node.js: when JS said, ‘I got the server’ 🚀 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Middlewares flexing on Express, deadass! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Querying in style with Postgres, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Keepin' it easy with NoSQL development! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Protecting your code like a boss! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Don't forget to commit, push and pull! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "File manager? Nah. This is a package manager!📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Keep it lit, keep it firebase!🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "sudo apt install linux 😎🔥",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Yo Ho! Let's Go! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always over the top, no cap! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploy and touch some grass, dude! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
    [SkillNames.JAVA]: {
    id: 23,
    name: "java",
   label: "Java",
    shortDescription: "I hate this but imma add this anyways. ☕",
    color: "#e34c26",
 icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
};


// +
// export const SKILLS: Record<SkillNames, Skill> = {
//   [SkillNames.AWS]: {
//     id: 1,
//     name: "aws",
//     label: "AWS",
//     shortDescription: "Cloud magic 🪄 that makes deploying infra feel like playing The Sims but for servers. ☁️💻",
//     color: "#ff9900",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
//   },
//   [SkillNames.AZURE]: {
//     id: 2,
//     name: "azure",
//     label: "Azure",
//     shortDescription:
//       "Microsoft’s Hey, we do cloud too flex. 🌥️🔗",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
//   },
//   [SkillNames.LINUX]: {
//     id: 3,
//     name: "linux",
//     label: "LINUX",
//     shortDescription: "That OS which powers the internet but will make you feel like a hacker every time you use the terminal. 💻😎",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg",
//   },
//   [SkillNames.SHELL]: {
//     id: 4,
//     name: "shell",
//     label: "Shell Scripting",
//     shortDescription: "Automating boring stuff so you can sit back and sip chai ☕ while your scripts do the heavy lifting",
//     color: "#563d7c",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg",
//   },
//   [SkillNames.PYTHON]: {
//     id: 5,
//     name: "python",
//     label: "Python",
//     shortDescription: "The coding equivalent of 'It just works' — even when you barely know what you're doing. 🐍📜",
//     color: "#61dafb",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   },
//   [SkillNames.GIT]: {
//     id: 6,
//     name: "git",
//     label: "GIT",
//     shortDescription:
//       "Messing up your code? No worries, just 'commit' your sins and 'revert' like nothing happened. 😂🔧",
//     color: "#41b883",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   },
//   [SkillNames.DOCKER]: {
//     id: 7,
//     name: "docker",
//     label: "Docker",
//     shortDescription:
//       "Packing apps like Tupperware packs leftovers — neat, portable, and ready to reheat. 🐳📦",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
//   },
//   [SkillNames.SELENIUM]: {
//     id: 8,
//     name: "selenium",
//     label: "Selenium",
//     shortDescription: "Browser babysitting on steroids. Click-click-done! 🖱️🤖",
//     color: "#38bdf8",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
//   },
//   [SkillNames.JENKINS]: {
//     id: 9,
//     name: "jenkins",
//     label: "Jenkins",
//     shortDescription: "The 'butler' who builds and deploys your code but complains with every red build. 🤵🚦",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
//   },
//   [SkillNames.KUBERNETES]: {
//     id: 10,
//     name: "kubernetes",
//     label: "Kubernetes",
//     shortDescription: "Herding containers like a pro rancher. Yeehaw, pods! 🐂⛴️",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
//   },
//   [SkillNames.ANSIBLE]: {
//     id: 11,
//     name: "ansible",
//     label: "Ansible",
//     shortDescription: "Automation so simple even your non-techie friend would think it’s just magic. 🪄📜",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
//   },
//   [SkillNames.TERRAFORM]: {
//     id: 12,
//     name: "terraform",
//     label: "Terraform",
//     shortDescription: "Building cloud infra like playing Lego — but with code. 🧱🌍",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
//   },
//   [SkillNames.PROMETHEUS]: {
//     id: 13,
//     name: "prometheus",
//     label: "Prometheus",
//     shortDescription: "Your system’s stalker — knows all the CPU gossip. 📈👀",
//     color: "#f1502f",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
//   },
//   [SkillNames.GRAFANA]: {
//     id: 14,
//     name: "grafana",
//     label: "Grafana",
//     shortDescription: "Turning boring metrics into Pinterest-worthy dashboards. 📊✨",
//     color: "#000000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
//   },
//   [SkillNames.SONARQUBE]: {
//     id: 15,
//     name: "sonarqube",
//     label: "Sonarqube",
//     shortDescription: "The code snitch that tells you how bad you are at writing clean code. 🐠🤐",
//     color: "#f7b93a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
//   },
//   [SkillNames.OWASP]: {
//     id: 16,
//     name: "owasp",
//     label: "OWASP",
//     shortDescription: "Your checklist for keeping hackers from crashing your web party. 🕵️🔒",
//     color: "#fff",
//     icon: "assets/icons/owasp-svgrepo-com.svg",
//   },
//   [SkillNames.TRIVY]: {
//     id: 17,
//     name: "trivy",
//     label: "Trivy",
//     shortDescription:
//       "Scans your containers for vulnerabilities like your mom checks your room for mess. 🚨🔍",
//     color: "#ffca28",
//     icon: "https://logo.svgcdn.com/s/trivy-dark.svg",
//   },
//   [SkillNames.MAVEN]: {
//     id: 18,
//     name: "maven",
//     label: "Maven",
//     shortDescription: "The build tool that's also really into managing dependencies. 📚🔧",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
//   },
//   [SkillNames.GO]: {
//     id: 19,
//     name: "go",
//     label: "GO",
//     shortDescription: "Fast, minimal, and powerful — basically the 'straight-A student' of programming. 🏃‍♂️💻",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
//   },
//   [SkillNames.HTML]: {
//     id: 20,
//     name: "html",
//     label: "HTML",
//     shortDescription: "The bones of every website — no frills, just structure. 🦴🌐",
//     color: "#2496ed",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   },
//   [SkillNames.CSS]: {
//     id: 21,
//     name: "nginx",
//     label: "NginX",
//     shortDescription: "Because no one likes plain — add some drip to your HTML. 🎨✨",
//     color: "#008000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   },
//   [SkillNames.JS]: {
//     id: 22,
//     name: "javascript",
//     label: "JavaScript",
//     shortDescription:
//       "Making your websites less boring and more 'click here to know your future.' 🖱️🪄",
//     color: "#ff9900",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   },
//   [SkillNames.JAVA]: {
//     id: 23,
//     name: "java",
//     label: "Java",
//     shortDescription: "The OG workhorse that still runs a zillion enterprise apps — slow but steady. 🏋️‍♂️☕",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
//   },
//   [SkillNames.POSTGRES]: {
//     id: 24,
//     name: "postgres",
//     label: "Postgres",
//     shortDescription:
//       "Data’s personal diary — secure, organized, and occasionally moody with your queries. 📔🛠️",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//   },
// };

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

