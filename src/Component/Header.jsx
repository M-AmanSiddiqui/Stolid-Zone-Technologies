// import { Link } from "react-router-dom";
// import { RxDividerVertical } from "react-icons/rx";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { BsTwitterX } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import StolidLogo from "../assets/Images/StolidLogo.png";
// import { useState } from "react";

// function Header() {
//   const handleMailClick = () => {
//     window.open("mailto:info@stolidzonetechnologies.com", "_blank");
//   };

//   const openMap = () => {
//     window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
//   };

//   const DropdownMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     let closeTimeout;

//     const handleMouseEnter = () => {
//       clearTimeout(closeTimeout); // Cancel any pending close timeout
//       setIsOpen(true);
//     };

//     const handleMouseLeave = () => {
//       // Set a delay to close the dropdown (500ms delay now)
//       closeTimeout = setTimeout(() => {
//         setIsOpen(false);
//       }, 500); // Adjust the delay as needed (500ms in this case)
//     };

//     return (
//       <div
//         className="relative group"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Trigger for the dropdown */}
//         <button className="font-bold py-2 px-4 rounded">WHERE WE OPERATE</button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}  // Start from slightly below
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.2 }}  // Animate to original position
//             className="absolute left-0 shadow-lg bg-white p-4 mt-2 rounded-b-xl w-56"
//           >
//             <ul className="font-inter text-gray-700 font-bold text-md">
//               <li>
//                 <Link to="/REGION" className="block py-2 px-4 hover:bg-gray-100 rounded">
//                   REGION
//                 </Link>
//                 <hr className="mt-2" />
//               </li>
//               <li>
//                 <Link to="/MARKETPLACES" className="block py-4 px-4 hover:bg-gray-100 rounded">
//                   MARKETPLACES
//                 </Link>
//                 <hr />
//               </li>
//               <li>
//                 <Link
//                   to="/Shopping Cart Management"
//                   className="block py-3 px-4 hover:bg-gray-100 rounded"
//                 >
//                   Shopping Cart Management
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <header className="fixed top-0 left-0 h-40 w-full shadow-lg z-50 bg-transparent backdrop-blur-lg">
//       {/* Top info section */}
//       <div className="flex">
//         {/* Email */}
//         <div className="flex flex-col md:flex-row gap-1 justify-center ml-96 mt-4">
//           <motion.div
//             initial={{ x: -300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-2 text-sm md:text-base"
//           >
//             <MdOutlineMailOutline />
//             <Link onClick={handleMailClick} className="hover:underline font-inter">
//               info@stolidzonetechnologies.com
//             </Link>
//           </motion.div>
//           <RxDividerVertical className="text-2xl text-gray-600" />
//           {/* Address */}
//           <motion.div
//             initial={{ x: 300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-2 text-sm md:text-base"
//           >
//             <IoLocationOutline />
//             <Link onClick={openMap} className="hover:underline font-inter">
//               12501 Revere Ave, Cleveland, Ohio 44105
//             </Link>
//           </motion.div>
//         </div>
//         {/* Social Media Links */}
//         <div className="flex ml-80 gap-6 mt-4">
//           <Link
//             to="https://www.facebook.com/stolidzonetechnologies"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2"
//           >
//             <FaFacebookF className="text-[#0006FF]" />
//             <span className="text-[#0006FF]">Facebook</span>
//           </Link>
//           <Link
//             to="https://x.com/StolidzoneT"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2"
//           >
//             <BsTwitterX className="hover:text-blue-800" />
//             <span>Twitter</span>
//           </Link>
//           <Link
//             to="https://www.instagram.com/stolidzone_technologies/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2"
//           >
//             <FaLinkedinIn className="text-[#0006FF]" />
//             <span className="text-[#0006FF]">LinkedIn</span>
//           </Link>
//           <Link
//             to="https://www.instagram.com/stolidzone_technologies/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2"
//           >
//             <FaInstagram className="hover:text-blue-800" />
//             <span>Instagram</span>
//           </Link>
//         </div>
//       </div>

//       {/* Main Header Content */}
//       <div className="container mx-auto flex flex-wrap -mt-4 ml-0">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Link to="/">
//             <img
//               src={StolidLogo}
//               alt="StolidZone Technologies Logo"
//               className="w-28 sm:w-36 md:w-44 lg:w-52"
//             />
//           </Link>
//         </motion.div>

//         {/* Navigation Links */}
//         <motion.nav
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="md:flex md:items-center mt-12 ml-64 space-x-14 text-sm font-bold"
//         >
//           <Link to="/" className="hover:text-blue-600">
//             HOME
//           </Link>
//           <DropdownMenu />
//           <Link to="/what-we-do" className="hover:text-blue-600">
//             WHAT WE DO
//           </Link>
//           <Link to="/services" className="hover:text-blue-600">
//             SERVICES
//           </Link>
//         </motion.nav>

//         {/* Appointment Button */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mt-4 md:mt-0 ml-auto"
//         >
//           <Link to="/appointment">
//             <button className="bg-blue-600 text-white px-9 py-4 mt-14 rounded-full flex hover:bg-black text-sm md:text-base font-semibold">
//               For An Appointment
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import StolidLogo from "../assets/Images/StolidLogo.png";
import { useState } from "react";


