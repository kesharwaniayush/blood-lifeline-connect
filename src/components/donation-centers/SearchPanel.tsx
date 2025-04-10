
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DonationCenter } from "@/types/donation-center";

interface SearchPanelProps {
  centers: DonationCenter[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCenter: number | null;
  onCenterClick: (id: number) => void;
}

const SearchPanel = ({
  centers,
  searchTerm,
  onSearchChange,
  selectedCenter,
  onCenterClick,
}: SearchPanelProps) => {
  // Filter centers based on search term
  const filteredCenters = centers.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="relative mb-4">
        <Input
          placeholder="Search centers or addresses"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
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
            onClick={() => onCenterClick(center.id)}
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
  );
};

export default SearchPanel;
