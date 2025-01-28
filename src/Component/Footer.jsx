// import { Link } from "react-router-dom";
// import bgFooter from "../assets/Images/bgFooter.jpg";
// import FooterLogo from "../assets/Images/StolidLogo.png";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { MdLocationOn, MdCall, MdOutlineMailOutline, MdAccessTime } from "react-icons/md";
// import { MdArrowOutward } from "react-icons/md";

// const Footer = () => {
//   return (
//     <div className="relative text-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24">
//       {/* Background Image */}
//       <img
//         src={bgFooter}
//         alt="Footer Background"
//         className="absolute top-0 left-0  w-full object-cover z-0 h-full"
//       />

//     {/* Newsletter Section */}
// <div className="relative z-10 mb-16 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-center md:justify-center md:space-y-4 px-4 md:px-8 2xl:ml-32 sm:space-x-8 space-y-8 sm:space-y-0">
//   <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
//     Sign Up To Our Newsletter
//   </h2>
// <p className="bg-black">Subscribe to our Newsletter & Event right now to be updates</p>
//   <div className="flex flex-col sm:flex-row md:flex-row sm:items-center w-full  sm:w-auto gap-4 sm:gap-0">
//   <input
//     type="email"
//     placeholder="Email Address"
//     className="px-8 py-3 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] text-black rounded-full focus:outline-none sm:mb-4 md:mb-0"
//   />
//   <button className="text-white bg-blue-600 px-8 py-3 sm:flex-row sm:px-0 sm:py-3 md:px-6 md:py-3 sm-w-69 md:w-[200px] lg:w-[200px] xl:w-[250px] w-full rounded-full flex justify-center items-center hover:bg-black text-sm font-bold group sm:mt-4 md:mt-0">
//     Subscribe Now
//     <MdArrowOutward className="ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//   </button>
// </div>

// </div>



//       {/* Footer Content */}
//       <div className="relative z-10 bg-white text-gray-500 rounded-2xl p-8 sm:p-12 lg:p-20 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
        
//         {/* Newsletter Section */}
//         <div className=" sm:border-r-2 border-gray-200 sm:mb-0 mb-8">
//           <img className="mb-4" src={FooterLogo} alt="Footer Logo" />
//           <p className="text-sm sm:text-base">
//             Our consulting services encompass a broad range, including strategic planning, operational efficiency…
//           </p>
//           <div className="flex gap-3 mt-6">
//             <Link
//               to="https://www.facebook.com/stolidzonetechnologies"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gray-200 md:p-1 p-3 lg:p-2 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
//             >
//               <FaFacebookF className="text-[#1877F2]" />
//             </Link>
//             <Link
//               to="https://x.com/StolidzoneT"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gray-200 md:p-1 p-3 lg:p-2  rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
//             >
//               <BsTwitterX className="text-black" />
//             </Link>
//             <Link
//               to="https://www.linkedin.com/company/stolidzonetechnologies/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gray-200 md:p-1 p-3 lg:p-2  rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
//             >
//               <FaLinkedinIn className="text-[#0A66C2]" />
//             </Link>
//             <Link
//               to="https://www.instagram.com/stolidzone_technologies/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gray-200 md:p-1 p-3 lg:p-2  rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
//             >
//               <FaInstagram className="text-[#E4405F]" />
//             </Link>
//           </div>
//         </div>

//         {/* What We Do Section */}
//         <div className=" sm:border-r-2 border-gray-200">
//           <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">What We Do</h2>
//           <ul className="space-y-4 font-semibold">
//             <li>
//               <Link
//                 to="/store-management"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Store Management Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/logistics"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Logistics and Fulfillment Service
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/brand-guidelines"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Brand Guidelines
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/store-front"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Store Front and Branding
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/account-suspension"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Account Suspension
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/product-launches"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 Product Launches
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/ppc-marketing"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 PPC Marketing
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Links Section */}
//         <div className="sm:border-r-2 border-gray-200">
//           <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">Quick Links</h2>
//           <ul className="space-y-4 font-semibold">
//             <li>
//               <Link
//                 to="/about"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 ABOUT
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="group flex items-center hover:text-blue-600 transition duration-300"
//               >
//                 <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//                 CONTACT
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">Company Address</h2>
//           <ul className="space-y-3 font-semibold">
//             <li className="flex items-center gap-2 hover:text-blue-500">
//               <MdLocationOn className="text-blue-600 flex-shrink-0" />
//               <Link
//                 to="https://www.google.com/maps?q=12501+Revere+Ave+Cleveland,+Ohio+44105"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 12501 Revere Ave Cleveland, Ohio 44105
//               </Link>
//             </li>
//             <li className="flex items-center gap-2 hover:text-blue-500">
//               <MdCall className="text-blue-600" />
//               <Link to="tel:+14403749502">Call: +14403749502</Link>
//             </li>
//             <li className="flex items-center gap-2 hover:text-blue-500">
//   <MdOutlineMailOutline className="text-blue-600 flex-shrink-0" />
//   <Link to="mailto:info@stolidzonetechnologies.com" className="overflow-hidden text-ellipsis whitespace-nowrap">
//     info@stolidzonetechnologies.com
//   </Link>
// </li>

//             <li className="flex items-center gap-2">
//               <MdAccessTime className="text-blue-600" />
//               Timing: 8:00am - 17:00pm
//             </li>
//           </ul>
//         </div>

   



