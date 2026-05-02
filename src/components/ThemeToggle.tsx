import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/70 text-neutral-300 transition hover:border-emerald-400/50 hover:text-white"
    >
      <div className="transition duration-300 group-hover:rotate-12">
        {theme === "dark" ? (
          <Sun size={18} className="text-emerald-400" />
        ) : (
          <Moon size={18} />
        )}
      </div>
    </button>
  );
}