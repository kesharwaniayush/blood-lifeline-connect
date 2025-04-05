
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import AdminTable from "@/components/AdminTable";

const Admin = () => {
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

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
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <AdminTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
