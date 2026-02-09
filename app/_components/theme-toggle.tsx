"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="h-8 w-8 rounded-full" aria-hidden /> 
    );

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-gray-200 hover:dark:bg-gray-600 transition-colors duration-200 relative h-8 w-8 rounded-[50%] flex justify-center items-center"
    >
      <IoSunny className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IoMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
