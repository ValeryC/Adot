import { useState, useEffect, createContext, PropsWithChildren } from "react";

type Theme = "light" | "dark";
type DarkModeContextProps = {
  darkMode: Theme;
  darkStorage: string;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
);

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<Theme>("light");
  let darkStorage = JSON.parse(localStorage.getItem("dark") as string);

  const toggleDarkMode = () => {
    if ((darkStorage && darkMode) === "dark") {
      setDarkMode(darkMode === "light" ? "dark" : "light");
      localStorage.setItem("dark", JSON.stringify("light"));
    } else if ((darkStorage && darkMode) === "light") {
      setDarkMode(darkMode === "dark" ? "light" : "dark");
      localStorage.setItem("dark", JSON.stringify("dark"));
    }
  };

  const color = darkStorage === "light" ? "#333" : "#FFF";
  const backgroundColor = darkStorage === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  useEffect(() => {
    if (localStorage.getItem("dark") === null) {
      localStorage.setItem("dark", JSON.stringify("light"));
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkStorage, darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
