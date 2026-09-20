"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;

    setDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="min-h-11 rounded-md border border-border bg-surface px-4 text-sm text-foreground hover:bg-muted"
    >
      {dark ? "Mode terang" : "Mode gelap"}
    </button>
  );
}