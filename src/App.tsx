import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello React + Tailwind + Vite!</h1>
    </div>
  );
}

export default App;
