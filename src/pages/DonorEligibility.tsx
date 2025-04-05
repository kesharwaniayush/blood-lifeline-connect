
import React from 'react';
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Check, X } from "lucide-react";

const eligibilityCriteria = [
  { 
    criteria: "Age", 
    description: "Between 18-65 years old",
    icon: Check 
  },
  { 
    criteria: "Weight", 
    description: "Minimum 50 kg",
    icon: Check 
  },
  { 
    criteria: "Health Conditions", 
    description: "No serious chronic diseases",
    icon: Check 
  },
  { 
    criteria: "Recent Donation", 
    description: "At least 3 months since last donation",
    icon: Check 
  },
  { 
    criteria: "Hemoglobin Levels", 
    description: "Minimum 12.5 g/dL for women, 13.5 g/dL for men",
    icon: Check 
  }
];

const DonorEligibility = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blood-50 to-white">
      <NavigationMenu />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-blood-700">Donor Eligibility Criteria</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-blood-100">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-blood-600">Quick Check</h2>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <item.icon className="h-6 w-6 text-green-500" />
                    <div>
                      <h3 className="font-medium text-blood-700">{item.criteria}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blood-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-blood-600">Important Notes</h2>
              <ul className="space-y-3">
                {[
                  "Temporary deferral for recent illness or travel",
                  "Medical screening before each donation",
                  "Confidential health assessment",
                  "No cost for health check-up"
                ].map((note, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                      <span className="block h-4 w-4 bg-blood-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonorEligibility;
