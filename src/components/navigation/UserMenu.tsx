
import { User, LogOut, Shield, Droplet, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";

type UserMenuProps = {
  onLogout: () => void;
};

export const UserMenu = ({ onLogout }: UserMenuProps) => {
  const { user, isAdmin, isDonor, isNeeder } = useAuth();

  if (!user) return null;

  const getInitials = () => {
    if (!user.name) return "U";
    return user.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getDashboardLink = () => {
    if (isAdmin()) return "/admin";
    if (isDonor()) return "/donor-dashboard";
    if (isNeeder()) return "/needer-dashboard";
    return "/profile";
  };

  const getRoleIcon = () => {
    if (isAdmin()) return Shield;
    if (isDonor()) return Droplet;
    if (isNeeder()) return Heart;
    return User;
  };

  const getRoleName = () => {
    if (isAdmin()) return "Admin";
    if (isDonor()) return "Donor";
    if (isNeeder()) return "Recipient";
    return "User";
  };

  const RoleIcon = getRoleIcon();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="bg-blood-100 text-blood-600">{getInitials()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs font-normal text-gray-500">
          {user.email}
          <div className="flex items-center mt-1 text-blood-600">
            <RoleIcon className="h-3 w-3 mr-1" />
            {getRoleName()}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Dashboard link based on role */}
        <DropdownMenuItem asChild>
          <Link to={getDashboardLink()} className="cursor-pointer">
            <RoleIcon className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        
        {/* Profile link for all users */}
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        
        {/* Admin Panel for admins only */}
        {isAdmin() && (
          <DropdownMenuItem asChild>
            <Link to="/admin" className="cursor-pointer">
              <Shield className="mr-2 h-4 w-4" />
              <span>Admin Panel</span>
            </Link>
          </DropdownMenuItem>
        )}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
