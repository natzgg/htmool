import { FaBuilding } from "react-icons/fa6";
import { TbSmartHome } from "react-icons/tb";
import Container from "../container";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <Container>
      <div className="mt-5 p-6 lg:p-0 w-full">
        <div className="flex">
          <div className="hidden lg:block space-x-2">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-purple-600">Properties</span>
          </div>

          <div className="lg:hidden space-x-2 flex">
            <TbSmartHome className="w-5 h-5" />
            <span>/</span>
            <FaBuilding className="w-5 h-5 text-purple-600" />
          </div>
        </div>

        <div className="grid gap-5 mt-5 w-full">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </Container>
  );
};

export default Properties;
