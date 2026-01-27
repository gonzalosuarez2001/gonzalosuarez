import { useContext, useState, createContext, useEffect } from "react";

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollContextProvider({ children }) {
  const [home, setHome] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [stack, setStack] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState("home");

  function scrollToElement(ref) {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function handleScrollY() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const sections = [
      { name: "home", ref: home },
      { name: "experience", ref: experience },
      { name: "projects", ref: projects },
      { name: "certifications", ref: certifications },
      { name: "stack", ref: stack },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          if (sectionName) {
            setActiveSection(sectionName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      if (section.ref?.current) {
        section.ref.current.setAttribute("data-section", section.name);
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref?.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [home, experience, projects, certifications, stack]);

  return (
    <ScrollContext.Provider
      value={{
        screenWidth,
        scrollY,
        scrollToElement,
        home,
        setHome,
        experience,
        setExperience,
        projects,
        setProjects,
        certifications,
        setCertifications,
        stack,
        setStack,
        activeSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
