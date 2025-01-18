// BgHomePage.js
import BgHero from "../../assets/Images/BgHomePage.mp4";

function BgHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgHero} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center">
        <div>
          <h1 className="text-white text-7xl font-inter font-bold">
            The Brand
          </h1>
          <h1 className="text-white text-7xl font-inter font-bold">
            You Want Here!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BgHomePage;
