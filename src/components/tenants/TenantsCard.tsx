import TenantFilter from "./TenantFilter";

const TenantsCard = () => {
  return (
    <div className="mt-5 shadow-md rounded-md bg-white">
      <div className="p-4">
        <div className="grid grid-cols-2">
          <TenantFilter />
          <TenantFilter />
        </div>
      </div>
    </div>
  );
};

export default TenantsCard;
