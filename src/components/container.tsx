import { useSidebar } from "../store/use-sidebar";
import cn from "clsx";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div className="flex justify-center items-center">
      <div
        className={cn(
          "w-full lg:w-[1140px]",
          collapsed && "opacity-30 peer:transition duration-200"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
