import  { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Correct import path for 'react-router-dom'
import HomePage from "./HomePage/HomePage"; // Make sure the path is correct

// ScrollToTop component to scroll to the top of the page on each route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>  {/* No need to wrap BrowserRouter here if it's in index.js */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
