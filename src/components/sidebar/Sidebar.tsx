import { useSidebar } from "../../store/use-sidebar";
import cn from "clsx";
import CloseButton from "./CloseButton";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

const Sidebar = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const ref = useRef(null);

  const onSidebar = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  useOnClickOutside(ref, onSidebar);

  if (collapsed) {
    return (
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 left-0 h-screen w-[260px] shadow-md bg-white z-40 transition ease-in"
        )}
      >
        <CloseButton />
      </aside>
    );
  } else {
    return null;
  }
};

export default Sidebar;
