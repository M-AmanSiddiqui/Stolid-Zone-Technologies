
import { FaCogs, FaLightbulb, FaChartBar } from "react-icons"
 function HomeCard() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300 h-96" >
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <FaCogs className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Quality Client Services
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Unique Innovation Ideas
            </h3>
            <p className="text-gray-600 mt-2">
              Complete Design Toolkit – huge collection of elements, rich
              customization
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <FaChartBar className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
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



    </div>
  )
}
export default HomeCard
