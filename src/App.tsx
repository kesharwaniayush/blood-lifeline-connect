
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import DonorsList from "./pages/DonorsList";
import RequestBlood from "./pages/RequestBlood";
import DonationCenters from "./pages/DonationCenters";
import Events from "./pages/Events";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DonorProfile from "./pages/DonorProfile";
import DonorEligibility from "./pages/DonorEligibility";
import Admin from "./pages/Admin";
import DonorDashboard from "./pages/DonorDashboard";
import NeederDashboard from "./pages/NeederDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/donors" element={<DonorsList />} />
            <Route path="/request" element={<RequestBlood />} />
            <Route path="/centers" element={<DonationCenters />} />
            <Route path="/events" element={<Events />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<DonorProfile />} />
            <Route path="/eligibility" element={<DonorEligibility />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/donor-dashboard" element={<DonorDashboard />} />
            <Route path="/needer-dashboard" element={<NeederDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
