import { FaBuilding } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import {
  TbUsersGroup,
  TbClick,
  TbSmartHome,
  TbZoomPan,
  TbFilePencil,
} from "react-icons/tb";

import NavItem from "./NavItem";

const Navigation = () => {
  const routes = [
    {
      label: "Dashboard",
      href: "/",
      icon: TbSmartHome,
      hasItems: true,
      active: true,
    },
    {
      label: "Properties",
      href: "/properties",
      icon: FaBuilding,
      hasItems: false,
      active: false,
    },
    {
      label: "New Applicant",
      href: "/new-applicant",
      icon: IoPersonAddSharp,
      hasItems: true,
      active: false,
    },
    {
      label: "Tenants",
      href: "/tenants",
      icon: TbUsersGroup,
      hasItems: false,
      active: false,
    },
    {
      label: "Actions",
      href: "/actions",
      icon: TbClick,
      hasItems: true,
      active: false,
    },
    {
      label: "Inspections",
      href: "/inspections",
      icon: TbZoomPan,
      hasItems: true,
      active: false,
    },
    {
      label: "Compliance",
      href: "/compliance",
      icon: TbFilePencil,
      hasItems: true,
      active: false,
    },
  ];
  return (
    <div className="hidden lg:block mt-2 border-t">
      <div className="flex p-2 items-center gap-4">
        {routes.map((route) => (
          <NavItem
            key={route.label}
            label={route.label}
            icon={route.icon}
            hasItems={route.hasItems}
            active={route.active}
          ></NavItem>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
