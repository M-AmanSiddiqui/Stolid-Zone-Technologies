import BgHero from "../../assets/Images/BgHomePage.mp4";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function BgHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-14 sm:top-14 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgHero} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-24 lg:px-32 h-full space-y-6">
        {/* Headings */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            The
            <span className="underline decoration-blue-700 decoration-[10px] underline-offset-4">
              Brand
            </span>
          </h1>
          <h1 className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-2">
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
  <button className="sm:w-72 px-9 py-4 rounded-full flex bg-blue-600 text-white text-sm sm:text-base font-semibold group">
    Make An Appointment
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
  <button className="sm:w-52 text-blue-600 bg-white px-8 py-4 rounded-full flex hover:bg-blue-600 hover:text-white text-sm sm:text-base font-semibold group">
    Our Services
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
</motion.div>



        {/* <motion.div
  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 "
  initial={{ x: -300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  <button className="w-full sm:w-auto px-9 py-4 rounded-full flex bg-blue-600 text-white text-sm sm:text-base font-semibold group">
    Make An Appointment
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
  <button className="w-full sm:w-auto text-blue-600 bg-white px-8 py-4 rounded-full flex hover:bg-blue-600 hover:text-white text-sm sm:text-base font-semibold group">
    Our Services
    <MdArrowOutward className="ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
  </button>
</motion.div> */}
      </div>
    </div>
  );
}

export default BgHomePage;
