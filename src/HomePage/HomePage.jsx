
import Header from "../Component/Header";  
import Footer from "../Component/Footer";// Make sure the path is correct
import BgHomePage from "./Components/BgHomePage";
import Card from "./Components/Card";
import Agency from "./Components/Agency";
import Testimonials from "./Components/Testimonials";
import GlobalExpert from "./Components/GlobalExpert";
import SomeAnswer from "./Components/SomeAnswer";
import LatestNews from "./Components/LatestNews";
function HomePage() {
  return (
    <div className="overflow-hidden overflow-x-hidden">
      <Header />
      
      <BgHomePage /><Card /><Agency /><Testimonials /><GlobalExpert /><SomeAnswer /><LatestNews /><Footer />
    </div>
  );
}

export default HomePage;  // Only one export default per file
