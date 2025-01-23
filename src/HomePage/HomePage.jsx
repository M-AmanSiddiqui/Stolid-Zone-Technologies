
import Header from "../Component/Header";  
import Footer from "../Component/Footer";// Make sure the path is correct
import BgHomePage from "./Components/BgHomePage";
import HomeCard from "./Components/HomeCard";
function HomePage() {
  return (
    <div>
      <Header />
      
      <BgHomePage /><HomeCard /><Footer />
    </div>
  );
}

export default HomePage;  // Only one export default per file
