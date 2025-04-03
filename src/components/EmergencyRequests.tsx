
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample emergency requests data
const emergencyRequests = [
  {
    id: 1,
    bloodType: "O-",
    location: "City Hospital, Building C",
    distance: "2.5 km",
    timePosted: "10 minutes ago",
    urgency: "Critical",
  },
  {
    id: 2,
    bloodType: "A+",
    location: "Memorial Hospital",
    distance: "4.2 km",
    timePosted: "25 minutes ago",
    urgency: "High",
  },
  {
    id: 3,
    bloodType: "B+",
    location: "General Medical Center",
    distance: "3.7 km",
    timePosted: "40 minutes ago",
    urgency: "Medium",
  },
];

// Urgency badge colors
const urgencyColors = {
  Critical: "bg-red-100 text-red-800 border-red-200",
  High: "bg-orange-100 text-orange-800 border-orange-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
};

export const EmergencyRequests = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Emergency Requests</h3>
        <Button variant="outline" size="sm" className="text-blood-500 border-blood-200 hover:bg-blood-50">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {emergencyRequests.map((request) => (
          <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:border-blood-200 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-blood-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {request.bloodType}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{request.location}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span>{request.distance} away</span>
                    <span className="mx-2">•</span>
                    <span>{request.timePosted}</span>
                  </div>
                </div>
              </div>
              <Badge className={cn("border", urgencyColors[request.urgency as keyof typeof urgencyColors])}>
                {request.urgency}
              </Badge>
            </div>
            
            <div className="mt-3 flex justify-end space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-600">
                More Info
              </Button>
              <Button size="sm">
                Respond
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyRequests;
