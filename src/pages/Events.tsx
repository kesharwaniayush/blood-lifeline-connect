
import { useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar as CalendarIcon, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

// Sample events data
const events = [
  {
    id: 1,
    title: "Community Blood Drive",
    location: "Central Park Community Center",
    address: "123 Park Avenue, New York, NY",
    date: new Date(2025, 3, 15), // April 15, 2025
    time: "9:00 AM - 4:00 PM",
    organizer: "Red Cross",
    registered: 45,
    capacity: 100,
  },
  {
    id: 2,
    title: "Corporate Donation Camp",
    location: "TechHub Office Building",
    address: "456 Madison Ave, New York, NY",
    date: new Date(2025, 3, 20), // April 20, 2025
    time: "10:00 AM - 2:00 PM",
    organizer: "TechHub & Blood Services",
    registered: 32,
    capacity: 50,
  },
  {
    id: 3,
    title: "University Blood Drive",
    location: "State University Auditorium",
    address: "789 University Way, New York, NY",
    date: new Date(2025, 3, 25), // April 25, 2025
    time: "9:00 AM - 5:00 PM",
    organizer: "State University Health Services",
    registered: 67,
    capacity: 120,
  },
  {
    id: 4,
    title: "Neighborhood Blood Donation",
    location: "Westside Community Hall",
    address: "321 West End Ave, New York, NY",
    date: new Date(2025, 4, 5), // May 5, 2025
    time: "11:00 AM - 6:00 PM",
    organizer: "Westside Neighborhood Association",
    registered: 28,
    capacity: 80,
  },
  {
    id: 5,
    title: "Hospital Donation Day",
    location: "General Hospital",
    address: "555 Medical Plaza, New York, NY",
    date: new Date(2025, 4, 12), // May 12, 2025
    time: "8:00 AM - 8:00 PM",
    organizer: "General Hospital Blood Bank",
    registered: 93,
    capacity: 200,
  },
];

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewAll, setViewAll] = useState(true);
  
  // Filter events based on selected date
  const filteredEvents = viewAll 
    ? events 
    : events.filter(event => 
        selectedDate && 
        event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear()
      );

  // Get all dates with events for highlighting on calendar
  const eventDates = events.map(event => event.date);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blood Donation Events</h1>
        <p className="text-gray-600 mb-8">Find upcoming blood donation drives and camps in your area. Register to donate blood and save lives.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Event Calendar</h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                classNames={{
                  day_selected: "bg-blood-500 text-white hover:bg-blood-600",
                  day_today: "bg-blood-50 text-blood-600",
                }}
              />
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {selectedDate ? (
                    <>Selected: {format(selectedDate, "PPP")}</>
                  ) : (
                    <>No date selected</>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setViewAll(!viewAll)}
                >
                  {viewAll ? "Filter by Date" : "Show All Events"}
                </Button>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                {viewAll 
                  ? "Upcoming Events" 
                  : selectedDate 
                    ? `Events on ${format(selectedDate, "PPP")}` 
                    : "No Date Selected"
                }
              </h2>

              {filteredEvents.length > 0 ? (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {filteredEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className="border border-gray-200 rounded-lg p-5 hover:border-blood-200 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <Badge variant="outline" className="border-blood-200 text-blood-600">
                          {event.registered}/{event.capacity} registered
                        </Badge>
                      </div>
                      
                      <div className="mt-3 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{format(event.date, "PPPP")}, {event.time}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <div>
                            <div>{event.location}</div>
                            <div className="text-gray-500">{event.address}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>Organized by: {event.organizer}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button variant="default">
                          Register to Donate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-lg">No events found for the selected date</p>
                  <p className="mt-1">Try selecting another date or view all upcoming events</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setViewAll(true)}
                  >
                    Show All Events
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
