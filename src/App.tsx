import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ChatBot } from "./components/common/chatBot";
import UnifiedServicePage from "./pages/UnifiedServicePage";
import ModularKitchen from "./pages/ModularKitchen/ModularKitchen";
import MainLayout from "./components/layout/MainLayout";

import { LeadProvider } from "./context/LeadContext";
import { LeadModal } from "./components/common/LeadModal";
import { ScrollToHash } from "./components/common/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LeadProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToHash />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services/modular" element={<ModularKitchen />} />
              <Route path="/services/:type" element={<UnifiedServicePage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <ChatBot />
        <LeadModal />
      </TooltipProvider>
    </LeadProvider>
  </QueryClientProvider>
);

export default App;
