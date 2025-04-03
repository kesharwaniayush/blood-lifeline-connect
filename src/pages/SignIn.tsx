
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <p className="text-gray-600 text-center mb-8">Sign in to access your donor profile and manage your donations.</p>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                placeholder="youremail@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>
          <Button className="w-full mb-4">Sign In</Button>
          <div className="text-sm text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-blood-600 hover:text-blood-700 font-medium">Register</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
