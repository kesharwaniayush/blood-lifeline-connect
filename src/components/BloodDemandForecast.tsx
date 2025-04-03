
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Droplets, MapPin, TrendingUp, Clock } from "lucide-react";

// Sample prediction data - this would come from an API in a real app
const predictionData = [
  {
    id: 1,
    bloodType: "O-",
    location: "Mumbai Central",
    prediction: "Critical Shortage",
    timeframe: "Next 7 days",
    currentStock: "Low",
    probability: 89,
    urgency: "high"
  },
  {
    id: 2,
    bloodType: "AB+",
    location: "Andheri East",
    prediction: "Moderate Shortage",
    timeframe: "Next 14 days",
    currentStock: "Medium",
    probability: 75,
    urgency: "medium"
  },
  {
    id: 3,
    bloodType: "B+",
    location: "Thane",
    prediction: "Potential Shortage",
    timeframe: "Next 21 days",
    currentStock: "Medium",
    probability: 65,
    urgency: "low"
  }
];

// Urgency level styling
const urgencyStyles = {
  high: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />
  },
  medium: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />
  },
  low: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    icon: <TrendingUp className="h-5 w-5 text-blue-500" />
  }
};

const BloodDemandForecast = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">AI Blood Demand Forecast</CardTitle>
            <CardDescription>
              Predictive analytics based on historical donation patterns
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">View All Forecasts</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {predictionData.map((prediction) => {
            const style = urgencyStyles[prediction.urgency as keyof typeof urgencyStyles];
            
            return (
              <Alert 
                key={prediction.id}
                className={`${style.bg} ${style.border} border`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {style.icon}
                  <div className="flex-1">
                    <AlertTitle className={`font-semibold ${style.text}`}>
                      {prediction.prediction} Expected
                    </AlertTitle>
                    <AlertDescription className="mt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Droplets className="h-4 w-4 text-blood-500" />
                          <span className="font-medium">{prediction.bloodType}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{prediction.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{prediction.timeframe}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        Our AI predicts a {prediction.probability}% probability of blood shortage based on 
                        historical donation patterns and current inventory levels.
                      </div>
                    </AlertDescription>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Button size="sm">Respond</Button>
                  </div>
                </div>
              </Alert>
            );
          })}
        </div>
        
        <div className="mt-6 text-sm text-gray-500 text-center">
          These predictions are generated using machine learning algorithms analyzing donation 
          patterns, seasonal variations, and local events.
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodDemandForecast;
