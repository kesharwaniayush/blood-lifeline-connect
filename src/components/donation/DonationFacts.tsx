
import { Heart } from "lucide-react";

const facts = [
  "Every 2 seconds someone needs blood in the US",
  "Only 37% of the population is eligible to donate",
  "Less than 10% of eligible donors actually donate",
  "One donation can save multiple lives",
  "Most donated red blood cells must be used within 42 days",
];

export const DonationFacts = () => {
  return (
    <div className="bg-blood-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="inline-block bg-white rounded-full p-3">
          <Heart className="h-10 w-10 text-blood-500" />
        </div>
        <h3 className="text-xl font-semibold mt-2">Did You Know?</h3>
      </div>
      <ul className="space-y-3">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start">
            <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
              <span className="block h-4 w-4 bg-blood-500 rounded-full"></span>
            </div>
            <span className="text-gray-700">{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationFacts;
