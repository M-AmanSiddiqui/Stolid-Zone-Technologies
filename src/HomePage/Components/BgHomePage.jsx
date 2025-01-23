// // BgHomePage.js
// import BgHero from "../../assets/Images/BgHomePage.mp4";
// import { motion } from "framer-motion";

// function BgHomePage() {
  
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={BgHero} type="video/mp4" />
//       </video>

//       {/* Content Overlay */}
//       <div className="relative z-10 flex items-center justify-start ml-56 -mt-10 w-full h-full text-center">
       
//         <motion.div
//        className="items-center gap-2 text-sm md:text-base animate-slideUp"
//     >
     
    
//           <h1 className="text-black text-8xl font-inter font-bold">
//             The<span className="underline decoration-blue-700 decoration-[15px] underline-offset-2">Brand</span>



//           </h1>
//           <h1 className="text-black text-8xl font-inter font-bold mt-5">
//             You Want Here!
//           </h1></motion.div>
        
        
//       </div>
//     </div>
//   );
// }

// export default BgHomePage;

// BgHomePage.js

import BgHero from "../../assets/Images/BgHomePage.mp4";
import { motion } from "framer-motion";
import {  MdArrowOutward } from "react-icons/md";
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
      <div className="relative z-10 flex flex-col items-start justify-center ml-52 h-full space-y-6">
        {/* Headings */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-6xl md:text-8xl font-bold leading-tight">
            The
            <span className="underline decoration-blue-700 decoration-[10px] underline-offset-4">
              Brand
            </span>
          </h1>
          <h1 className="text-black text-6xl md:text-8xl font-bold mt-2">
            You Want Here!
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-900 text-lg md:text-xl font-medium max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Financial management is at the heart of sound business operations, and
          our consulting services in this domain are designed to ensure.
        </motion.p>
        <motion.div
  className="flex items-center space-x-4"
  initial={{ x: -300, opacity: 0 }} // Start animation from the left
  whileInView={{ x: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>
<button className="text-blue-600 bg-white px-9 py-4 mt-6 rounded-full flex hover:bg-blue-600 hover:text-white text-sm md:text-base font-semibold group">
               Make  An Appointment
               <MdArrowOutward className=" ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
             </button>
 <button className="text-blue-600 bg-white px-8 py-4 mt-6 rounded-full flex hover:bg-blue-600 hover:text-white text-sm md:text-base fontsemi-bold group">
                Our Services
               <MdArrowOutward className=" ml-2 text-2xl transform group-hover:rotate-45 transition-transform duration-300" />
             </button>
</motion.div>

      </div>
    </div>
  );
}

export default BgHomePage;
