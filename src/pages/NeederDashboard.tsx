
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, AlertCircle, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NeederDashboard = () => {
  const { user, isLoading, isNeeder } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect non-needer users
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to access this page",
          variant: "destructive",
        });
        navigate("/signin");
      } else if (!isNeeder()) {
        toast({
          title: "Access denied",
          description: "This page is only for blood recipients",
          variant: "destructive",
        });
        navigate("/");
      }
    }
  }, [user, isLoading, navigate, isNeeder, toast]);

  const activeRequests = [
    {
      id: 1,
      bloodType: "A+",
      unitsNeeded: 2,
      hospital: "City General Hospital",
      patient: "Family Member",
      urgency: "High",
      status: "Active",
      created: "April 5, 2025",
      donors: 1,
    },
  ];

  const nearbyDonors = [
    {
      id: 1,
      name: "Gajanan Aochar",
      bloodType: "A+",
      distance: "2.5 km",
      lastDonation: "3 months ago",
    },
    {
      id: 2,
      name: "Samarth Shejul",
      bloodType: "A+",
      distance: "4.2 km",
      lastDonation: "5 months ago",
    },
    {
      id: 3,
      name: "Shubham Chavan",
      bloodType: "A+",
      distance: "6.8 km",
      lastDonation: "2 months ago",
    },
  ];

  const requestHistory = [
    {
      id: 1,
      bloodType: "A+",
      unitsNeeded: 3,
      hospital: "Memorial Hospital",
      patient: "Self",
      status: "Fulfilled",
      created: "December 10, 2024",
      closed: "December 12, 2024",
    },
  ];

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user || !isNeeder()) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Blood Recipient Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}! Manage your blood requests and connect with donors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-blood-500" />
                Active Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blood-600 mb-2">1</div>
              <p className="text-gray-600">
                You have 1 active blood request that needs 2 units of A+ blood
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-blood-500" />
                Matching Donors
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blood-600 mb-2">8 Donors</div>
              <p className="text-gray-600">Found 8 potential A+ donors within 10km of your location</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">View Donors</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="bg-blood-50 border-b border-blood-100">
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-blood-500" />
                Request History
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blood-600 mb-2">2 Requests</div>
              <p className="text-gray-600">You've received 5 units of blood through our platform</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">View History</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Active Blood Requests</CardTitle>
                  <CardDescription>Your current blood requests</CardDescription>
                </div>
                <Button>New Request</Button>
              </div>
            </CardHeader>
            <CardContent>
              {activeRequests.length > 0 ? (
                <div className="space-y-4">
                  {activeRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium text-blood-600">Request #{request.id}</div>
                        <Badge variant={request.urgency === "High" ? "destructive" : "outline"}>
                          {request.urgency} Urgency
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div>
                          <span className="text-gray-500">Blood Type:</span>{" "}
                          <span className="font-medium">{request.bloodType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Units Needed:</span>{" "}
                          <span className="font-medium">{request.unitsNeeded}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Hospital:</span>{" "}
                          <span className="font-medium">{request.hospital}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Patient:</span>{" "}
                          <span className="font-medium">{request.patient}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Status:</span>{" "}
                          <span className="font-medium text-amber-600">{request.status}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Created:</span>{" "}
                          <span className="font-medium">{request.created}</span>
                        </div>
                        <div className="col-span-2 mt-2">
                          <div className="text-gray-500 mb-1">Donors matched: {request.donors}/{request.unitsNeeded}</div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-blood-500 h-2.5 rounded-full" 
                              style={{ width: `${(request.donors / request.unitsNeeded) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                        <Button size="sm" className="flex-1">Contact Donors</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>No active blood requests</p>
                  <Button className="mt-4">Create Blood Request</Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nearby Matching Donors</CardTitle>
              <CardDescription>Potential donors that match your blood type</CardDescription>
            </CardHeader>
            <CardContent>
              {nearbyDonors.length > 0 ? (
                <div className="space-y-3">
                  {nearbyDonors.map((donor) => (
                    <div key={donor.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                      <div>
                        <div className="font-medium">{donor.name}</div>
                        <div className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {donor.distance} away
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="bg-blood-50 text-blood-700 border-blood-200 mb-1">
                          {donor.bloodType}
                        </Badge>
                        <div className="text-xs text-gray-500">
                          Last donation: {donor.lastDonation}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full mt-2">
                    View All Matching Donors
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>No matching donors found nearby</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Request History</CardTitle>
            <CardDescription>Your past blood requests</CardDescription>
          </CardHeader>
          <CardContent>
            {requestHistory.length > 0 ? (
              <div className="space-y-4">
                {requestHistory.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium text-blood-600">Request #{request.id}</div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {request.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Blood Type:</span>{" "}
                        <span className="font-medium">{request.bloodType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Units:</span>{" "}
                        <span className="font-medium">{request.unitsNeeded}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Hospital:</span>{" "}
                        <span className="font-medium">{request.hospital}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Patient:</span>{" "}
                        <span className="font-medium">{request.patient}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Created:</span>{" "}
                        <span className="font-medium">{request.created}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Closed:</span>{" "}
                        <span className="font-medium">{request.closed}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                <p>No request history yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default NeederDashboard;
