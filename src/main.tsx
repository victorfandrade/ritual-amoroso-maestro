import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hydrate instead of render for better performance with pre-rendered content
const root = document.getElementById("root")!;
createRoot(root).render(<App />);
