"use client";

import { useTheme } from "next-themes";
import { SunMoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="toggle theme"
      className="cursor-pointer"
      size="icon"
      title="toggle theme"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoonIcon className="size-6" />
    </Button>
  );
};

export default ThemeToggleButton;
