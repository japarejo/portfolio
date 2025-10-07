import {
    SiCplusplus,    
    SiGithub, 
    SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiWebgl,
    SiZig,
    SiNodedotjs,
    SiJavascript,
    SiOpenai,    
    SiTypescript,    
    SiTailwindcss,
    SiFramer,    
    SiVercel
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 1,
        name: "Leia.ovh",
        description:
            "Learning Enabling Intelligent Assistants - Learn with AI not from it.",
        technologies: [SiNodedotjs, SiJavascript, SiOpenai],
        techNames: ["Node.js", "JavaScript", "OpenAI API"],
        techLinks: [
            "https://nodejs.org/",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://platform.openai.com/docs",
        ],
        github: "",
        demo: "https://www.leia.ovh/",
        image: "",
        available: true,
    },
    {
        id: 2,
        name: "pricing4SaaS",
        description:
            "Pricing plans support library for Sowftware as a Services applications. It  supports pricing-aware feature togglíng and pricing plan definition.",
        technologies: [SiNodedotjs,SiNodedotjs],
        techNames: ["Node.js","Java"],
        techLinks: [
            "https://www.oracle.com/java/",
            "https://nodejs.org/",
        ],
        github: "",
        demo: "https://dl.acm.org/doi/10.1007/978-3-031-62362-2_30",
        image: "",
        available: true,
    },
    {
        id: 3,
        name: "Sphere",
        description:
            "Plataform of pricind data collections management (with pricing plan analysis and integrated editor)",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://www.framer.com/motion/",
        ],
        github: "",
        demo: "https://sphere.score.us.es/",
        image: "",
        available: true,
    },
    {
        id: 4,
        name: "SPACE",
        description:
            "SPACE: platform for the management of subscriptions and pricing plans",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiGithub],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://www.framer.com/motion/",
            "https://github.com/",
        ],
        github: "https://github.com/Alex-GF/space-tutorial",
        demo: "https://github.com/Alex-GF/space-tutorial",
        image: "",
        available: true,
    },
];
