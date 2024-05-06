import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import cn from "clsx";

interface NavItemProps {
  icon: IconType;
  label: string;
  hasItems?: boolean;
  active: boolean;
}

const NavItem = ({ label, icon: Icon, hasItems, active }: NavItemProps) => {
  return (
    <a href="/properties">
      <div className="group relative w-max">
        <button
          className={cn(
            "flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-300",
            active && "bg-gradient-to-r from-indigo-500 to-indigo-500/60"
          )}
        >
          <Icon
            className={cn("w-5 h-5", active ? "text-white" : "text-gray-600 ")}
          />
          <span
            className={cn(
              "font-medium",
              active ? "text-white" : "text-gray-600 "
            )}
          >
            {label}
          </span>
          {hasItems && <IoIosArrowDown className="w-4 h-4" />}
        </button>

        {hasItems && (
          <div className="hidden group-hover:transform-all group-hover:delay-300 group-hover:block absolute w-full bg-white rounded-md p-4 mt-5">
            <ul className="flex flex-col">
              <li>Item 1 </li>
              <li>Item 2</li>
            </ul>
          </div>
        )}
      </div>
    </a>
  );
};

export default NavItem;
