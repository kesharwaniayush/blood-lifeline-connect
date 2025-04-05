
import DonationSteps from "@/components/donation/DonationSteps";
import DonationBenefits from "@/components/donation/DonationBenefits";
import DonationFacts from "@/components/donation/DonationFacts";

export const DonationProcess = () => {
  return (
    <div className="bg-white py-16">
      <DonationSteps />
      
      {/* Benefits Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <DonationBenefits />
          <DonationFacts />
        </div>
      </div>
    </div>
  );
};

export default DonationProcess;
