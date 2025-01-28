import agency1 from "../../assets/Images/Agency team.webp"
import agency2 from "../../assets/Images/Agency team1.jpg"
import agency3 from "../../assets/Images/aency2.webp"
import agency4 from "../../assets/Images/agency 4.jpeg"
import {  MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Agency() {
  return (
    <div className="bg-white px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h4 className="text-blue-800 text-lg font-medium bg-gray-50 inline-block py-1 px-3 rounded-lg">
            About Us
          </h4>
          <h1 className="text-4xl lg:text-6xl font-bold mt-6">
            Meet our expert dynamic <br className="hidden lg:block" /> digital agency team
          </h1>
          <p className="mt-6 text-gray-500">
            Operational efficiency is another critical area where we provide substantial value. By <br className="hidden lg:block" />
            analyzing existing processes and workflows, we identify inefficiencies and bottlenecks that <br className="hidden lg:block" />
            can be eliminated or improved.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          {/* Left section */}
          <div className="lg:w-1/2 flex flex-col items-start gap-6">
          <motion.div
  className="flex items-center space-x-4"
  initial={{ y: -200, opacity: 0 }} // Start animation from the left
  whileInView={{ y: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
> <div className="flex items-center gap-4">
              <div className="bg-blue-700 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Digital Right Business Consultant
              </h3>
            </div></motion.div>
            <div className="flex items-center gap-4">
            <motion.div
  className="flex items-center space-x-4"
  initial={{ x: -200, opacity: 0 }} // Start animation from the left
  whileInView={{ x: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>   <div className="bg-blue-700 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12h3m-3 0a3 3 0 11-6 0 3 3 0 016 0zm-3-3v-3m0 6v3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Market Research & Analysis
              </h3>
              </motion.div> </div>
            <p className="mt-4 text-gray-600 text-lg">
              Call to ask any question +14403749502
            </p>
            <motion.div
  className="flex items-center space-x-4"
  initial={{ x: -200, opacity: 0 }} // Start animation from the left
  whileInView={{ x: 0, opacity: 1 }} // Animate to the center
  transition={{ duration: 0.7 }} // Animation duration
>
 <Link to="/appointment">
            <button className="bg-blue-600 text-white px-9 py-4 mt-12 rounded-full flex hover:bg-black text-sm md:text-base font-bold group">
              For An Appointment
              <MdArrowOutward className=" ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
          </div>

          {/* Right section */}
          <div className="lg:w-1/2 flex gap-4">
          <div className="w-1/2 flex flex-col gap-4">
              <img
                src={agency1}
                alt="Team 2"
                className="w-full rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <img
                src={agency3}
                alt="Team 3"
                className="w-full rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <img
                src={agency2}
                alt="Team 2"
                className="w-full rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <img
                src={agency4}
                alt="Team 3"
                className="w-full rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agency
