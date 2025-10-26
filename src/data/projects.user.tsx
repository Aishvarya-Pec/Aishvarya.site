import { ReactNode } from "react";
import { RiNextjsFill, RiBarChart2Line, RiPulseLine, RiShapesLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiReact,
  SiVite,
  SiTypescript,
  SiPython,
  SiDocker,
  SiFastapi,
  SiVercel,
  SiPostcss,
  SiReactrouter,
  SiClerk,
  SiPrisma,
  SiPostgresql,
  SiStreamlit,
} from "react-icons/si";
import { Flame, Network, FileText, Lock, LayoutGrid, BadgeCheck, Sparkles, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypographyP } from "@/components/ui/typography";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  tailwind: { title: "Tailwind CSS", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  react: { title: "React", bg: "black", fg: "white", icon: <SiReact /> },
  vite: { title: "Vite", bg: "black", fg: "white", icon: <SiVite /> },
  typescript: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
  vercel: { title: "Vercel", bg: "black", fg: "white", icon: <SiVercel /> },
  postcss: { title: "PostCSS", bg: "black", fg: "white", icon: <SiPostcss /> },
  autoprefixer: { title: "Autoprefixer", bg: "black", fg: "white", icon: <BadgeCheck /> },
  shadcn: { title: "shadcn/ui", bg: "black", fg: "white", icon: <LayoutGrid /> },
  radix: { title: "Radix UI", bg: "black", fg: "white", icon: <RiShapesLine /> },
  reactRouter: { title: "React Router", bg: "black", fg: "white", icon: <SiReactrouter /> },
  clerk: { title: "Clerk", bg: "black", fg: "white", icon: <SiClerk /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <RiPulseLine /> },
  recharts: { title: "Recharts", bg: "black", fg: "white", icon: <RiBarChart2Line /> },
  lucide: { title: "Lucide React", bg: "black", fg: "white", icon: <Palette /> },
  hotToast: { title: "React Hot Toast", bg: "black", fg: "white", icon: <Flame /> },
  fireworks: { title: "Fireworks AI", bg: "black", fg: "white", icon: <Sparkles /> },
  openrouter: { title: "OpenRouter", bg: "black", fg: "white", icon: <Network /> },
  streamlit: { title: "Streamlit", bg: "black", fg: "white", icon: <SiStreamlit /> },
  pypdf2: { title: "PyPDF2", bg: "black", fg: "white", icon: <FileText /> },
  reportlab: { title: "reportlab", bg: "black", fg: "white", icon: <FileText /> },
  pdfplumber: { title: "pdfplumber", bg: "black", fg: "white", icon: <FileText /> },
  dotenv: { title: "python-dotenv", bg: "black", fg: "white", icon: <Lock /> },
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

const VisitButton = ({ href }: { href: string }) => (
  <Link className="font-mono underline flex gap-2 my-3 mb-8" rel="noopener" target="_new" href={href}>
    <Button variant={"default"} size={"sm"}>
      Visit Website
    </Button>
  </Link>
);

const projects: Project[] = [
  {
    id: "sentinal-malware",
    category: "Web App",
    title: "Sentinal Malware Detection",
    src: "/assets/projects-screenshots/sentinal.png",
    screenshots: ["sentinal.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://sen-tinal-malware-detection-app.vercel.app/",
    github: "https://github.com/Aishvarya-Pec/SenTinal-Malware-Detection-App",
    get content() {
      return (
        <div className="font-mono">
          <TypographyP>
            A Malware Detection Web Application built with React + Tailwind, Vite and
            TypeScript and for backend FastAPI and Docker.
          </TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
  {
    id: "codesaviour",
    category: "AI Tools",
    title: "CodeSaviour - Code Fixing App",
    src: "/assets/projects-screenshots/code.png",
    screenshots: ["code.png"],
    skills: {
      frontend: [PROJECT_SKILLS.vercel],
      backend: [PROJECT_SKILLS.fireworks, PROJECT_SKILLS.openrouter, PROJECT_SKILLS.python],
    },
    live: "https://codesaviour2.vercel.app/",
    github: "https://github.com/Aishvarya-Pec/CodeSaviour-2.0",
    get content() {
      return (
        <div className="font-mono">
          <TypographyP>
            CodeSaviour is a sophisticated AI-driven agent that repairs broken code, aligns
            projects with documentation, and outputs both updated files and a concise
            summary. Built with Fireworks.ai models, OpenRouter, and Python.
          </TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
  {
    id: "split-set-go",
    category: "Utility",
    title: "Split Set Go",
    src: "/assets/projects-screenshots/splitsetgo.png",
    screenshots: ["splitsetgo.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.postcss,
        PROJECT_SKILLS.autoprefixer,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.radix,
        PROJECT_SKILLS.reactRouter,
        PROJECT_SKILLS.clerk,
      ],
      backend: [PROJECT_SKILLS.prisma, PROJECT_SKILLS.postgres],
    },
    live: "https://split-set-go-rat1-qg4nfst6o-aishvarya-pecs-projects.vercel.app/",
    github: "https://github.com/Aishvarya-Pec/SplitSetGo",
    get content() {
      return (
        <div className="font-mono">
          <TypographyP>
            A utility application to split expenses among groups, built with React,
            TypeScript, Vite, TailwindCSS, shadcn/ui, Radix UI, and Clerk. Backend uses
            Prisma + PostgreSQL.
          </TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
  {
    id: "expense-ai",
    category: "Finance",
    title: "Expense AI",
    src: "/assets/projects-screenshots/expense.png",
    screenshots: ["expense.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.recharts,
        PROJECT_SKILLS.clerk,
        PROJECT_SKILLS.lucide,
        PROJECT_SKILLS.hotToast,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.vercel,
      ],
      backend: [],
    },
    live: "https://expense-ai-zy2n.vercel.app/",
    github: "https://github.com/Aishvarya-Pec/ExpenseAI",
    get content() {
      return (
        <div className="font-mono">
          <TypographyP>
            A financial dashboard with animated charts and delightful toasts, using React,
            TypeScript, TailwindCSS, Framer Motion, Recharts, Clerk, Lucide icons, and
            React Hot Toast.
          </TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
  {
    id: "braindrain-ai",
    category: "AI Study Assistant",
    title: "BrainDrainAI - AI Study Assistant",
    src: "/assets/projects-screenshots/brain.png",
    screenshots: ["brain.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fireworks,
        PROJECT_SKILLS.dotenv,
        PROJECT_SKILLS.pypdf2,
        PROJECT_SKILLS.reportlab,
        PROJECT_SKILLS.pdfplumber,
      ],
    },
    live: "https://braindrainai.streamlit.app/",
    github: "https://github.com/Aishvarya-Pec/BrainDrainAI",
    get content() {
      return (
        <div className="font-mono">
          <TypographyP>
            A Streamlit-powered study assistant that processes PDFs with PyPDF2, ReportLab,
            and pdfplumber. Backend orchestrates Fireworks.ai models with python-dotenv for
            secure config.
          </TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
];

export default projects;
export { PROJECT_SKILLS };