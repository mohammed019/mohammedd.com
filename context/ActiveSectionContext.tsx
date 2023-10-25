"use client";

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { links } from "@/lib/data";

type ISection = (typeof links)[number]["name"];

type IActiveSectionType = {
  activeSection: ISection;
  setActiveSection: Dispatch<React.SetStateAction<ISection>>;
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

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
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
