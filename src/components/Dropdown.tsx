import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import cn from "clsx";

const Dropdown = () => {
  const [value, setValue] = useState("All");
  const [collapsed, setCollapsed] = useState(false);
  const items = ["Applications", "Current Tenants", "Ex Tenants", "Declined"];

  return (
    <div onClick={() => setCollapsed(!collapsed)} className="relative group">
      <div className="h-max w-max min-w-full border rounded-md shadow-sm">
        <button className="w-full flex items-center justify-between p-2 rounded-md space-x-6">
          <span>{value}</span>
          <IoIosArrowDown className="w-4 h-4" />
        </button>

        {collapsed && (
          <ul
            className={cn("absolute group-hover:block bg-transparent w-full")}
          >
            <div className="p-2 h-full rounded mt-0.5 bg-white space-y-1.5 cursor-pointer">
              <li
                value={"All"}
                onClick={() => setValue("All")}
                className={cn(
                  "rounded-md p-2",
                  value === "All" && "bg-[#7367F0]/[0.16]"
                )}
              >
                All
              </li>
              {items.map((item) => (
                <li
                  value={item}
                  onClick={() => setValue(item)}
                  key={item}
                  className={cn(
                    "rounded-md p-2",
                    value === item && "bg-[#7367F0]/[0.16]"
                  )}
                >
                  {item}
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
