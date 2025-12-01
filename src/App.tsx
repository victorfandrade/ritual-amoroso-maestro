import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Loading from "./pages/Loading";
import Diagnosis from "./pages/Diagnosis";
import Delivery from "./pages/Delivery";
import OrderBump1 from "./pages/OrderBump1";
import OrderBump2 from "./pages/OrderBump2";
import UpsellDelivery from "./pages/UpsellDelivery";
import DownsellDelivery from "./pages/DownsellDelivery";
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
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/order-bump-1" element={<OrderBump1 />} />
          <Route path="/order-bump-2" element={<OrderBump2 />} />
          <Route path="/upsell-delivery" element={<UpsellDelivery />} />
          <Route path="/downsell-delivery" element={<DownsellDelivery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
