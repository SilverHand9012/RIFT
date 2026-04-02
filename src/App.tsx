import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import FAQs from "./pages/FAQs";
// import Jury from "./pages/Jury";
// import Team from "./pages/Team";
import Workshops from "./pages/Workshops";
import Divisions from "./pages/Divisions";
import PreSummit from "./pages/PreSummit";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/layout/ScrollToTop";
import Loader from "./components/layout/Loader";
import SmoothScroll from "./components/layout/SmoothScroll";
import PageTransition from "./components/layout/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/faqs" element={<PageTransition><FAQs /></PageTransition>} />
        {/* <Route path="/jury" element={<PageTransition><Jury /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} /> */}
        <Route path="/workshops" element={<PageTransition><Workshops /></PageTransition>} />
        <Route path="/divisions" element={<PageTransition><Divisions /></PageTransition>} />
        <Route path="/presummit" element={<PageTransition><PreSummit /></PageTransition>} />
        {/* <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} /> */}
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const isExactRoot = window.location.pathname === "/" && !window.location.hash;
  const [isLoading, setIsLoading] = useState(isExactRoot);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ── Full-screen loader (initial site load only) ── */}
        <AnimatePresence>
          {isLoading && (
            <Loader onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* ── Main application content ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BrowserRouter>
            <ScrollToTop />
            <SmoothScroll>
              <AnimatedRoutes />
            </SmoothScroll>
          </BrowserRouter>
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
