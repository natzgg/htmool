import { IoIosCloseCircle } from "react-icons/io";
import { useSidebar } from "../../store/use-sidebar";

const CloseButton = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const onClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };
  return (
    <div className="flex justify-end w-full p-3">
      <button onClick={onClick} className="p-2 hover:bg-gray-400 rounded-lg">
        <IoIosCloseCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CloseButton;
