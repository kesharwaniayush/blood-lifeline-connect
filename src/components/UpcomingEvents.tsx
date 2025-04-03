
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Community Blood Drive",
    location: "Central Community Center",
    date: "April 15, 2025",
    time: "09:00 AM - 04:00 PM",
    slots: 45,
  },
  {
    id: 2,
    title: "Corporate Donation Camp",
    location: "TechHub Office Campus",
    date: "April 20, 2025",
    time: "10:00 AM - 02:00 PM",
    slots: 23,
  },
  {
    id: 3,
    title: "University Blood Drive",
    location: "State University Auditorium",
    date: "April 25, 2025",
    time: "09:00 AM - 05:00 PM",
    slots: 50,
  },
];

export const UpcomingEvents = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
        <Button variant="outline" size="sm" className="text-blood-500 border-blood-200 hover:bg-blood-50">
          View Calendar
        </Button>
      </div>
      
      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-blood-200 transition-colors">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{event.location}</p>
              </div>
              <Badge variant="outline" className="border-blood-200 text-blood-600">
                {event.slots} slots available
              </Badge>
            </div>
            
            <div className="flex items-center mt-3 text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{event.date}, {event.time}</span>
            </div>
            
            <div className="mt-3 flex justify-end">
              <Button size="sm">
                Register
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
