// import { Link } from "react-router-dom";
// import { FiSearch, FiUsers, FiBarChart2, FiBriefcase } from "react-icons/fi";
// import Testimonial1 from "../../assets/Images/Testimonial 1.webp";
// import Testimonial2 from "../../assets/Images/testimonial 2.webp";
// import Testimonial3 from "../../assets/Images/Testimonial 3.webp";
// import Testimonial4 from "../../assets/Images/Testimonial 4.webp";
// import Testimonial5 from "../../assets/Images/Testimonial 5.webp";
// import Testimonial6 from "../../assets/Images/Testimonial 6.webp";
// import Testimonial7 from "../../assets/Images/Testimonial 7.webp";
// import Testimonial8 from "../../assets/Images/Testimonial 8.webp";
// import Testimonial9 from "../../assets/Images/Testimonial 9.webp";
// import { MdArrowOutward } from "react-icons/md";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// const settings = {
//     infinite: true,             // Ensures infinite loop of slides
//     speed: 800,                 // Transition speed (in ms) for a smooth animation (lower value for quicker transitions)
//     slidesToShow: 5,            // How many slides to show at once
//     slidesToScroll: 1,          // How many slides to scroll at a time
//     autoplay: true,             // Enables autoplay
//     autoplaySpeed: 1700,        // Time delay between slides in ms (should be lower than speed)
//     cssEase: "linear",          // Smooth and continuous transition (use 'linear' for smooth flow)
//     pauseOnHover: false,        // Disables pause when hovering over the carousel
//     arrows: false,              // Optional: Remove arrows for a cleaner look
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  
// function Testimonials() {
//   return (
//     <div className="bg-gray-50 py-16 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h4 className="text-blue-800 text-lg font-medium bg-gray-100 inline-block py-2 px-3 rounded-lg">
//             Service We Provide
//           </h4>
//           <h1 className="text-4xl lg:text-5xl font-bold mt-2">
//             We are building future Together, <br /> Be with us
//           </h1>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Card 1 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ x: -200, opacity: 0 }} // Start animation from the left
//   whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white shadow-lg rounded-3xl p-12 transform transition-transform duration-300 ease-in-out hover:scale-110">
//             <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6 ">
//               <FiSearch className="w-8 h-8  " />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Strategic Solutions</h3>
//             <p className="text-gray-500">
//               Work incomprehensibly worked on the organization preparation &
//               execution capacities in this period.
//             </p>
//             <Link
//               to="/growth-consultants"
//               className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
//             >
//               Read More
//               <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//             </Link>
//           </div>
//           </motion.div>
//           {/* Card 2 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ y: -200, opacity: 0 }} // Start animation from the left
//   whileInView={{ y: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white shadow-lg rounded-3xl p-12  transform transition-transform duration-300 ease-in-out hover:scale-110">
//             <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
//               <FiUsers className="w-8 h-8"/>
//             </div>
//             <h3 className="text-xl font-bold mb-4">Growth Consultants</h3>
//             <p className="text-gray-500">
//               Work incomprehensibly worked on the organization preparation &
//               execution capacities in this period.
//             </p>
//             <Link
//               to="/growth-consultants"
//               className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
//             >
//               Read More
//               <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//             </Link>
//           </div>
//           </motion.div>
//           {/* Card 3 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ y: 200, opacity: 0 }} // Start animation from the left
//   whileInView={{ y: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white shadow-lg rounded-3xl p-12 transform transition-transform duration-300 ease-in-out hover:scale-110">
//             <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
//               <FiBarChart2 className="w-8 h-8 " />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Market Research</h3>
//             <p className="text-gray-500">
//               Work incomprehensibly worked on the organization preparation &
//               execution capacities in this period.
//             </p>
//             <Link
//               to="/growth-consultants"
//               className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
//             >
//               Read More
//               <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//             </Link>
//           </div>
//           </motion.div>
//           {/* Card 4 */}
//           <motion.div
//   className="flex items-center space-x-4"
//   initial={{ x: 200, opacity: 0 }} // Start animation from the left
//   whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//   transition={{ duration: 0.9 }} // Animation duration
// >
//           <div className="bg-white shadow-lg rounded-3xl p-12 transform transition-transform duration-300 ease-in-out hover:scale-110">
//             <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
//               <FiBriefcase className="w-8 h-8 " />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Tax Management</h3>
//             <p className="text-gray-500">
//               Work incomprehensibly worked on the organization preparation &
//               execution capacities in this period.
//             </p>
//             <Link
//               to="/growth-consultants"
//               className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
//             >
//               Read More
//               <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//             </Link>
//           </div>
//           </motion.div> </div>

