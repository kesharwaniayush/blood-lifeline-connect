
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/components/navigation/types";
import { useAuth } from "@/context/AuthContext";

type MobileMenuProps = {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
  onLogout: () => void;
};

export const MobileMenu = ({ isOpen, navItems, onClose, onLogout }: MobileMenuProps) => {
  const { user, isAdmin } = useAuth();

  return (
    <div
      className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        
        {/* Only show admin link in mobile menu if user is an admin */}
        {user && isAdmin() && (
          <Link
            to="/admin"
            className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md flex items-center gap-1"
            onClick={onClose}
          >
            <Shield className="h-4 w-4" />
            Admin Panel
          </Link>
        )}
        
        {!user ? (
          <>
            <Link
              to="/signin"
              className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
              onClick={onClose}
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
              onClick={onClose}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
              onClick={onClose}
            >
              My Profile
            </Link>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full text-left block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
