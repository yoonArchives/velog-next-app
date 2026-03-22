type SidebarConfig = {
  category: string;
  items: {
    name: string;
    href: import("next/link").LinkProps["href"];
    target?: HTMLAttributeAnchorTarget;
  }[];
}[];