// </div>
// <div className="relative w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-12 px-4 sm:px-8 gap-4 whitespace-nowrap">
//   <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center">
//     Copyright © Stolid Zone Technologies. All rights reserved 2024
//   </h1>
//   <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 lg:gap-10 justify-center text-center">
//     <span className="text-white ">Terms of Use</span>
//     <Link className="text-white hover:underline cursor-pointer">Privacy and Policy</Link>
//   </div>
// </div>


//   </div>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import bgFooter from "../assets/Images/bgFooter.jpg";
import FooterLogo from "../assets/Images/StolidLogo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdLocationOn, MdCall, MdOutlineMailOutline, MdAccessTime, MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative text-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 overflow-hidden overflow-x-hidden">
      {/* Background Image */}
      <img
        src={bgFooter}
        alt="Footer Background"
        className="absolute top-0 left-0 w-full object-cover z-0 h-full"
      />
      
      {/* Newsletter Section */}
      <div className="relative z-10 mb-16 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-center md:justify-center md:space-y-4 px-4 md:px-8 2xl:ml-32 sm:space-x-8 space-y-8 sm:space-y-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
          Sign Up To Our Newsletter
        </h2>
        <p className="bg-black text-sm sm:text-base md:text-lg py-2 px-4 text-center sm:text-left">
          Subscribe to our Newsletter & Event right now to stay updated.
        </p>
        <div className="flex flex-col sm:flex-row md:flex-row sm:items-center w-full sm:w-auto gap-4 sm:gap-0">
          <input
            type="email"
            placeholder="Email Address"
            className="px-8 py-3 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] text-black rounded-full focus:outline-none sm:mb-4 md:mb-0"
          />
          <button className="text-white bg-blue-600 px-8 py-3 sm:flex-row sm:px-0 sm:py-3 md:px-6 md:py-3 sm:w-69 md:w-[200px] lg:w-[200px] xl:w-[250px] w-full rounded-full flex justify-center items-center hover:bg-black text-sm font-bold group sm:mt-4 md:mt-0">
            Subscribe Now
            <MdArrowOutward className="ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 bg-white text-gray-500 rounded-2xl p-8 sm:p-12 lg:p-20 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
        {/* About Section */}
        <div className="sm:border-r-2 border-gray-200 sm:mb-0 mb-8">
          <img className="mb-4" src={FooterLogo} alt="Footer Logo" />
          <p className="text-sm sm:text-base">
            Our consulting services encompass a broad range, including strategic planning, operational efficiency, and more.
          </p>
          <div className="flex gap-3 mt-6">
            <Link
              to="https://www.facebook.com/stolidzonetechnologies"
              target="_blank"
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
            >
              <FaFacebookF className="text-[#1877F2]" />
            </Link>
            <Link
              to="https://x.com/StolidzoneT"
              target="_blank"
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
            >
              <BsTwitterX className="text-black" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/stolidzonetechnologies/"
              target="_blank"
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
            >
              <FaLinkedinIn className="text-[#0A66C2]" />
            </Link>
            <Link
              to="https://www.instagram.com/stolidzone_technologies/"
              target="_blank"
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
            >
              <FaInstagram className="text-[#E4405F]" />
            </Link>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="sm:border-r-2 border-gray-200">
          <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">What We Do</h2>
          <ul className="space-y-4 font-semibold">
            <li>
              <Link
                to="/store-management"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Store Management Services
              </Link>
            </li>
            <li>
              <Link
                to="/logistics"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Logistics and Fulfillment Service
              </Link>
            </li>
            <li>
              <Link
                to="/brand-guidelines"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Brand Guidelines
              </Link>
            </li>
            <li>
              <Link
                to="/store-front"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Store Front and Branding
              </Link>
            </li>
            <li>
              <Link
                to="/account-suspension"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Account Suspension
              </Link>
            </li>
            <li>
              <Link
                to="/product-launches"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                Product Launches
              </Link>
            </li>
            <li>
              <Link
                to="/ppc-marketing"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                PPC Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="sm:border-r-2 border-gray-200">
          <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">Quick Links</h2>
          <ul className="space-y-4 font-semibold">
            <li>
              <Link
                to="/about"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="group flex items-center hover:text-blue-600 transition duration-300"
              >
                <MdArrowOutward className="mr-2 text-1xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-8 text-black underline underline-offset-8">Company Address</h2>
          <ul className="space-y-3 font-semibold">
            <li className="flex items-center gap-2 hover:text-blue-500">
              <MdLocationOn className="text-blue-600 flex-shrink-0" />
              <Link
                to="https://www.google.com/maps?q=12501+Revere+Ave+Cleveland,+Ohio+44105"
                target="_blank"
              >
                12501 Revere Ave Cleveland, Ohio 44105
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500">
              <MdCall className="text-blue-600" />
              <Link to="tel:+14403749502">Call: +14403749502</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500">
              <MdOutlineMailOutline className="text-blue-600 flex-shrink-0" />
              <Link to="mailto:info@stolidzonetechnologies.com">
                info@stolidzonetechnologies.com
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <MdAccessTime className="text-blue-600" />
              Timing: 8:00am - 17:00pm
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-12 px-4 sm:px-8 gap-4 whitespace-nowrap">
        <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center">
          Copyright © Stolid Zone Technologies. All rights reserved 2024
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 lg:gap-10 justify-center text-center">
          <span className="text-white">Terms of Use</span>
          <Link className="text-white hover:underline cursor-pointer">Privacy and Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
