import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-mode", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 rounded-md"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀" : "🌙"}
      </button>
    </div>
  );
}
