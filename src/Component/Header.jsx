
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import {  FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import StolidLogo from "../assets/Images/StolidLogo.png";

function Header() {
  const handleMailClick = () => {
    window.open("mailto:info@stolidzonetechnologies.com", "_blank");
  };

  const openMap = () => {
    window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
  };

  return (
    <header className="top-0 left-0 w-full shadow-lg">
      {/* Top info section  */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Email */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-sm md:text-base"
        > 
          <MdOutlineMailOutline />
          <Link onClick={handleMailClick} className="hover:underline ml-32 font-inter">
            info@stolidzonetechnologies.com    
          </Link>
        </motion.div>
        <RxDividerVertical />
        {/* Address */}
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

        {/* Social Media Links */}
        <div className="flex gap-4 text-blue-600">
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-800" />
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-800" />
          </Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-800" />
          </Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-blue-800" />
          </Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">
            <img
              src={StolidLogo}
              alt="StolidZone Technologies Logo"
              className="w-28 sm:w-36 md:w-44 lg:w-56"
            />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:flex md:items-center space-x-6 text-sm font-bold"
        >
          <Link
            to="/"
            className="hover:text-blue-600"
          >
            HOME
          </Link>
          <Link
            to="/where-we-operate"
            className="hover:text-blue-600"
          >
            WHERE WE OPERATE
          </Link>
          <Link
            to="/what-we-do"
            className="hover:text-blue-600"
          >
            WHAT WE DO
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-600"
          >
            SERVICES
          </Link>
        </motion.nav>

        {/* Appointment Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-0"
        >
          <Link to="/appointment">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base font-semibold">
              For An Appointment
            </button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
