import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import type { ISection } from "./types";

export const useSectionInView = (section: ISection, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastCLick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastCLick > 1000) {
      setActiveSection(section);
    }
  }, [inView, section, timeOfLastCLick, setActiveSection]);

  return { ref };
};
