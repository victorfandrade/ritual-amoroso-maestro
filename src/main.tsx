import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Lazy load the main App for code splitting
const App = lazy(() => import("./App.tsx"));

// Minimal loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background" />
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>
);