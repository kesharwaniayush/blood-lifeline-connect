
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { DesktopMenu } from "@/components/navigation/DesktopMenu";
import { UserActions } from "@/components/navigation/UserActions";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavItem } from "@/components/navigation/types";

export const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems: NavItem[] = [
    { name: "Find Donors", path: "/donors" },
    { name: "Request Blood", path: "/request" },
    { name: "Donation Centers", path: "/centers" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blood-500" />
            <span className="font-bold text-xl text-blood-600">BloodLifeline</span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopMenu navItems={navItems} />

          {/* User Actions */}
          <UserActions onLogout={handleLogout} />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          navItems={navItems} 
          onClose={() => setMobileMenuOpen(false)} 
          onLogout={handleLogout} 
        />
      </div>
    </nav>
  );
};

export default NavigationMenu;
