import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager load Index for LCP optimization
import Index from "./pages/Index";

// Lazy load all other routes for code splitting
const Quiz = lazy(() => import("./pages/Quiz"));
const Loading = lazy(() => import("./pages/Loading"));
const Diagnosis = lazy(() => import("./pages/Diagnosis"));
const Delivery = lazy(() => import("./pages/Delivery"));
const OrderBump1 = lazy(() => import("./pages/OrderBump1"));
const OrderBump2 = lazy(() => import("./pages/OrderBump2"));
const UpsellDelivery = lazy(() => import("./pages/UpsellDelivery"));
const DownsellDelivery = lazy(() => import("./pages/DownsellDelivery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
    },
  },
});

// Minimal route loading fallback
const RouteFallback = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={0}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;