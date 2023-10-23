"use client";

import Image from "next/image";
import React from "react";
import mohammed from "@/public/mohammed.png";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={mohammed}
              alt="Mohammed Jabbar"
              width="192"
              height="192"
              quality="95"
              property="true"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Mohammed</span> I'm a{" "}
          <span className="font-bold">a front-end developer</span> with{" "}
          <span className="font-bold">1 year</span> of experience. I focus on
          writing efficient code <span className="italic">for sites</span>.
          Using technologies like{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>
      </p>
    </section>
  );
};
