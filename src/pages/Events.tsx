
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blood Donation Events</h1>
        <p className="text-gray-600 mb-8">This page will display upcoming blood donation events and camps.</p>
        <div className="bg-blood-50 p-12 rounded-lg flex items-center justify-center">
          <p className="text-blood-600 text-lg">Events calendar coming soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
