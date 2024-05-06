import UserAvatar from "./UserAvatar";
import NavbarMenu from "./NavbarMenu";
import Navigation from "./Navigation";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <div className="sticky z-50 w-full border-b shadow-sm bg-white py-2">
      <div className="flex items-center justify-between px-4 py-1">
        <NavbarMenu />
        <NavbarLogo />
        <UserAvatar />
      </div>
      <Navigation />
    </div>
  );
};

export default Navbar;
