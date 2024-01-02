import kurdestate from "@/public/kurdestate.png";
import e2 from "@/public/e2.png";
import brain from "@/public/brainPuzlle.png";
import kurdlex from "@/public/kurdlex.png";

export const links = [
  // we map into this to navbar items
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Kurdestate",
    description:
      "Kurd Estate simplifies the process of buying or renting properties. Sellers can easily list their properties, and potential buyers can browse through a diverse range of listings.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://kurdestate.mohammedd.com",
    imageUrl: kurdestate,
  },
  {
    title: "Kurdlex",
    description:
      "It's a powerful learning tool designed specifically for Kurdish speakers striving to conquer the English language. Forget dry definitions and boring examples; KurdLex brings each word to life.",
    tags: ["React", "Next.js", "Tailwind"],
    link: "https://kurdlex.mohammedd.com",
    imageUrl: kurdlex,
  },
  {
    title: "Ecommerce Frontend",
    description:
      "This project provides a simple yet effective frontend for an Ecommerce website. It allows users to browse products, add items to their cart, and experience smooth animations for a delightful shopping experience.",
    tags: ["React", "Tailwind"],
    link: "https://e2.mohammedd.com",
    imageUrl: e2,
  },
  {
    title: "Brain Puzzle",
    description: "Memory Game app using React JS & Tailwind CSS ",
    tags: ["React", "Tailwind"],
    link: "https://puzzle.mohammedd.com",
    imageUrl: brain,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;
