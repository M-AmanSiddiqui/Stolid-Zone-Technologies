import BgHero from "../../assets/Images/BgHomePage.mp4";

function BgHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgHero} type="video/mp4" />
      </video>
    </div>
  );
}

export default BgHomePage;
