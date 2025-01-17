import BgHero from "../../assets/Images/BgHomePage.mp4";

function BgHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgHero} type="video/mp4" />
      </video>
      <div className="relative z-10 flex  items-center w-full h-full ml-80 -mt-24 bg-black bg-opacity-0">
        <div>
      <h1 className="text-black text-7xl font-inter font-bold whitespace-normal ">
  The Brand 
</h1>
<h1 className="text-black text-7xl font-inter font-bold whitespace-normal">
   You Want Here!
</h1>
</div>
      </div>
    </div>
  );
}

export default BgHomePage;
