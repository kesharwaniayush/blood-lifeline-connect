
import { User, Heart, Bell, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: User,
    title: "Register",
    description: "Create your donor profile with blood type and health information."
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book an appointment at a nearby donation center or event."
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Give blood safely with professional medical staff."
  },
  {
    icon: Bell,
    title: "Track Impact",
    description: "Receive updates when your blood helps someone."
  },
];

export const DonationSteps = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Donating blood is a simple process that takes about an hour from start to finish. 
          Here's what to expect when you donate with BloodLifeline.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-blood-200 hover:shadow-md transition-all">
              <div className="bg-blood-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blood-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-blood-200" />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button asChild size="lg">
          <Link to="/eligibility">
            Check Eligibility
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DonationSteps;
