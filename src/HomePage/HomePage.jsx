
import Header from "../Component/Header";  
import Footer from "../Component/Footer";// Make sure the path is correct
import BgHomePage from "./Components/BgHomePage";
import Card from "./Components/Card";
import Agency from "./Components/Agency";
import Testimonials from "./Components/Testimonials";
import GlobalExpert from "./Components/GlobalExpert";
import SomeAnswer from "./Components/SomeAnswer";
function HomePage() {
  return (
    <div>
      <Header />
      
      <BgHomePage /><Card /><Agency /><Testimonials /><GlobalExpert /><SomeAnswer /><Footer />
    </div>
  );
}

export default HomePage;  // Only one export default per file
