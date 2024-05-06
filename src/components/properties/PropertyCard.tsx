import { TbBuildingCommunity } from "react-icons/tb";
import { PiMapPin } from "react-icons/pi";
import { Avatar, AvatarGroup } from "@mui/material";

const PropertyCard = () => {
  return (
    <div className="rounded-lg p-2 flex space-x-2 bg-white shadow-lg w-full">
      <div className="min-h-[150px] max-w-[130px]">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        <h1 className="text-lg font-semibold">AB2 - Mystic Nuget</h1>

        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-xs flex items-center">
            <TbBuildingCommunity className="w-4 h-4" />
            <span>4 apartments</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="rounded-full h-1 w-1 bg-[#7367F0]" />
            <span className="text-purple-600 text-xs font-medium">Rent</span>
          </div>
        </div>
        <div className="mt-2 border-t" />

        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-600/60">$232/Flat</span>
          <div className="flex gap-1 items-center justify-center text-gray-400">
            <PiMapPin className="w-4 h-4 text-gray-900" />
            <span className="text-xs">New York</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Added: 1d ago</span>
          <div className="flex gap-1 items-center justify-center text-gray-400">
            <span>Tenants</span>
            <AvatarGroup max={3}>
              <Avatar
                style={{ height: "20px", width: "20px" }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                style={{ height: "20px", width: "20px" }}
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                style={{ height: "20px", width: "20px" }}
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
