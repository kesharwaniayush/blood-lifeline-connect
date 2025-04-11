import { useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Heart, Hospital, Syringe } from "lucide-react";
import SearchPanel from "@/components/donation-centers/SearchPanel";
import MapView from "@/components/donation-centers/MapView";
import ImageCarousel from "@/components/donation-centers/ImageCarousel";
import { DonationCenter, DonationImage } from "@/types/donation-center";

// Sample donation centers data with Indian names and locations
const donationCenters: DonationCenter[] = [
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

// Blood donation camp images from local files
const donationImages: DonationImage[] = [
  { 
    src: "/images/donation1.jpg", 
    alt: "Blood donation camp with volunteers assisting donors in Mumbai"
  },
  { 
    src: "/images/donation2.jpg", 
    alt: "Medical professionals collecting blood samples at a donation drive in Delhi"
  },
  { 
    src: "/images/donation3.jpg", 
    alt: "Young donor donating blood at a hospital in Bangalore"
  },
  { 
    src: "/images/donation4.jpg", 
    alt: "Community blood donation event with multilingual banners in Hyderabad"
  },
  { 
    src: "/images/donation5.jpg", 
    alt: "Medical team preparing blood donation equipment at AIIMS hospital"
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
        <ImageCarousel images={donationImages} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search and List Panel */}
          <div className="lg:col-span-1 space-y-6">
            <SearchPanel 
              centers={donationCenters}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCenter={selectedCenter}
              onCenterClick={handleCenterClick}
            />
          </div>
          
          {/* Map Panel */}
          <div className="lg:col-span-2">
            <MapView filteredCenters={filteredCenters} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationCenters;
