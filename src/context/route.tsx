import { createContext, useContext, useRef, type ReactNode, type RefObject } from "react";

type SectionsRefs = {
  home: RefObject<HTMLDivElement | null>;
  about: RefObject<HTMLDivElement | null>;
  projects: RefObject<HTMLDivElement | null>;
  contact: RefObject<HTMLDivElement | null>;
};

const SectionsContext = createContext<SectionsRefs | null>(null);

export function SectionsProvider({ children }: { children: ReactNode }) {
  const home     = useRef<HTMLDivElement | null>(null);
  const about    = useRef<HTMLDivElement | null>(null);
  const projects = useRef<HTMLDivElement | null>(null);
  const contact  = useRef<HTMLDivElement | null>(null);

  return (
    <SectionsContext.Provider value={{ home, about, projects, contact }}>
      {children}
    </SectionsContext.Provider>
  );
}


export function useSections() {
  const context = useContext(SectionsContext);
  if (!context) throw new Error("useSections must be used within SectionsProvider");
  return context;
}
