import TenantFilter from "./TenantFilter";

const TenantsCard = () => {
  return (
    <div className="mt-5 shadow-md rounded-md bg-white">
      <div className="p-4">
        <TenantFilter />
      </div>
    </div>
  );
};

export default TenantsCard;
