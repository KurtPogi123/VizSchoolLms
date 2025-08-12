import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./pages/Hero";

// ScrollToTop component to handle navigation scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        
        {/* Optional: Redirect unknown routes to the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;