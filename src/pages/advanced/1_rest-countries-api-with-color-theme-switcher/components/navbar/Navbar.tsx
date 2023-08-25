import React from "react";

import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

import "./Navbar.css";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const initialTheme = () => {
  const matchMedia = !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = localStorage.theme === "dark";

  if (isDarkMode || matchMedia) {
    return Theme.Dark;
  } else {
    return Theme.Light;
  }
};

const Navbar = () => {
  const [theme, setTheme] = React.useState(initialTheme);

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
      localStorage.theme = Theme.Dark;
    } else {
      setTheme(Theme.Light);
      localStorage.theme = Theme.Light;
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.toggle(Theme.Dark, theme === Theme.Dark);
  }, [theme]);

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <h1>Where in the world?</h1>
        <button className="navbar__button" type="button" onClick={toggleTheme}>
          {theme === Theme.Light ? (
            <>
              <MoonIcon />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <SunIcon />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
