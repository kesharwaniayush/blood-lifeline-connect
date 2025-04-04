
import { useState } from "react";
import { Search, MapPin, User } from "lucide-react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select } from "@/components/ui/select";

// Sample donor data
const donors = [
  {
    id: 1,
    name: "John Doe",
    bloodType: "O+",
    location: "New York City",
    lastDonation: "2025-03-01",
    status: "available",
    distance: "2.5 km",
  },
  {
    id: 2,
    name: "Jane Smith",
    bloodType: "A-",
    location: "Brooklyn",
    lastDonation: "2025-03-15",
    status: "available",
    distance: "5.3 km",
  },
  {
    id: 3,
    name: "Michael Johnson",
    bloodType: "B+",
    location: "Queens",
    lastDonation: "2025-02-20",
    status: "unavailable",
    distance: "8.1 km",
  },
  {
    id: 4,
    name: "Sarah Williams",
    bloodType: "AB-",
    location: "Bronx",
    lastDonation: "2025-01-10",
    status: "available",
    distance: "10.7 km",
  },
  {
    id: 5,
    name: "Robert Davis",
    bloodType: "O-",
    location: "Manhattan",
    lastDonation: "2025-02-05",
    status: "available",
    distance: "3.2 km",
  },
];

// Blood type options
const bloodTypeOptions = ["Any", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const DonorsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodType, setBloodType] = useState("Any");
  const [distance, setDistance] = useState("Any");
  
  // Filter donors based on search term and filters
  const filteredDonors = donors.filter((donor) => {
    let matches = true;
    
    // Filter by search term
    if (searchTerm) {
      matches = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    // Filter by blood type
    if (bloodType !== "Any") {
      matches = matches && donor.bloodType === bloodType;
    }
    
    // Filter by distance (for demo purposes)
    if (distance !== "Any") {
      const maxDistance = parseInt(distance);
      matches = matches && parseFloat(donor.distance) <= maxDistance;
    }
    
    return matches;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Find Blood Donors</h1>
        <p className="text-gray-600 mb-8">Search for available blood donors near your location by blood type, distance, and availability.</p>
        
        {/* Search and filter section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                placeholder="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="whitespace-nowrap">Blood Type:</label>
              <select 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
                {bloodTypeOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="whitespace-nowrap">Distance:</label>
              <select 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
        
        {/* Results section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor Name</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Donation</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonors.length > 0 ? (
                filteredDonors.map((donor) => (
                  <TableRow key={donor.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        {donor.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blood-50 text-blood-600 border-blood-200">
                        {donor.bloodType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        {donor.location}
                      </div>
                    </TableCell>
                    <TableCell>{donor.lastDonation}</TableCell>
                    <TableCell>{donor.distance}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={donor.status === "available" ? "default" : "secondary"}
                        className={donor.status === "available" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-gray-100 text-gray-800 hover:bg-gray-100"}
                      >
                        {donor.status === "available" ? "Available" : "Unavailable"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        size="sm" 
                        variant={donor.status === "available" ? "default" : "outline"}
                        disabled={donor.status !== "available"}
                      >
                        Contact
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
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
