
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    try {
      await login(email, password);
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

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <p className="text-gray-600 text-center mb-8">
            Sign in to access your donor profile and manage your donations.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <div className="text-sm text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-blood-600 hover:text-blood-700 font-medium">
              Register
            </Link>
          </div>
          <div className="mt-4 text-sm text-center text-gray-500">
            <p>For admin access, use:</p>
            <p>Email: admin@example.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
