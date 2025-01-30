import {  FaLightbulb, FaChartBar, FaCog } from "react-icons/fa"; // Example icons
import { motion } from "framer-motion";
function Card() {
  return (
    <div className="py-32  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
  className="flex items-center space-x-4"
  initial={{ x: -300, opacity: 0 }} // Start animation from the left
  whileInView={{ x: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
            <div className="bg-blue-50 p-5 rounded-full hover:bg-blue-600 hover:text-white text-blue-600">   <FaCog className=" text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Quality Client Services
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
  className="flex items-center space-x-4"
  initial={{ y: -300, opacity: 0 }} // Start animation from the left
  whileInView={{ y: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
           <div className="bg-blue-50 p-5 rounded-full hover:bg-blue-600 hover:text-white text-blue-600">   <FaLightbulb className=" text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Unique Innovation Ideas
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
  className="flex items-center space-x-4"
  initial={{ x: 300, opacity: 0 }} // Start animation from the left
  whileInView={{ x: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
            <div className="bg-blue-50 p-5 rounded-full hover:bg-blue-600 hover:text-white text-blue-600">   <FaChartBar className=" text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Business Growth Manage
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div> </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Card;
