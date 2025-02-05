// import BgHero from "../../assets/Images/0204 (1).mp4";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function BgHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {/* <video
  className="absolute top-14 right-0 w-full h-auto min-h-screen object-cover sm:block hidden"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={BgHero} type="video/mp4" />
</video> */}

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-24 lg:px-32 h-full space-y-6">
        {/* Headings */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="flex gap-4 text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            The
            <span className="underline decoration-[#FD8C01] decoration-[10px] underline-offset-4">
              Brand
            </span>
          </h1>
          <h1 className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold lg:-mt-7  sm:-mt-5 md:-mt-5">
            You Want Here!
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-900 text-base sm:text-lg md:text-xl font-medium max-w-xl md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Financial management is at the heart of sound business operations, and
          our consulting services in this domain are designed to ensure.
        </motion.p>

       {/* Buttons */}
<motion.div
  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full"
  initial={{ x: -300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  <button className="sm:w-72 px-9 py-4 rounded-full flex bg-[#FD8C01] text-white text-sm sm:text-base font-semibold group">
    Make An Appointment
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
  <button className="sm:w-52 text-[#FD8C01] bg-white px-8 py-4 rounded-full flex hover:bg-white  text-sm sm:text-base font-semibold group">
    Our Services
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
</motion.div>


      </div>
    </div>
  );
}

export default BgHomePage;
