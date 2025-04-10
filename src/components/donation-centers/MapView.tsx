
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationCenter } from "@/types/donation-center";

interface MapViewProps {
  filteredCenters: DonationCenter[];
}

const MapView = ({ filteredCenters }: MapViewProps) => {
  return (
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
  );
};

export default MapView;
