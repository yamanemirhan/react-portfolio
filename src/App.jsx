import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ? "dark" : "light";
  });

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme =
      localStorage.getItem("darkMode") === "true" ? "dark" : "light";

    setTheme(prefersDarkMode.matches ? storedTheme : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("darkMode", "false");
    } else {
      setTheme("dark");
      localStorage.setItem("darkMode", "true");
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 p-1 sm:p-0">
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
