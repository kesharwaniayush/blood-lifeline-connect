
import { useState } from "react";
import { Search, MapPin, User } from "lucide-react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const donors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    bloodType: "O+",
    location: "Mumbai",
    lastDonation: "2025-03-01",
    status: "available",
    distance: "2.5 km",
  },
  {
    id: 2,
    name: "Priya Sharma",
    bloodType: "A-",
    location: "Delhi",
    lastDonation: "2025-03-15",
    status: "available",
    distance: "5.3 km",
  },
  {
    id: 3,
    name: "Amit Patel",
    bloodType: "B+",
    location: "Ahmedabad",
    lastDonation: "2025-02-20",
    status: "unavailable",
    distance: "8.1 km",
  },
  {
    id: 4,
    name: "Sonia Singh",
    bloodType: "AB-",
    location: "Bengaluru",
    lastDonation: "2025-01-10",
    status: "available",
    distance: "10.7 km",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    bloodType: "O-",
    location: "Hyderabad",
    lastDonation: "2025-02-05",
    status: "available",
    distance: "3.2 km",
  },
];

const bloodTypeOptions = ["Any", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const DonorsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodType, setBloodType] = useState("Any");
  const [distance, setDistance] = useState("Any");
  
  const filteredDonors = donors.filter((donor) => {
    let matches = true;
    
    if (searchTerm) {
      matches = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    if (bloodType !== "Any") {
      matches = matches && donor.bloodType === bloodType;
    }
    
    if (distance !== "Any") {
      const maxDistance = parseInt(distance);
      matches = matches && parseFloat(donor.distance) <= maxDistance;
    }
    
    return matches;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blood-50 to-white">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-blood-700">Find Blood Donors</h1>
        <p className="text-gray-600 mb-8">Search for available blood donors near your location by blood type, distance, and availability.</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-blood-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                placeholder="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-blood-200 focus:ring-blood-300"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-blood-400" />
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="whitespace-nowrap text-blood-700">Blood Type:</label>
              <select 
                className="flex h-10 w-full rounded-md border border-blood-200 bg-white px-3 py-2 text-base text-blood-800 focus:border-blood-300"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
                {bloodTypeOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="whitespace-nowrap text-blood-700">Distance:</label>
              <select 
                className="flex h-10 w-full rounded-md border border-blood-200 bg-white px-3 py-2 text-base text-blood-800 focus:border-blood-300"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              >
                <option value="Any">Any</option>
                <option value="5">Within 5 km</option>
                <option value="10">Within 10 km</option>
                <option value="20">Within 20 km</option>
                <option value="50">Within 50 km</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blood-100">
          <Table>
            <TableHeader className="bg-blood-50">
              <TableRow>
                <TableHead className="text-blood-700">Donor Name</TableHead>
                <TableHead className="text-blood-700">Blood Type</TableHead>
                <TableHead className="text-blood-700">Location</TableHead>
                <TableHead className="text-blood-700">Last Donation</TableHead>
                <TableHead className="text-blood-700">Distance</TableHead>
                <TableHead className="text-blood-700">Status</TableHead>
                <TableHead className="text-right text-blood-700">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonors.length > 0 ? (
                filteredDonors.map((donor) => (
                  <TableRow key={donor.id} className="hover:bg-blood-50/50">
                    <TableCell className="font-medium text-blood-800">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-blood-500" />
                        {donor.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blood-100 text-blood-700 border-blood-200">
                        {donor.bloodType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-blood-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-blood-500" />
                        {donor.location}
                      </div>
                    </TableCell>
                    <TableCell className="text-blood-700">{donor.lastDonation}</TableCell>
                    <TableCell className="text-blood-600">{donor.distance}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={donor.status === "available" ? "default" : "secondary"}
                        className={donor.status === "available" 
                          ? "bg-green-100 text-green-800 hover:bg-green-100" 
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"}
                      >
                        {donor.status === "available" ? "Available" : "Unavailable"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        size="sm" 
                        variant={donor.status === "available" ? "default" : "outline"}
                        disabled={donor.status !== "available"}
                        className="bg-blood-500 hover:bg-blood-600 text-white"
                      >
                        Contact
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-blood-500">
                    No donors found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonorsList;
