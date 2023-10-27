"use client";

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import type { ISection } from "@/lib/types";

type IActiveSectionType = {
  activeSection: ISection;
  setActiveSection: Dispatch<React.SetStateAction<ISection>>;
  timeOfLastCLick: number;
  setTimeOfLastClick: Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<IActiveSectionType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ISection>("Home");
  const [timeOfLastCLick, setTimeOfLastClick] = useState<number>(0); // we need to keep track of this to disabled the observer when user click on link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        timeOfLastCLick,
        setActiveSection,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("Error");
  }
  return context;
}
