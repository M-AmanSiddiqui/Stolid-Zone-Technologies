// import { FaCogs, FaLightbulb } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa"; // Use FaChartLine if FaChartBar is unavailable

// function HomeCard() {
//   return (
//     <div className="py-44 px-48 bg-gradient-to-r from-gray-200 via-blue-300 to-gray-200">
//       <div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ml-20"> {/* Reduced gap from 20 to 8 */}
//           {/* Card 1 */}
//           <div className="bg-white shadow-md rounded-2xl p-12 text-center w-full md:w-[350px] lg:w-[450px] min-h-[300px]">
//             <div className="flex justify-center mb-4">
//             <div className="bg-gray-300 p-4 rounded-full"> <FaCogs className="text-blue-600 text-5xl" /></div>
//             </div>
//             <h3 className="text-2xl sm:text-3xl font-semibold text-black"> {/* Responsive font size */}
//               Quality Client Services
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Complete Design Toolkit – huge collection of elements, rich
//               customization
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white shadow-md rounded-2xl p-12 text-center w-full md:w-[350px] lg:w-[450px] min-h-[300px]">
//             <div className="flex justify-center mb-4">
//               <div className="bg-gray-300 p-4 rounded-full"> <FaLightbulb className="text-blue-600 text-5xl" /></div>
//             </div>
//             <h3 className="text-2xl sm:text-3xl font-semibold text-black">
//               Unique Innovation Ideas
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Complete Design Toolkit – huge collection of elements, rich
//               customization
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white shadow-md rounded-2xl p-12 text-center w-full md:w-[350px] lg:w-[450px]  min-h-[300px]">
//             <div className="flex justify-center mb-4">
//             <div className="bg-gray-300 p-4 rounded-full"> <FaChartLine className="text-blue-600 text-5xl" /></div>
//             </div>
//             <h3 className="text-2xl sm:text-3xl font-semibold text-black">
//               Business Growth Manage
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Complete Design Toolkit – huge collection of elements, rich
//               customization
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeCard;


// FeaturesSection.js
import { FaCogs, FaLightbulb, FaChartBar, FaCog } from "react-icons/fa"; // Example icons

function FeaturesSection() {
  return (
    <div className="py-32  bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
            <div className="bg-gray-300 p-5 rounded-full">   <FaCog className="text-blue-600 text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Quality Client Services
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
           <div className="bg-gray-300 p-5 rounded-full">   <FaLightbulb className="text-blue-600 text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Unique Innovation Ideas
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl lg:p-14 p-8 text-center">
            <div className="flex justify-center mb-4">
            <div className="bg-gray-300 p-5 rounded-full">   <FaChartBar className="text-blue-600 text-5xl" /></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Business Growth Manage
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