//         {/* Partners Section */}
//         <div className="text-center mt-24">
//           <h3 className="text-3xl text-gray-600 font-bold mb-16">
//             — Built on the Trust and Success of Our Partner Companies —
//           </h3>

//           <Slider {...settings} className="pb-28 ">
//             <img
//               src={Testimonial1}
//               alt="Partner 1"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial2}
//               alt="Partner 2"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial3}
//               alt="Partner 3"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial4}
//               alt="Partner 4"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial5}
//               alt="Partner 5"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial6}
//               alt="Partner 6"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial7}
//               alt="Partner 7"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial8}
//               alt="Partner 8"
//               className="h-auto max-w-full object-contain"
//             />
//             <img
//               src={Testimonial9}
//               alt="Partner 9"
//               className="h-auto max-w-full object-contain"
//             />
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;


import { Link } from "react-router-dom";
import { FiSearch, FiUsers, FiBarChart2, FiBriefcase } from "react-icons/fi";
import Testimonial1 from "../../assets/Images/Testimonial 1.webp";
import Testimonial2 from "../../assets/Images/testimonial 2.webp";
import Testimonial3 from "../../assets/Images/Testimonial 3.webp";
import Testimonial4 from "../../assets/Images/Testimonial 4.webp";
import Testimonial5 from "../../assets/Images/Testimonial 5.webp";
import Testimonial6 from "../../assets/Images/Testimonial 6.webp";
import Testimonial7 from "../../assets/Images/Testimonial 7.webp";
import Testimonial8 from "../../assets/Images/Testimonial 8.webp";
import Testimonial9 from "../../assets/Images/Testimonial 9.webp";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
import { motion } from "framer-motion";

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1700,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false, // Optional: you can add arrows if needed
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-blue-800 text-lg font-medium bg-gray-100 inline-block py-2 px-3 rounded-lg">
            Service We Provide
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            We are building future Together, <br /> Be with us
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="bg-white shadow-lg rounded-3xl p-8 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
                <FiSearch className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Solutions</h3>
              <p className="text-gray-500">
                Work incomprehensibly worked on the organization preparation &
                execution capacities in this period.
              </p>
              <Link
                to="/growth-consultants"
                className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
              >
                Read More
                <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="bg-white shadow-lg rounded-3xl p-8 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Growth Consultants</h3>
              <p className="text-gray-500">
                Work incomprehensibly worked on the organization preparation &
                execution capacities in this period.
              </p>
              <Link
                to="/growth-consultants"
                className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
              >
                Read More
                <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="bg-white shadow-lg rounded-3xl p-8 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
                <FiBarChart2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Market Research</h3>
              <p className="text-gray-500">
                Work incomprehensibly worked on the organization preparation &
                execution capacities in this period.
              </p>
              <Link
                to="/growth-consultants"
                className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
              >
                Read More
                <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="bg-white shadow-lg rounded-3xl p-8 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="flex hover:bg-blue-700 text-blue-800 hover:text-white bg-blue-50 p-4 w-16 rounded-full mb-6">
                <FiBriefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tax Management</h3>
              <p className="text-gray-500">
                Work incomprehensibly worked on the organization preparation &
                execution capacities in this period.
              </p>
              <Link
                to="/growth-consultants"
                className="text-blue-800 hover:text-black font-medium text-lg mt-8 group flex"
              >
                Read More
                <MdArrowOutward className="ml-1 mt-1 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="text-center mt-24">
          <h3 className="text-3xl text-gray-600 font-bold mb-16">
            — Built on the Trust and Success of Our Partner Companies —
          </h3>

          <Slider {...settings} className="pb-28">
            <img
              src={Testimonial1}
              alt="Partner 1"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial2}
              alt="Partner 2"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial3}
              alt="Partner 3"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial4}
              alt="Partner 4"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial5}
              alt="Partner 5"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial6}
              alt="Partner 6"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial7}
              alt="Partner 7"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial8}
              alt="Partner 8"
              className="h-auto max-w-full object-contain"
            />
            <img
              src={Testimonial9}
              alt="Partner 9"
              className="h-auto max-w-full object-contain"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
