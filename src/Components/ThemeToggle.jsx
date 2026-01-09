

import { useState, useEffect } from "react";
import MoonIcon from "../assets/moon.png";
import SunIcon from "../assets/sun.png";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Run only on client
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null; // prevents hydration error

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-700 ease-in-out shadow-lg overflow-hidden flex items-center justify-center ${
        theme === "light"
          ? "bg-gradient-to-r from-pink-400 to-yellow-400 hover:shadow-yellow-400/60"
          : "bg-gradient-to-r from-black to-purple-900 hover:shadow-black"
      }`}
    >
      {/* Glow */}
      <span
        className={`absolute inset-0 blur-lg opacity-70 transition-all duration-700 ${
          theme === "light" ? "bg-yellow-300" : "bg-gray-900"
        }`}
      />

      {/* Icon */}
      <img
        src={theme === "light" ? SunIcon : MoonIcon}
        alt="theme icon"
        className={`relative z-10 w-6 h-6 transition-transform duration-700 ${
          theme === "light" ? "rotate-0" : "rotate-180"
        }`}
      />
    </button>
  );
}