function Header() {
  const handleMailClick = () => {
    window.open("mailto:info@stolidzonetechnologies.com", "_blank");
  };

  const openMap = () => {
    window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
  };

  const DropdownMenu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    let closeTimeout;

    const handleMouseEnter = () => {
      clearTimeout(closeTimeout);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      closeTimeout = setTimeout(() => {
        setIsOpen(false);
      }, 700);
    };

    return (
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="font-bold py-2 px-4 rounded">{title}</button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 shadow-lg bg-white p-4 mt-2 rounded-b-xl w-56"
          >
            <ul className="font-inter text-gray-700 font-bold text-md">
              {items.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.link}
                    className="block py-4 px-4 hover:bg-gray-100 rounded"
                  >
                    {item.name}
                  </Link>
                   {/* Render <hr> only if it's not the last item */}
         
                  {item.submenu && (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2 }}
    className="absolute left-52 -top-4 bg-white shadow-lg p-5 rounded-b-xl w-56"
  >
    <ul>
      {item.submenu.map((subitem, subIndex) => (
        <li key={subIndex}>
          <Link
            to={subitem.link}
            className="block py-4 px-4 hover:bg-gray-100 rounded"
          >
            {subitem.name}
          </Link>
          {/* Render <hr> only if it's not the last item */}
          {subIndex !== item.submenu.length - 1 && <hr className="mt-1" />}
        </li>
      ))}
    </ul>
  </motion.div>
)}

                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    );
  };

  const dropdownItems = {
    whereWeOperate: [
      {
        name: "REGION" ,
        link: "/REGION",
        submenu: [
          { name: "UNITED STATES", link: "/REGION/UNITED STATES" },
          { name: "EUROPE", link: "/REGION/EUROPE" },
          { name: "CANADA", link: "/REGION/CANADA" },
          { name: "MIDDLE EAST", link: "/REGION/UNITED STATES" },
        ],
      },


      {
        name: "MARKETPLACES",
        link: "/MARKETPLACES",
        submenu: [
          { name: "AMAZON", link: "/MARKETPLACES/AMAZON" },
          { name: "ETSY", link: "/MARKETPLACES/ETSY" },
          { name: "EBAY", link: "/MARKETPLACES/EBAY" },
          { name: "FACEBOOK SHOP", link: "/MARKETPLACES/FACEBOOK SHOP" },
          { name: "GOOGLE SHOP", link: "/MARKETPLACES/GOOGLE SHOP" },
          { name: "WALMART", link: "/MARKETPLACES/WALMART" },
        ],
      },

      {
        name: "SHOPPING CART MANAGEMENT",
        link: "/SHOPPINGCART",
        submenu: [
          { name: "SHOPIFY", link: "/SHOPPINGCART/SHOPIFY" },
          { name: "BIGCOMMERCE", link: "/SHOPPINGCART/BIGCOMMERCE" },
          { name: "WOOCOMMERCE", link: "/SHOPPINGCART/WOOCOMMERCE" },
          { name: "MAGENTO", link: "/SHOPPINGCART/MAGENTO" },
        ],
      },



    ],
    whatWeDo: [
      {
        name: "Strategy",
        link: "/strategy",
        submenu: [
          { name: "Planning", link: "/strategy/planning" },
          { name: "Execution", link: "/strategy/execution" },
        ],
      },
      { name: "Design", link: "/design" }, 
      { name: "Development", link: "/development" },
    ],
    services: [
      {
        name: "Web Development",
        link: "/web-development",
        submenu: [
          { name: "Frontend", link: "/web-development/frontend" },
          { name: "Backend", link: "/web-development/backend" },
        ],
      },
      { name: "App Development", link: "/app-development" },
      { name: "UI/UX Design", link: "/ui-ux-design" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 h-40 w-full shadow-lg z-50 bg-transparent backdrop-blur-lg">
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-1 justify-center ml-96 mt-4">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <MdOutlineMailOutline />
            <Link onClick={handleMailClick} className="hover:underline font-inter">
              info@stolidzonetechnologies.com
            </Link>
          </motion.div>
          <RxDividerVertical className="text-2xl text-gray-600" />
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <IoLocationOutline />
            <Link onClick={openMap} className="hover:underline font-inter">
              12501 Revere Ave, Cleveland, Ohio 44105
            </Link>
          </motion.div>
        </div>
        <div className="flex ml-80 gap-6 mt-4">
          <Link
            to="https://www.facebook.com/stolidzonetechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaFacebookF className="text-[#0006FF]" />
            <span className="text-[#0006FF]">Facebook</span>
          </Link>
          <Link
            to="https://x.com/StolidzoneT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsTwitterX className="hover:text-blue-800" />
            <span>Twitter</span>
          </Link>
          <Link
            to="https://www.instagram.com/stolidzone_technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedinIn className="text-[#0006FF]" />
            <span className="text-[#0006FF]">LinkedIn</span>
          </Link>
          <Link
            to="https://www.instagram.com/stolidzone_technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram className="hover:text-blue-800" />
            <span>Instagram</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap -mt-4 ml-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">
            <img
              src={StolidLogo}
              alt="StolidZone Technologies Logo"
              className="w-28 sm:w-36 md:w-44 lg:w-52"
            />
          </Link>
        </motion.div>

        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:flex md:items-center mt-12 ml-64 space-x-14 text-sm font-bold"
        >
          <Link to="/" className="hover:text-blue-600">
            HOME
          </Link>
          <DropdownMenu title="WHERE WE OPERATE" items={dropdownItems.whereWeOperate} />
          <DropdownMenu title="WHAT WE DO" items={dropdownItems.whatWeDo} />
          <DropdownMenu title="SERVICES" items={dropdownItems.services} />
        </motion.nav>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-0 ml-auto"
        >
          <Link to="/appointment">
            <button className="bg-blue-600 text-white px-9 py-4 mt-14 rounded-full flex hover:bg-black text-sm md:text-base font-semibold">
              For An Appointment
            </button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
