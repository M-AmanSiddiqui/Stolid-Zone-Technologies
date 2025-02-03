import TeamWorking1 from "../../assets/Images/TeamWorking1.jpg"; 
import TeamWorking2 from "../../assets/Images/TeamWorking2.jpg"; 
import TeamWorking3 from "../../assets/Images/TeamWorking3.jpg"; 
import { motion } from "framer-motion";

const SomeAnswer = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8 pb-16">
        {/* Left Side Content */}
        <div>
          <button className="text-sm font-medium text-[#FD8C01] bg-white px-4 py-2 rounded-lg mb-4">
            Get Some Question Answer
          </button>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -300, opacity: 0 }} // Start animation from the left
            whileInView={{ x: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 0.9 }} // Animation duration
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-snug">
              Share the joy of achieving <br />
              glorious moments & climb up to the top
            </h1>
          </motion.div>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                What is the typical duration of a consulting engagement?
              </summary>
              <p className="mt-2 text-gray-600">
                The consultancy industry is constantly evolving, with new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                What types of businesses do you work with?
              </summary>
              <p className="mt-2 text-gray-600">
                The consultancy industry is constantly evolving, with new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                How is the working process simplified?
              </summary>
              <p className="mt-2 text-gray-600">
                The consultancy industry is constantly evolving, with new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="relative">
          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <motion.img
              src={TeamWorking1}
              alt="Team working"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg shadow-lg w-full h-56 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={TeamWorking2}
              alt="Group discussion"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg shadow-lg w-full h-72 object-cover mt-12 lg:mt-24 sm:mt-0"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={TeamWorking3}
              alt="Team collaboration"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg shadow-lg w-full h-56 object-cover mt-4 lg:-mt-40 sm:mt-0"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeAnswer;
