
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { NavItem } from "@/components/navigation/types";
import { useAuth } from "@/context/AuthContext";

type DesktopMenuProps = {
  navItems: NavItem[];
};

export const DesktopMenu = ({ navItems }: DesktopMenuProps) => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="py-2 px-3 text-gray-700 hover:text-blood-500 rounded-md transition duration-200"
        >
          {item.name}
        </Link>
      ))}
      {/* Only show admin link if user is an admin */}
      {user && isAdmin() && (
        <Link
          to="/admin"
          className="py-2 px-3 text-gray-700 hover:text-blood-500 rounded-md transition duration-200 flex items-center gap-1"
        >
          <Shield className="h-4 w-4" />
          Admin
        </Link>
      )}
    </div>
  );
};

export default DesktopMenu;
