
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-blood-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center md:justify-between">
            <div className="max-w-lg md:mr-8 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
              <p className="text-blood-100">
                Join our community of donors today and help save lives. Your donation can make a tremendous impact on those in need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="text-blood-600" asChild>
                <Link to="/register">
                  Become a Donor
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-blood-500" asChild>
                <Link to="/request">
                  Request Blood
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
