"use client";
import { Fragment, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const { setActiveSection, timeOfLastCLick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastCLick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, i) => (
          <Fragment key={i}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
