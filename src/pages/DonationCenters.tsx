
import { useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Phone, Heart, Hospital, Syringe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Sample donation centers data with Indian names and locations
const donationCenters = [
  {
    id: 1,
    name: "City Blood Bank",
    address: "123 MG Road, Mumbai, Maharashtra 400001",
    phone: "+91 98765 43210",
    hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM",
    isOpen: true,
    distance: "1.2 km",
    icon: <Hospital className="h-8 w-8 text-blood-500" />,
  },
  {
    id: 2,
    name: "Apollo Hospital Blood Center",
    address: "456 Nehru Place, New Delhi, Delhi 110019",
    phone: "+91 99876 54321",
    hours: "Mon-Sun: 24 hours",
    isOpen: true,
    distance: "3.5 km",
    icon: <Heart className="h-8 w-8 text-blood-500" />,
  },
  {
    id: 3,
    name: "Community Donation Center",
    address: "789 Paldi, Ahmedabad, Gujarat 380007",
    phone: "+91 98123 45678",
    hours: "Mon-Fri: 9AM-6PM",
    isOpen: false,
    distance: "5.7 km",
    icon: <Syringe className="h-8 w-8 text-blood-500" />,
  },
  {
    id: 4,
    name: "Jayadeva Blood Donation Clinic",
    address: "321 Brigade Road, Bengaluru, Karnataka 560001",
    phone: "+91 97654 32109",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 9AM-4PM",
    isOpen: true,
    distance: "4.3 km",
    icon: <Hospital className="h-8 w-8 text-blood-500" />,
  },
  {
    id: 5,
    name: "AIIMS Medical Center",
    address: "555 Banjara Hills, Hyderabad, Telangana 500034",
    phone: "+91 95678 90123",
    hours: "Mon-Sun: 24 hours",
    isOpen: true,
    distance: "7.1 km",
    icon: <Heart className="h-8 w-8 text-blood-500" />,
  },
];

// Blood donation images for carousel
const donationImages = [
  { 
    src: "/images/donation1.jpg", 
    alt: "A high-resolution photo of a person donating blood in a clinic, smiling nurse, clean and professional environment, warm lighting, realistic style."
  },
  { 
    src: "/images/donation2.jpg", 
    alt: "Happy diverse group of people donating blood together in a bright hospital setting, modern equipment, friendly atmosphere."
  },
  { 
    src: "/images/donation3.jpg", 
    alt: "Close-up of a blood bag with a red cross symbol, donation concept, medical theme, soft focus background."
  },
  { 
    src: "/images/donation4.jpg", 
    alt: "Volunteers organizing a blood donation camp, banners with 'Donate Blood, Save Lives' text, community event vibe."
  },
  { 
    src: "/images/donation5.jpg", 
    alt: "A doctor holding a blood donation certificate, smiling, hospital background, professional and trustworthy look."
  },
];

const DonationCenters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);

  // Filter centers based on search term
  const filteredCenters = donationCenters.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle center click for highlighting
  const handleCenterClick = (id: number) => {
    setSelectedCenter(id === selectedCenter ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Blood Donation Centers</h1>
        <p className="text-gray-600 mb-6">Find blood donation centers near you and get directions, contact information, and opening hours.</p>
        
        {/* Photo Carousel */}
        <div className="mb-8">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {donationImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-xl">
                        <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                          {/* In a real application, this would be an actual image */}
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search and List Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative mb-4">
                <Input
                  placeholder="Search centers or addresses"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredCenters.map((center) => (
                  <div
                    key={center.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedCenter === center.id ? "border-blood-500 bg-blood-50" : "border-gray-200 hover:border-blood-300"
                    }`}
                    onClick={() => handleCenterClick(center.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        {center.icon}
                        <h3 className="font-semibold">{center.name}</h3>
                      </div>
                      <Badge
                        variant={center.isOpen ? "default" : "secondary"}
                        className={center.isOpen ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-gray-100 text-gray-800 hover:bg-gray-100"}
                      >
                        {center.isOpen ? "Open Now" : "Closed"}
                      </Badge>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Phone className="h-3.5 w-3.5 mr-1" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {center.hours}
                    </div>
                    <div className="mt-3 text-xs font-medium text-blood-600">
                      {center.distance} from your location
                    </div>
                  </div>
                ))}

                {filteredCenters.length === 0 && (
                  <div className="text-center py-4 text-gray-500">
                    No centers found matching your search.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Map Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md h-[600px] flex flex-col">
              <div className="flex-grow relative bg-gray-100 rounded-lg overflow-hidden">
                {/* Map placeholder - in a real app, this would be replaced with an actual map component */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blood-400 mx-auto mb-2" />
                    <p className="text-gray-600">Map view showing donation centers</p>
                    <p className="text-sm text-gray-500 mt-1">Interactive map integration coming soon</p>
                  </div>
                </div>
              </div>
              
              {/* Map controls */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Showing {filteredCenters.length} centers</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    My Location
                  </Button>
                  <Button variant="default" size="sm">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationCenters;
