import { darkTheme } from "./dark.css";

export function enableDarkMode() {
  document.documentElement.classList.add(darkTheme);
}

export function disableDarkMode() {
  document.documentElement.classList.remove(darkTheme);
}
