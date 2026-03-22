"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/use-ui-store";

const SidebarToggleButton = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <Button
      aria-label="toggle menu"
      className="block cursor-pointer lg:hidden"
      size="icon"
      title="toggle menu"
      variant="ghost"
      onClick={toggleSidebar}
    >
      <MenuIcon className="size-6" />
    </Button>
  );
};

export default SidebarToggleButton;
