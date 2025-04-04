
import { useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const bloodTypeOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const urgencyOptions = ["Normal", "Urgent", "Critical"];

const RequestBlood = () => {
  const [patientName, setPatientName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [units, setUnits] = useState("1");
  const [hospital, setHospital] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [urgency, setUrgency] = useState("Normal");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!patientName || !bloodType || !units || !hospital || !contactNumber || !date) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill out all required fields.",
      });
      return;
    }
    
    // Submit form (in a real app, this would be an API call)
    toast({
      title: "Request Submitted",
      description: "Your blood request has been submitted successfully!",
    });
    
    // Reset form
    setPatientName("");
    setBloodType("");
    setUnits("1");
    setHospital("");
    setContactNumber("");
    setDate(new Date());
    setUrgency("Normal");
    setAdditionalInfo("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Request Blood</h1>
        <p className="text-gray-600 mb-8">Fill out this form to request blood for a patient in need. All requests are verified before being sent to potential donors.</p>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Name */}
              <div className="space-y-2">
                <Label htmlFor="patient-name">Patient Name *</Label>
                <Input
                  id="patient-name"
                  placeholder="Enter patient name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
              </div>
              
              {/* Blood Type */}
              <div className="space-y-2">
                <Label htmlFor="blood-type">Blood Type *</Label>
                <select
                  id="blood-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select blood type</option>
                  {bloodTypeOptions.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              {/* Units */}
              <div className="space-y-2">
                <Label htmlFor="units">Units Required *</Label>
                <Input
                  id="units"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="Number of units"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  required
                />
              </div>
              
              {/* Hospital */}
              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital/Location *</Label>
                <Input
                  id="hospital"
                  placeholder="Enter hospital name"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  required
                />
              </div>
              
              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number *</Label>
                <Input
                  id="contact"
                  placeholder="Enter contact number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              
              {/* Required Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Required By Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Urgency */}
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level *</Label>
                <select
                  id="urgency"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  required
                >
                  {urgencyOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              {/* Additional Info */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="additional-info">Additional Information</Label>
                <textarea
                  id="additional-info"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                  placeholder="Enter any additional information..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mt-8 flex flex-col space-y-2">
              <Button type="submit" className="w-full md:w-auto md:self-end" size="lg">
                Submit Blood Request
              </Button>
              <p className="text-sm text-gray-500 text-center md:text-right">* Required fields</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestBlood;
