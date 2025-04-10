
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

// Indian blood donation images for carousel
const donationImages: DonationImage[] = [
  { 
    src: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80", 
    alt: "Indian blood donation camp with volunteers and donors in Mumbai"
  },
  { 
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80", 
    alt: "Doctor examining blood samples at Red Cross blood donation drive in Delhi"
  },
  { 
    src: "https://images.unsplash.com/photo-1606206429912-de48525940a5?auto=format&fit=crop&w=1000&q=80", 
    alt: "Young Indian donor donating blood at a hospital in Bangalore"
  },
  { 
    src: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?auto=format&fit=crop&w=1000&q=80", 
    alt: "Community blood donation event with banners in Hindi and English in Hyderabad"
  },
  { 
    src: "https://images.unsplash.com/photo-1579154204914-4902c0adaab5?auto=format&fit=crop&w=1000&q=80", 
    alt: "Medical professional preparing blood donation equipment at AIIMS hospital"
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
