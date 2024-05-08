import PropertyCard from "./PropertyCard";
import PropertiesHeader from "./PropertiesHeader";

const Properties = () => {
  return (
    <div className="mt-5 p-6 lg:p-0 w-full">
      <PropertiesHeader />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-full">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Properties;
