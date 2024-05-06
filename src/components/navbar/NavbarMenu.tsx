import { PiList } from "react-icons/pi";
import { useSidebar } from "../../store/use-sidebar";

const NavbarMenu = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const onClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  return (
    <button onClick={onClick} className="lg:hidden">
      <PiList className="w-7 h-7" />
    </button>
  );
};

export default NavbarMenu;
