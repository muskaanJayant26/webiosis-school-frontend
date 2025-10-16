import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Parents from "./pages/Parents";
import Schools from "./pages/Schools";
import Teachers from "./pages/Teachers";
import AboutUs from "./pages/AboutUs";
import EventsPrograms from "./pages/EventsPrograms";
import NEP2020 from "./pages/NEP2020";
import Resources from "./pages/Resources";
import SchoolTimes from "./pages/SchoolTimes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<EventsPrograms />} />
          <Route path="/nep" element={<NEP2020 />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/times" element={<SchoolTimes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
