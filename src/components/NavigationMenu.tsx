
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, User, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Changed to true for demo purposes
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
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
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            {isLoggedIn ? (
              <Link to="/profile">
                <Avatar className="cursor-pointer">
                  <AvatarFallback className="bg-blood-100 text-blood-600">JD</AvatarFallback>
                </Avatar>
              </Link>
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isLoggedIn ? (
              <>
                <Link
                  to="/signin"
                  className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="block py-2 px-3 text-gray-700 hover:text-blood-500 hover:bg-blood-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
