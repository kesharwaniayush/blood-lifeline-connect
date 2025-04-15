
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { User, Droplet, Users } from "lucide-react";

type UserRoleOption = "donor" | "needer";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRoleOption | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRoleSelect = (role: UserRoleOption) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!firstName || !lastName || !email || !password) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (selectedRole === "donor" && !bloodType) {
      toast({
        title: "Blood type required",
        description: "Please select your blood type.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate registration success
    setTimeout(() => {
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please sign in.",
      });
      setIsSubmitting(false);
      navigate("/signin");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-white to-blood-50 py-10">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-blood-700">Create Account</h1>
          <p className="text-gray-600 text-center mb-8">Join our network of blood donors and help save lives.</p>
          
          {/* Role selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div 
              onClick={() => handleRoleSelect("donor")}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedRole === "donor" 
                  ? "border-blood-500 bg-blood-50" 
                  : "border-gray-200 hover:border-blood-300"
              }`}
            >
              <Droplet className="h-8 w-8 text-blood-500 mb-2" />
              <span className="text-sm font-medium">Register as Donor</span>
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
              <span className="text-sm font-medium">Register as Blood Recipient</span>
            </div>
          </div>
          
          {selectedRole && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
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
              
              {selectedRole === "donor" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-500 focus:border-transparent"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    required
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
              )}
              
              <div className="flex items-center">
                <input
                  id="agree-terms"
                  type="checkbox"
                  className="h-4 w-4 text-blood-600 focus:ring-blood-500 border-gray-300 rounded"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blood-600 hover:text-blood-800">Terms of Service</a> and <a href="#" className="text-blood-600 hover:text-blood-800">Privacy Policy</a>
                </label>
              </div>
              
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>
          )}
          
          {!selectedRole && (
            <div className="text-center text-gray-500 my-6">
              <p>Please select a role to continue</p>
            </div>
          )}
          
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
