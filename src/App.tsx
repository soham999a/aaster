
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Numerology from "./pages/Numerology";
import Vastu from "./pages/Vastu";
import Astrology from "./pages/Astrology";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import IntroScreen from "./components/IntroScreen";

const queryClient = new QueryClient();

// AppContent component to handle routes and intro screen
const AppContent = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const isHomePage = location.pathname === '/';

  // Only show intro on home page on initial load
  useEffect(() => {
    // Only show intro if this is the home page and we haven't loaded any page yet
    if (isHomePage && !initialLoadDone) {
      // Show the intro
      setShowIntro(true);
      // Mark that we've done the initial load
      setInitialLoadDone(true);
    }
  }, [isHomePage, initialLoadDone]);

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowIntro(false);
    }, 1000);
  };

  return (
    <>
      <Toaster />
      <Sonner />
      {showIntro && isHomePage && (
        <IntroScreen
          onIntroComplete={handleIntroComplete}
        />
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/vastu" element={<Vastu />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
