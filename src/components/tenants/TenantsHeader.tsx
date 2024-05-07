import { TbSmartHome, TbUsersGroup } from "react-icons/tb";

const TenantsHeader = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block space-x-2">
        <a href="/">Dashboard</a>
        <span>/</span>
        <span className="text-purple-600">Tenants</span>
      </div>

      <div className="lg:hidden space-x-2 flex">
        <TbSmartHome className="w-5 h-5" />
        <span>/</span>
        <TbUsersGroup className="w-5 h-5 text-purple-600" />
      </div>
    </div>
  );
};

export default TenantsHeader;
