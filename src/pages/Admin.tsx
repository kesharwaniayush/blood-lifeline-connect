
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import AdminTable from "@/components/AdminTable";
import { Button } from "@/components/ui/button";
import { EyeOff, Eye } from "lucide-react";

const Admin = () => {
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isTableVisible, setIsTableVisible] = useState(true);

  // Redirect non-admin users with a notification
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to access this page",
          variant: "destructive",
        });
        navigate("/signin?redirect=admin");
      } else if (!isAdmin()) {
        toast({
          title: "Access denied",
          description: "You don't have permission to access the admin panel",
          variant: "destructive",
        });
        navigate("/");
      }
    }
  }, [user, isLoading, navigate, isAdmin, toast]);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user || !isAdmin()) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage user data and system settings</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">User Management</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleTableVisibility}
              className="flex items-center gap-2"
            >
              {isTableVisible ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span>Hide Table</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span>Show Table</span>
                </>
              )}
            </Button>
          </div>
          
          {isTableVisible && <AdminTable />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
