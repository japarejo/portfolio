import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiWebgl,
    SiZig,
    SiNodedotjs,
    SiJavascript,
    SiOpenai,
    SiJava,
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiGithub,
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
            "Plataforma experimental que combina Node.js con la API de OpenAI para generar respuestas inteligentes y personalizadas en tiempo real. Actúa como un laboratorio de integración entre modelos lingüísticos y aplicaciones web.",
        technologies: [SiNodedotjs, SiJavascript, SiOpenai],
        techNames: ["Node.js", "JavaScript", "OpenAI API"],
        techLinks: [
            "https://nodejs.org/",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://platform.openai.com/docs",
        ],
        github: null,
        demo: "https://leia.ovh/",
        image: "/projects/leia-ovh.png",
        available: true,
    },
    {
        id: 2,
        name: "pricing4SaaS",
        description:
            "Proyecto académico centrado en estrategias de fijación de precios para productos SaaS, desarrollado en Java y Node.js. Publicado en un capítulo de libro dentro de la serie Lecture Notes in Computer Science (Springer).",
        technologies: [SiJava, SiNodedotjs],
        techNames: ["Java", "Node.js"],
        techLinks: [
            "https://www.oracle.com/java/",
            "https://nodejs.org/",
        ],
        github: null,
        demo: "https://dl.acm.org/doi/10.1007/978-3-031-62362-2_30",
        image: "/projects/pricing4saas.png",
        available: true,
    },
    {
        id: 3,
        name: "Sphere Docs",
        description:
            "Plataform of pricind data collections management (with pricin plan analysis and integrated editor)",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://www.framer.com/motion/",
        ],
        github: null,
        demo: "https://sphere-docs.vercel.app/",
        image: "/projects/sphere-docs.png",
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
        image: "/projects/space.png",
        available: true,
    },
];
