import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = [
  {
    name: "light",
    bg: "bg-white",
    text: "text-blue-800",
    accent: "border-blue-400",
  },
  {
    name: "dark",
    bg: "bg-black",
    text: "text-green-400",
    accent: "border-green-500",
  },
  {
    name: "retro",
    bg: "bg-orange-100",
    text: "text-orange-900",
    accent: "border-orange-500",
  }
];

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setThemeIndex((prev) => (prev + 1) % themes.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <ThemeContext.Provider value={themes[themeIndex]}>
      {children}
    </ThemeContext.Provider>
  );
};
