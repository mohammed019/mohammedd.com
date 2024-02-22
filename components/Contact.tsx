"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <motion.section
      id="contact"
      ref={ref}
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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:mohammedjabbar019@gmail.com"
          target="_blank"
        >
          mohammedjabbar019@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const name = formData.get("name");
          const sender = formData.get("sender");
          const message = formData.get("message");

          const response = await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ name, sender, message }),
          });

          const data = await response.json();

          if (data?.error) {
            toast.error(data?.error);
            return;
          } else {
            toast.success("Email sent successfully!");
          }
        }}
      >
        <input
          className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none focus:outline-black/30 dark:bg-white/80 dark:focus:bg-white transition-all"
          type="text"
          name="name"
          required
          maxLength={500}
          placeholder="Your Name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-none focus:outline-black/30 dark:bg-white/80 dark:focus:bg-white transition-all"
          type="email"
          name="sender"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded borderBlack p-4 outline-none focus:outline-black/30 dark:bg-white/80 dark:focus:bg-white transition-all"
          required
          name="message"
          maxLength={5000}
          placeholder="Your Message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
