import TenantsCard from "./TenantsCard";
import TenantsHeader from "./TenantsHeader";

const Tenants = () => {
  return (
    <div className="mt-5 p-6 lg:p-0 w-full">
      <TenantsHeader />
      <TenantsCard />
    </div>
  );
};

export default Tenants;
