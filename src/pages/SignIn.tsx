
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { User, Droplet, Users } from "lucide-react";

type UserRoleOption = "donor" | "needer" | "admin";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRoleOption | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Get redirect target from URL query params
  const queryParams = new URLSearchParams(location.search);
  const redirectTo = queryParams.get("redirect") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use predetermined emails based on role selection
    let useEmail = email;
    let usePassword = password;

    // For demo purposes, if a role is selected but no credentials entered, use demo accounts
    if (selectedRole && (!email || !password)) {
      switch (selectedRole) {
        case "donor":
          useEmail = "donor@example.com";
          usePassword = "donor123";
          break;
        case "needer":
          useEmail = "needer@example.com";
          usePassword = "needer123";
          break;
        case "admin":
          useEmail = "admin@example.com";
          usePassword = "admin123";
          break;
      }
    }

    try {
      await login(useEmail, usePassword);
      toast({
        title: "Signed in successfully",
        description: "Welcome back to BloodLifeline!",
      });
      navigate(redirectTo === "admin" ? "/admin" : `/${redirectTo}`);
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoleSelect = (role: UserRoleOption) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-white to-blood-50 py-10">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-blood-700">Sign In</h1>
          <p className="text-gray-600 text-center mb-8">
            Choose your role and sign in to access the BloodLifeline platform.
          </p>
          
          {/* Role selection */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div 
              onClick={() => handleRoleSelect("donor")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedRole === "donor" 
                  ? "border-blood-500 bg-blood-50" 
                  : "border-gray-200 hover:border-blood-300"
              }`}
            >
              <Droplet className="h-8 w-8 text-blood-500 mb-2" />
              <span className="text-sm font-medium">Donor</span>
            </div>
            
            <div 
              onClick={() => handleRoleSelect("needer")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedRole === "needer" 
                  ? "border-blood-500 bg-blood-50" 
                  : "border-gray-200 hover:border-blood-300"
              }`}
            >
              <User className="h-8 w-8 text-blood-500 mb-2" />
              <span className="text-sm font-medium">Needer</span>
            </div>
            
            <div 
              onClick={() => handleRoleSelect("admin")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedRole === "admin" 
                  ? "border-blood-500 bg-blood-50" 
                  : "border-gray-200 hover:border-blood-300"
              }`}
            >
              <Users className="h-8 w-8 text-blood-500 mb-2" />
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
          
          {selectedRole && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          )}
          
          {!selectedRole && (
            <div className="text-center text-gray-500 my-6">
              <p>Please select a role to continue</p>
            </div>
          )}
          
          <div className="text-sm text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-blood-600 hover:text-blood-700 font-medium">
              Register
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-center text-gray-500 border-t border-gray-200 pt-4">
            <p className="font-medium mb-2">Demo Accounts:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div>
                <p className="font-medium">Donor:</p>
                <p>donor@example.com</p>
                <p>donor123</p>
              </div>
              <div>
                <p className="font-medium">Needer:</p>
                <p>needer@example.com</p>
                <p>needer123</p>
              </div>
              <div>
                <p className="font-medium">Admin:</p>
                <p>admin@example.com</p>
                <p>admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
