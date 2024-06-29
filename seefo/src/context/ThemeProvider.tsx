"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface themeProviderProps {
  children: ReactNode;
}
interface themeProviderContextTypes {
  mode: boolean;
  toggleMode: () => void;
}

const ThemeProviderContext = createContext<
  themeProviderContextTypes | undefined
>(undefined);
const ThemeProvider = ({ children }: themeProviderProps) => {
  const [mode, setMode] = useState<boolean>(false);

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
    localStorage.setItem("theme", `${!mode}`);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
      setMode(true);
      document.body.classList.add("dark");
    } else {
      setMode(false);
      document.body.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProviderContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

const useThemeMode = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useThemeBorder must be used within an ThemeProvider");
  }
  return context;
};
export { useThemeMode };
export default ThemeProvider;
