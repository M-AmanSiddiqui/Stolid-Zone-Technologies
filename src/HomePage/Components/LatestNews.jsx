

// import news1 from "../../assets/Images/news1.jpg";
// import news2 from "../../assets/Images/news2.webp";
// import news3 from "../../assets/Images/news3.jpg";
// import { FaCircleUser } from "react-icons/fa6";
// import { FaBook } from "react-icons/fa6";
// import { motion } from "framer-motion";
// function LatestNews() {
//   return (
//     <div className="bg-white py-16 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h4 className="text-blue-800 text-lg font-medium bg-gray-100 inline-block py-2 px-3 rounded-lg">
//             Latest News
//           </h4>
//           <h1 className="text-4xl sm:text-5xl font-bold mt-2">
//             Explore our stories & insights
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 pt-12 md:grid-cols-3 gap-8">
//           {/* News Card 1 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ x: -200, opacity: 0 }} // Start animation from the left
//   whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// > 
//  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <img
//               src={news1}
//               alt="Business Solution"
//               className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//             />
//             <div className="p-6">
//               <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
//                 <span className="text-gray-500 flex gap-2">
//                   <FaBook className="mt-1 text-blue-500" /> Business Solution
//                 </span>
//               </div>
//               <hr className="mt-6" />
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
//                 Essential for Effective Market Research & Analysis
//               </h3>
//               <hr className="mt-6" />
//               <div className="items-center text-lg mt-6 gap-4">
//                 <div className="flex items-center gap-2 font-semibold">
//                   <FaCircleUser size={32} className="text-gray-300" />
//                   <span className="-mt-5">Superadmin</span>
//                 </div>
//                 <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
//                   <span>September 10, 2024</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </motion.div>
//           {/* News Card 2 */}

//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ y: -200, opacity: 0 }} // Start animation from the left
//   whileInView={{ y: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <img
//               src={news2}
//               alt="Finance Solution"
//               className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//             />
//             <div className="p-6">
//               <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
//                 <span className="text-gray-500 flex gap-2">
//                   <FaBook className="mt-1 text-blue-500" /> Finance Solution
//                 </span>
//               </div>
//               <hr className="mt-6" />
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
//                 Digital Transformation Services Can Revolutionize
//               </h3>
//               <hr className="mt-6" />
//               <div className="items-center text-lg mt-6 gap-4">
//                 <div className="flex items-center gap-2 font-semibold">
//                   <FaCircleUser size={32} className="text-gray-300" />
//                   <span className="-mt-5">Superadmin</span>
//                 </div>
//                 <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
//                   <span>August 31, 2024</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </motion.div>
//           {/* News Card 3 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ x: 200, opacity: 0 }} // Start animation from the left
//   whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <img
//               src={news3}
//               alt="Investment Policy"
//               className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//             />
//             <div className="p-6">
//               <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
//                 <span className="text-gray-500 flex gap-2">
//                   <FaBook className="mt-1 text-blue-500" /> Investment Policy
//                 </span>
//               </div>
//               <hr className="mt-6" />
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
//                 The Ultimate Guide to Financial Advisory and Planning
//               </h3>
//               <hr className="mt-6" />
//               <div className="items-center text-lg mt-6 gap-4">
//                 <div className="flex items-center gap-2 font-semibold">
//                   <FaCircleUser size={32} className="text-gray-300" />
//                   <span className="-mt-5">Superadmin</span>
//                 </div>
//                 <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
//                   <span>March 15, 2024</span>
//                 </div>
//               </div>
//             </div>
//           </div>  </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestNews;


import news1 from "../../assets/Images/news1.jpg";
import news2 from "../../assets/Images/news2.webp";
import news3 from "../../assets/Images/news3.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { motion } from "framer-motion";

function LatestNews() {
  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-[#FD8C01] text-lg font-medium bg-gray-100 inline-block py-2 px-3 rounded-lg">
            Latest News
          </h4>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Explore our stories & insights
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {/* News Card 1 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -300, opacity: 0 }} // Start animation from the left
            whileInView={{ x: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 0.9 }} // Animation duration
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={news1}
                alt="Business Solution"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
                  <span className="text-gray-500 flex gap-2">
                    <FaBook className="mt-1 text-[#FD8C01]" /> Business Solution
                  </span>
                </div>
                <hr className="mt-6" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
                  Essential for Effective Market Research & Analysis
                </h3>
                <hr className="mt-6" />
                <div className="items-center text-lg mt-6 gap-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaCircleUser size={32} className="text-gray-300" />
                    <span className="-mt-5">Superadmin</span>
                  </div>
                  <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
                    <span>September 10, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* News Card 2 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ y: -200, opacity: 0 }} // Start animation from the left
            whileInView={{ y: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 0.9 }} // Animation duration
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={news2}
                alt="Finance Solution"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
                  <span className="text-gray-500 flex gap-2">
                    <FaBook className="mt-1 text-[#FD8C01]" /> Finance Solution
                  </span>
                </div>
                <hr className="mt-6" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
                  Digital Transformation Services Can Revolutionize
                </h3>
                <hr className="mt-6" />
                <div className="items-center text-lg mt-6 gap-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaCircleUser size={32} className="text-gray-300" />
                    <span className="-mt-5">Superadmin</span>
                  </div>
                  <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
                    <span>August 31, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* News Card 3 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: 200, opacity: 0 }} // Start animation from the left
            whileInView={{ x: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 0.9 }} // Animation duration
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={news3}
                alt="Investment Policy"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 font-semibold flex items-center gap-2">
                  <span className="text-gray-500 flex gap-2">
                    <FaBook className="mt-1 text-[#FD8C01]" /> Investment Policy
                  </span>
                </div>
                <hr className="mt-6" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
                  The Ultimate Guide to Financial Advisory and Planning
                </h3>
                <hr className="mt-6" />
                <div className="items-center text-lg mt-6 gap-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaCircleUser size={32} className="text-gray-300" />
                    <span className="-mt-5">Superadmin</span>
                  </div>
                  <div className="flex items-center text-xs ml-11 -mt-3 text-gray-500">
                    <span>March 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
