
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import BloodAvailabilityStats from "@/components/BloodAvailabilityStats";
import EmergencyRequests from "@/components/EmergencyRequests";
import UpcomingEvents from "@/components/UpcomingEvents";
import DonationProcess from "@/components/DonationProcess";
import Testimonials from "@/components/Testimonials";
import DownloadApp from "@/components/DownloadApp";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BloodDemandForecast from "@/components/BloodDemandForecast";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Dashboard Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Blood Donation Dashboard</h2>
              <p className="mt-2 text-lg text-gray-600">Real-time blood availability and urgent requests in your area</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BloodAvailabilityStats />
              <EmergencyRequests />
              <div className="lg:col-span-2">
                <BloodDemandForecast />
              </div>
              <div className="lg:col-span-2">
                <UpcomingEvents />
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <DonationProcess />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Download App */}
        <DownloadApp />
        
        {/* Call to Action */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
