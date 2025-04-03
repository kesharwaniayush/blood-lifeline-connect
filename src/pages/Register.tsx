
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
          <p className="text-gray-600 text-center mb-8">Join our network of blood donors and help save lives.</p>
          <div className="space-y-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="agree-terms"
              type="checkbox"
              className="h-4 w-4 text-blood-600 focus:ring-blood-500 border-gray-300 rounded"
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-600">
              I agree to the <a href="#" className="text-blood-600 hover:text-blood-800">Terms of Service</a> and <a href="#" className="text-blood-600 hover:text-blood-800">Privacy Policy</a>
            </label>
          </div>
          <Button className="w-full mb-4">Sign Up</Button>
          <div className="text-sm text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/signin" className="text-blood-600 hover:text-blood-700 font-medium">Sign In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
