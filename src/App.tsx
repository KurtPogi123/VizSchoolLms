import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";

import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/about";

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
      <main className="flex flex-col min-h-dvh">
        <NavBar />
        <ScrollToTop />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/about" element={<About />} />

            {/* Optional: Redirect unknown routes to the homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
