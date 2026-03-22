import SidebarToggleButton from "./sidebar-toggle-button";
import ThemeToggleButton from "./theme-toggle-button";

const Nav = () => {
  return (
    <div className="flex h-full w-full items-center justify-between px-3">
      <div>
        <SidebarToggleButton />
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Nav;
