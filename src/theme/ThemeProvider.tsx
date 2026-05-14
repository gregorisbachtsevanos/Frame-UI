import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FC,
  type ReactNode
} from "react";
import clsx from "clsx";
import { darkTheme, lightTheme, themeRoot } from "./theme.css";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  mode?: ThemeMode;
}

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const detectSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  mode = "system",
  className,
  style
}) => {
  const [selectedMode, setSelectedMode] = useState<ThemeMode>(mode);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(detectSystemTheme);

  useEffect(() => {
    setSelectedMode(mode);
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");

    onChange();

    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  const resolvedTheme: ResolvedTheme =
    selectedMode === "system" ? systemTheme : selectedMode;

  const toggleTheme = useCallback(() => {
    setSelectedMode((current) => {
      if (current === "system") {
        return systemTheme === "dark" ? "light" : "dark";
      }

      return current === "dark" ? "light" : "dark";
    });
  }, [systemTheme]);

  const value = useMemo(
    () => ({
      mode: selectedMode,
      resolvedTheme,
      setMode: setSelectedMode,
      toggleTheme
    }),
    [resolvedTheme, selectedMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={clsx(
          themeRoot,
          resolvedTheme === "dark" ? darkTheme : lightTheme,
          className
        )}
        style={style}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
