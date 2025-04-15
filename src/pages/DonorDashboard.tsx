
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Award, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DonorDashboard = () => {
  const { user, isLoading, isDonor } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect non-donor users
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to access this page",
          variant: "destructive",
        });
        navigate("/signin");
      } else if (!isDonor()) {
        toast({
          title: "Access denied",
          description: "This page is only for donors",
          variant: "destructive",
        });
        navigate("/");
      }
    }
  }, [user, isLoading, navigate, isDonor, toast]);

  const upcomingDonations = [
    {
      id: 1,
      center: "City Blood Bank",
      date: "May 10, 2025",
      time: "10:00 AM",
      address: "123 Main St, Mumbai",
    },
    {
      id: 2,
      center: "Red Cross Center",
      date: "June 15, 2025",
      time: "2:30 PM",
      address: "456 Park Ave, Mumbai",
    },
  ];

  const donationHistory = [
    {
      id: 1,
      date: "January 15, 2025",
      center: "City Blood Bank",
      bloodType: "O+",
      status: "Successful",
    },
    {
      id: 2,
      date: "October 20, 2024",
      center: "Red Cross Center",
      bloodType: "O+",
      status: "Successful",
    },
  ];

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user || !isDonor()) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Donor Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}! Track your donations and schedule new ones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blood-500" />
                Donor Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blood-600 mb-2">Active Donor</div>
              <p className="text-gray-600">Blood Type: {user.bloodType || "Not specified"}</p>
              <p className="text-gray-600">Last Donation: January 15, 2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-blood-500" />
                Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600 mb-2">Eligible</div>
              <p className="text-gray-600">You can donate again on: April 15, 2025</p>
              <p className="text-gray-600">Days until next donation: 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blood-500" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blood-600 mb-2">6 Lives Saved</div>
              <p className="text-gray-600">Total Donations: 2</p>
              <p className="text-gray-600">Total Blood Donated: 900 ml</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Donations</CardTitle>
              <CardDescription>Your scheduled blood donation appointments</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingDonations.length > 0 ? (
                <div className="space-y-4">
                  {upcomingDonations.map((donation) => (
                    <div key={donation.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-blood-600 mb-2">{donation.center}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {donation.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {donation.time}
                        </div>
                        <div className="flex items-center col-span-2">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {donation.address}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>No upcoming donations scheduled</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Schedule New Donation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Donation History</CardTitle>
              <CardDescription>Your past blood donations</CardDescription>
            </CardHeader>
            <CardContent>
              {donationHistory.length > 0 ? (
                <div className="space-y-4">
                  {donationHistory.map((donation) => (
                    <div key={donation.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-blood-600 mb-2">{donation.date}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>
                          <span className="text-gray-500">Center:</span> {donation.center}
                        </div>
                        <div>
                          <span className="text-gray-500">Blood Type:</span> {donation.bloodType}
                        </div>
                        <div>
                          <span className="text-gray-500">Status:</span>{" "}
                          <span className="text-green-600">{donation.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>No donation history yet</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Complete History</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonorDashboard;
