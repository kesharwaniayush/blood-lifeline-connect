
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blood-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center rounded-full bg-blood-100 px-3 py-1 text-sm font-medium text-blood-700 mb-4">
              <span className="animate-pulse-slow mr-1">●</span> Urgent needs in your area
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Donate Blood, <span className="text-blood-600">Save Lives</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our network of donors and help connect people in need with life-saving blood donations. One donation can save up to three lives.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-md">
                <Link to="/register">
                  Become a Donor
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-md border-blood-200 text-blood-700 hover:bg-blood-50">
                <Link to="/request">
                  Request Blood
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-800">{['A+', 'B-', 'O+', 'AB+'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="ml-3 text-sm text-gray-600">
                <b>2,500+</b> donors have joined
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
              <div className="relative w-3/4 h-3/4">
                <Heart className="absolute inset-0 w-full h-full text-blood-500 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-white/70 backdrop-blur-sm" />
              </div>
            </div>
            <div className="absolute top-0 -right-4 transform -translate-y-1/4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blood-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A+</div>
                <div>
                  <div className="text-sm font-medium">Most Needed</div>
                  <div className="text-xs text-gray-500">Low inventory</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 -left-4 transform translate-y-1/4 bg-white rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blood-600">15 min</div>
                <div className="text-xs text-gray-500">Average donation time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blood-600">15,000+</div>
              <div className="text-sm text-gray-600">Donations Made</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blood-600">8,500+</div>
              <div className="text-sm text-gray-600">Active Donors</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blood-600">500+</div>
              <div className="text-sm text-gray-600">Blood Centers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blood-600">45,000+</div>
              <div className="text-sm text-gray-600">Lives Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
