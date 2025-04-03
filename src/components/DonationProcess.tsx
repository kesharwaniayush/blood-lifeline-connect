
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, User, Heart, Bell, Calendar } from "lucide-react";

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

export const DonationProcess = () => {
  return (
    <div className="bg-white py-16">
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
        
        {/* Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Benefits of Donating</h3>
            <ul className="space-y-3">
              {[
                "Free health screening and vitals check",
                "Reduces risk of heart disease",
                "Burns calories (up to 650 per donation)",
                "Helps replenish blood cells",
                "Saves up to 3 lives with each donation",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-blood-100 rounded-full p-1 mr-2 mt-0.5">
                    <Check className="h-4 w-4 text-blood-600" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blood-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="inline-block bg-white rounded-full p-3">
                <Heart className="h-10 w-10 text-blood-500" />
              </div>
              <h3 className="text-xl font-semibold mt-2">Did You Know?</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Every 2 seconds someone needs blood in the US",
                "Only 37% of the population is eligible to donate",
                "Less than 10% of eligible donors actually donate",
                "One donation can save multiple lives",
                "Most donated red blood cells must be used within 42 days",
              ].map((fact, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                    <span className="block h-4 w-4 bg-blood-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProcess;
