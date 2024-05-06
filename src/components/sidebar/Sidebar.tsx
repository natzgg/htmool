import { useSidebar } from "../../store/use-sidebar";
import cn from "clsx";

const Sidebar = () => {
  const { collapsed } = useSidebar((state) => state);

  if (collapsed) {
    return (
      <aside
        className={cn(
          "fixed top-15 left-0 h-screen w-[260px] shadow-md bg-white z-40 transition ease-in"
        )}
      >
        Sidebar
      </aside>
    );
  } else {
    return null;
  }
};

export default Sidebar;
