
import { useState, useEffect } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationCenter } from "@/types/donation-center";
import { toast } from "@/components/ui/use-toast";

interface MapViewProps {
  filteredCenters: DonationCenter[];
}

interface UserLocation {
  latitude: number;
  longitude: number;
}

const MapView = ({ filteredCenters }: MapViewProps) => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        toast({
          title: "Location Found",
          description: "Your current location has been detected",
        });
        setIsLocating(false);
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location";
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access was denied. Please enable location services.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
        }
        
        toast({
          title: "Location Error",
          description: errorMessage,
          variant: "destructive",
        });
        setIsLocating(false);
      },
      { enableHighAccuracy: true }
    );
  };

  // Get directions to the nearest donation center
  const getDirections = () => {
    if (!userLocation) {
      toast({
        title: "Location Required",
        description: "Please enable your location first",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would calculate the nearest center and open directions
    // For now, just open Google Maps centered on the user's location
    window.open(
      `https://www.google.com/maps/search/blood+donation+center/@${userLocation.latitude},${userLocation.longitude},14z`,
      "_blank"
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[600px] flex flex-col">
      <div className="flex-grow relative bg-gray-100 rounded-lg overflow-hidden">
        {/* Map placeholder - in a real app, this would be replaced with an actual map component */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blood-400 mx-auto mb-2" />
            <p className="text-gray-600">Map view showing donation centers</p>
            <p className="text-sm text-gray-500 mt-1">Interactive map integration coming soon</p>
            
            {userLocation && (
              <div className="mt-4 p-3 bg-white/80 rounded-lg shadow-sm">
                <p className="font-semibold text-blood-600">Your Location</p>
                <p className="text-sm text-gray-600">
                  Lat: {userLocation.latitude.toFixed(6)}
                </p>
                <p className="text-sm text-gray-600">
                  Long: {userLocation.longitude.toFixed(6)}
                </p>
                <div className="mt-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 mx-auto flex items-center justify-center">
                    <Navigation className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-xs mt-1 text-gray-500">You are here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Map controls */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Showing {filteredCenters.length} centers</span>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={getCurrentLocation}
            disabled={isLocating}
          >
            <MapPin className="h-4 w-4 mr-1" />
            {isLocating ? "Locating..." : "My Location"}
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={getDirections}
            disabled={!userLocation}
          >
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
