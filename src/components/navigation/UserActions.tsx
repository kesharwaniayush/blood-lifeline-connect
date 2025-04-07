
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/navigation/UserMenu";
import { useAuth } from "@/context/AuthContext";

type UserActionsProps = {
  onLogout: () => void;
};

export const UserActions = ({ onLogout }: UserActionsProps) => {
  const { user } = useAuth();

  return (
    <div className="hidden md:flex items-center space-x-2">
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      
      {user ? (
        <UserMenu onLogout={onLogout} />
      ) : (
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
