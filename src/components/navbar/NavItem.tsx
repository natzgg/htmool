import { IconType } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import cn from "clsx";

interface NavItemProps {
  icon: IconType;
  label: string;
  hasItems?: boolean;
  active: boolean;
  href: string;
}

const NavItem = ({
  label,
  icon: Icon,
  hasItems,
  active,
  href,
}: NavItemProps) => {
  return (
    <a href={href}>
      <div className="relative group">
        <div className="h-max w-max">
          <button
            className={cn(
              "flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-300",
              active && "bg-gradient-to-r from-indigo-500 to-indigo-500/60"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                active ? "text-white" : "text-gray-600 "
              )}
            />
            <span
              className={cn(
                "font-medium",
                active ? "text-white" : "text-gray-600 "
              )}
            >
              {label}
            </span>
            {hasItems && (
              <IoIosArrowDown className="w-4 h-4 group-hover:hidden" />
            )}
            {hasItems && (
              <IoIosArrowUp className="w-4 h-4 hidden group-hover:block" />
            )}
          </button>

          {hasItems && (
            <div className="hidden group-hover:block absolute w-full bg-transparent rounded-md z-10 h-max py-5">
              <ul className="flex flex-col bg-white p-4 rounded-md">
                <li>Item 1 </li>
                <li>Item 2</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default NavItem;
