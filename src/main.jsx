import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./ThemeContext"; // ✅ Import your ThemeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider> {/* ✅ Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
