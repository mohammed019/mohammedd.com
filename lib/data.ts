import kurdestate from "@/public/kurdestate.png";
import e2 from "@/public/e2.png";
import brain from "@/public/brainPuzlle.png";

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
    imageUrl: kurdestate,
  },
  {
    title: "Ecommerce Frontend",
    description:
      "This project provides a simple yet effective frontend for an Ecommerce website. It allows users to browse products, add items to their cart, and experience smooth animations for a delightful shopping experience.",
    tags: ["React", "Tailwind"],
    imageUrl: e2,
  },
  {
    title: "Brain Puzzle",
    description: "Memory Game app using React JS & Tailwind CSS ",
    tags: ["React", "Tailwind"],
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
