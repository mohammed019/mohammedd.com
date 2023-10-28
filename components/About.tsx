"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="sm:mb-16 scroll-mt-28 max-w-[45rem] text-center leading-8"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        Hello, I'm <span className="font-semibold">Mohammed</span>, a passionate
        and skilled web developer residing in Erbil, Iraq. At just 19 years old,
        I bring a wealth of expertise in{" "}
        <span className="font-semibold">IT support and Web development</span> to
        the table. My technical arsenal includes React, Next.js, Tailwind CSS,
        Bootstrap, and MongoDB. I'm also well-versed in TypeScript, Prisma, Git,
        and Framer Motion. As a Linux enthusiast, I've honed my{" "}
        <span className="underline">problem-solving</span> abilities and
        collaborated effectively within teams. Alongside my development skills,
        I possess a flair for basic{" "}
        <span className="italic">photo editing and design tasks</span>.
        Proficient in Microsoft Word and Excel.
      </p>

      <p>
        I approach every task with enthusiasm and a determination to learn.
        Eager to expand my horizons, I am a dedicated professional ready to
        contribute and create in{" "}
        <span className="italic font-semibold">the world of technology</span>.
      </p>
    </motion.section>
  );
}
