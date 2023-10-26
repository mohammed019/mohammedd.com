"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Home", 0.3);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-16 scroll-mt-28 w-[min(%100,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:mohammedjabbar019@gmail"
          target="_blank"
        >
          mohammedjabbar019@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-none focus:outline-black/30"
          type="email"
          name="sender"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded borderBlack p-4 outline-none focus:outline-black/30"
          required
          name="message"
          maxLength={5000}
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
