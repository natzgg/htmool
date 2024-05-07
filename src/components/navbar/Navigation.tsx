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
  console.log(window.location.pathname);
  const routes = [
    {
      label: "Dashboard",
      href: "/",
      icon: TbSmartHome,
      hasItems: true,
    },
    {
      label: "Properties",
      href: "/properties",
      icon: FaBuilding,
      hasItems: false,
    },
    {
      label: "New Applicant",
      href: "/new-applicant",
      icon: IoPersonAddSharp,
      hasItems: true,
    },
    {
      label: "Tenants",
      href: "/tenants",
      icon: TbUsersGroup,
      hasItems: false,
    },
    {
      label: "Actions",
      href: "/actions",
      icon: TbClick,
      hasItems: true,
    },
    {
      label: "Inspections",
      href: "/inspections",
      icon: TbZoomPan,
      hasItems: true,
    },
    {
      label: "Compliance",
      href: "/compliance",
      icon: TbFilePencil,
      hasItems: true,
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
            active={window.location.pathname == route.href}
            href={route.href}
          ></NavItem>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
