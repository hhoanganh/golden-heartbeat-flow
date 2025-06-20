import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import LoginRegister from "./pages/LoginRegister";
import FAQs from "./pages/FAQs";
import BookingPage from "./pages/BookingPage";
import QRCodeDisplay from "./pages/QRCodeDisplay"; // Import the new QRCodeDisplay page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// New ScrollToTop component to reset scroll position on route change
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]); // Re-run effect whenever the pathname changes

  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Wrap the Routes component with ScrollToTop */}
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booking/:eventId" element={<BookingPage />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/faqs" element={<FAQs />} />
            {/* New route for the QR Code Display page */}
            <Route path="/booking-success/:eventId" element={<QRCodeDisplay />} /> 
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;