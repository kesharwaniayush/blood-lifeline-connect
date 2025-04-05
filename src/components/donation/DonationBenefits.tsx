
import { Check } from "lucide-react";

const benefits = [
  "Free health screening and vitals check",
  "Reduces risk of heart disease",
  "Burns calories (up to 650 per donation)",
  "Helps replenish blood cells",
  "Saves up to 3 lives with each donation",
];

export const DonationBenefits = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Benefits of Donating</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start">
            <div className="bg-blood-100 rounded-full p-1 mr-2 mt-0.5">
              <Check className="h-4 w-4 text-blood-600" />
            </div>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationBenefits;
