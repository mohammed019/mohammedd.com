"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, i) => (
        <React.Fragment key={i}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
}

type IProject = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: IProject) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
      <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, i) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Projects I worked on"
        quality={90}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl "
      />
    </section>
  );
}
