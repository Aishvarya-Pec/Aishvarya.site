import { ReactNode } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
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
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
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
    skills: { frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind], backend: [] },
    live: "https://sen-tinal-malware-detection-app.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">AI-powered malware detection web app.</TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
  {
    id: "thor-ai-agent",
    category: "AI Agent",
    title: "Thor AI Agent",
    src: "/assets/projects-screenshots/thor.png",
    screenshots: ["thor.png"],
    skills: { frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind], backend: [] },
    live: "https://18ec7144.thor-ai-agent.pages.dev/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">Autonomous AI agent demo.</TypographyP>
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
    skills: { frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind], backend: [] },
    live: "https://split-set-go-rat1-qg4nfst6o-aishvarya-pecs-projects.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">Quick splitting utility web app.</TypographyP>
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
    skills: { frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind], backend: [] },
    live: "https://expense-ai-zy2n.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">Track expenses with AI assistance.</TypographyP>
          <VisitButton href={this.live} />
        </div>
      );
    },
  },
];

export default projects;
export { PROJECT_SKILLS };