import { useState, createContext, PropsWithChildren } from "react";

type Theme = "light" | "dark";
type DarkModeContextProps = { darkMode: Theme; toggleDarkMode: () => void };

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
);

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<Theme>("light");

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  const color = darkMode === "light" ? "#333" : "#FFF";
  const backgroundColor = darkMode === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};