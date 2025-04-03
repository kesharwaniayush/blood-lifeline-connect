
import { cn } from "@/lib/utils";

// Define blood types and their rarity
const bloodTypes = [
  { type: "A+", count: 145, percentage: 35.7, className: "bg-blood-500" },
  { type: "A-", count: 17, percentage: 6.3, className: "bg-blood-400" },
  { type: "B+", count: 78, percentage: 8.5, className: "bg-blood-500" },
  { type: "B-", count: 8, percentage: 1.5, className: "bg-blood-400" },
  { type: "AB+", count: 24, percentage: 3.4, className: "bg-blood-500" },
  { type: "AB-", count: 4, percentage: 0.6, className: "bg-blood-400" },
  { type: "O+", count: 261, percentage: 37.4, className: "bg-blood-500" },
  { type: "O-", count: 27, percentage: 6.6, className: "bg-blood-400" },
];

export const BloodAvailabilityStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Blood Availability</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bloodTypes.map((blood) => (
          <div key={blood.type} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold", blood.className)}>
                {blood.type}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{blood.count}</div>
              <div className="text-xs text-gray-500">Donors Available</div>
            </div>
            
            <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={cn("h-full rounded-full", blood.className)}
                style={{ width: `${blood.percentage > 5 ? blood.percentage : 5}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{blood.percentage}% of donors</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-blood-500 hover:text-blood-600 text-sm font-medium">
          View detailed inventory →
        </button>
      </div>
    </div>
  );
};

export default BloodAvailabilityStats;
