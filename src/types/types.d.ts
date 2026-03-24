type SidebarConfig = {
  category: string;
  items: {
    label: string;
    href: import("next/link").LinkProps["href"];
    target?: HTMLAttributeAnchorTarget;
  }[];
}[];
