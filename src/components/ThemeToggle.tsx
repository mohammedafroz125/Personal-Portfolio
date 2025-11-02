import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme from localStorage or prefers-color-scheme
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* ignore */
    }
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const boxShadow =
    theme === "dark" ? "0 6px 18px rgba(255,255,255,0.08)" : "0 6px 18px rgba(0,0,0,0.08)";

  const iconColor = theme === "dark" ? "#ffffff" : undefined;

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggle}
      className="ml-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform focus:outline-none"
      style={{
        background: theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
        boxShadow,
        border: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Sun icon (light) */}
      <svg
        className={`w-5 h-5 text-yellow-400 transition-all duration-500 ${
          theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-75 rotate-90 opacity-0"
        }`}
        style={{ color: iconColor }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2">
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.2 4.2l1.4 1.4" />
          <path d="M18.4 18.4l1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.2 19.8l1.4-1.4" />
          <path d="M18.4 5.6l1.4-1.4" />
        </g>
      </svg>

      {/* Moon icon (dark) */}
      <svg
        className={`w-5 h-5 text-gray-100 absolute transition-all duration-500 ${
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-75 rotate-90 opacity-0"
        }`}
        style={{ color: iconColor }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
