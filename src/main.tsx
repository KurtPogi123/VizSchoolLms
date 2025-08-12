import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col min-h-">
      <div>
        <App />
      </div>

      <footer>Footer</footer>
    </main>
  </StrictMode>
);
