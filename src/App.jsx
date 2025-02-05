import  { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import HomePage from "./HomePage/HomePage";
import BoostSales from "./Services/BOOST YOUR SALES/BoostSales";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>  
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BoostSales" element={<BoostSales />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
