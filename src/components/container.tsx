import { useSidebar } from "../store/use-sidebar";
import cn from "clsx";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className={cn(
            "w-full lg:w-[1140px]",
            collapsed && "opacity-30 peer:transition duration-200"
          )}
        >
          <Navbar />
          {children}
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Container;
