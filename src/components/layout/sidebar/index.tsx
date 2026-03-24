"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarConfig } from "@/constants/layout";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/use-ui-store";
import { useWindowMinWidth } from "@/hooks/use-media-query";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const pathname = usePathname();
  const isShow = useWindowMinWidth(64);
  const setSidebar = useUIStore((state) => state.setSidebar);
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  useEffect(() => {
    isShow && setSidebar(false);
  }, [isShow]);

  return (
    <div
      className={cn(
        "fixed top-(--header-height) z-1 h-[calc(100svh-var(--header-height))] w-full shadow-sm lg:sticky lg:block lg:w-(--sidebar-width)",
        isSidebarOpen ? "block" : "hidden",
      )}
    >
      <ScrollArea className="bg-background h-[calc(100svh-var(--header-height))] w-full">
        <div className="flex flex-col gap-4 px-4 pt-6 pb-16">
          {sidebarConfig.map((group, index) => (
            <div key={`${group.category}-${index}`}>
              <div className="font-bold">{group.category}</div>
              <ul className="text-sidebar-primary-foreground grid px-1 pt-1 pb-2 text-sm font-semibold">
                {group.items.map((item) => (
                  <li
                    key={item.href.toString()}
                    className={cn(
                      "has-hover:border-accent-foreground has-hover:text-sidebar-accent-foreground border-l px-2 py-0.5",
                      {
                        "border-accent-foreground text-sidebar-accent-foreground":
                          pathname === item.href,
                      },
                    )}
                  >
                    <Link
                      href={item.href}
                      target={item?.target}
                      className={cn({
                        "cursor-pointer": pathname !== item.href,
                      })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
