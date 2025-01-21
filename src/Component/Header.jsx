


// import { Link } from "react-router-dom";
// import { RxDividerVertical } from "react-icons/rx";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
// import { BsTwitterX, BsSearch } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import StolidLogo from "../assets/Images/StolidLogo.png";
// import { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";

// function Header() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const handleMailClick = () => {
  //   window.open("mailto:info@stolidzonetechnologies.com", "_blank");
  // };

  // const openMap = () => {
  //   window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
  // };

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const DropdownMenu = ({ title , items }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     let closeTimeout;

//     const handleMouseEnter = () => {
//       clearTimeout(closeTimeout);
//       setIsOpen(true);
//     };

//     const handleMouseLeave = () => {
//       closeTimeout = setTimeout(() => {
//         setIsOpen(false);
//       }, 700);
//     };

//     return (
//       <div
//         className="relative group"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <button className="font-bold py-2 px-4 rounded text-md  hover:text-blue-800">{title}</button>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2 }}
//             className="absolute left-0 shadow-lg bg-white p-4 mt-2 rounded-b-xl w-56"
//           >
//             <ul className="font-inter text-gray-700 font-bold text-md">
//               {items.map((item, index) => (
//                 <li key={index} className="relative group">
//                   <Link
//                     to={item.link}
//                     className="block py-4 px-4 hover:bg-gray-100 rounded "
//                   >
//                     {item.name}
                  
//                   </Link>
//                   {item.submenu && (
//                     <motion.div
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="left-52 -top-4 bg-white shadow-lg p-5 rounded-b-xl w-56"
//                     >
//                       <ul>
//                         {item.submenu.map((subitem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to={subitem.link}
//                               className="block py-4 px-4 hover:bg-gray-100 rounded"
//                             >
//                               {subitem.name}
//                             </Link>
//                             {subIndex !== item.submenu.length - 1 && (
//                               <hr className="mt-1" />
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     );
//   };

//   const dropdownItems = {
//     whereWeOperate: [
//       {
//         name: "REGION" ,
//         link: "/REGION",
//         submenu: [
//           { name: "UNITED STATES", link: "/REGION/UNITED STATES" },
//           { name: "EUROPE", link: "/REGION/EUROPE" },
//           { name: "CANADA", link: "/REGION/CANADA" },
//           { name: "MIDDLE EAST", link: "/REGION/UNITED STATES" },
//         ],
//       },


//       {
//         name: "MARKETPLACES",
//         link: "/MARKETPLACES",
//         submenu: [
//           { name: "AMAZON", link: "/MARKETPLACES/AMAZON" },
//           { name: "ETSY", link: "/MARKETPLACES/ETSY" },
//           { name: "EBAY", link: "/MARKETPLACES/EBAY" },
//           { name: "FACEBOOK SHOP", link: "/MARKETPLACES/FACEBOOK SHOP" },
//           { name: "GOOGLE SHOP", link: "/MARKETPLACES/GOOGLE SHOP" },
//           { name: "WALMART", link: "/MARKETPLACES/WALMART" },
//         ],
//       },

//       {
//         name: "SHOPPING CART MANAGEMENT",
//         link: "/SHOPPINGCART",
//         submenu: [
//           { name: "SHOPIFY", link: "/SHOPPINGCART/SHOPIFY" },
//           { name: "BIGCOMMERCE", link: "/SHOPPINGCART/BIGCOMMERCE" },
//           { name: "WOOCOMMERCE", link: "/SHOPPINGCART/WOOCOMMERCE" },
//           { name: "MAGENTO", link: "/SHOPPINGCART/MAGENTO" },
//         ],
//       },



//     ],




//     whatWeDo: [
//       {
//         name: "E-COMMERCE MARKETING & ADVERTISING",
//         link: "/E-COMMERCE MARKETING & ADVERTISING",
//         submenu: [
//           { name: "PPC MARKETING", link: "/E-COMMERCE MARKETING & ADVERTISING/PPC MARKETING" },
//           { name: "PROMOTION STRATEGY", link: "/E-COMMERCE MARKETING & ADVERTISING/PROMOTION STRATEGY" },
//           { name: "DSP ADVERTISING", link: "/E-COMMERCE MARKETING & ADVERTISING/DSP ADVERTISING" },
//           { name: "SEARCH ENGINE AND LISTING OPTIMIZATION", link: "/E-COMMERCE MARKETING & ADVERTISING/SEARCH ENGINE AND LISTING OPTIMIZATION" },
//           { name: "COMPANY CREATION", link: "/E-COMMERCE MARKETING & ADVERTISING/COMPANY CREATION" },
//           { name: "PRODUCT LAUNCHES", link: "/E-COMMERCE MARKETING & ADVERTISING/PRODUCT LAUNCHES" },
//         ],
//       },
//       {
//         name: "FULL-SERVICE MARKETPLACE MANAGEMENT",
//         link: "/FULL-SERVICE MARKETPLACE MANAGEMENT",
//         submenu: [
//           { name: "ADS MANAGEMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/ADS MANAGEMENT SERVICE"},
//           { name: "STORE MANAGEMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/STORE MANAGEMENT SERVICE" },
//           { name: "VENDOR CENTRAL MANAGEMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/VENDOR CENTRAL MANAGEMENT SERVICE" },
//           { name: "POSTS MANAGEMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/POSTS MANAGEMENT SERVICE" },
//           { name: "LOGISTICS & FULFILLMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/LOGISTICS & FULFILLMENT SERVICE" },
//           { name: "GO TO MARKET STRATEGIES SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/GO TO MARKET STRATEGIES SERVICE" },
//           { name: "SELLER CENTRAL MANAGEMENT SERVICE", link: "/FULL-SERVICE MARKETPLACE MANAGEMENT/GO TO MARKET STRATEGIES SERVICE" },
//         ],
//       },
//       {
//         name: "AUDIT AND SUSPENSION",
//         link: "/AUDIT AND SUSPENSION",
//         submenu: [
//           { name: "BRAND PROTECTION", link: "/AUDIT AND SUSPENSION/BRAND PROTECTION" },
//           { name: "CONSUMER INSIGHT AUDIT", link: "/AUDIT AND SUSPENSION/CONSUMER INSIGHT AUDIT" },
//           { name: "LISTING REINSTATEMENT", link: "/AUDIT AND SUSPENSION/LISTING REINSTATEMENT" },
//           { name: "ACCOUNT SUSPENSION", link: "/AUDIT AND SUSPENSION/ACCOUNT SUSPENSION" },
          
//         ],
//       },
//       {
//         name: "BRANDING & VISUAL CONTENT",
//         link: "/BRANDING & VISUAL CONTENT",
//         submenu: [
//           { name: "BRAND GUIDELINES", link: "/BRANDING & VISUAL CONTENT/BRAND GUIDELINES" },
//           { name: "STORE FRONT & BRANDING", link: "/BRANDING & VISUAL CONTENT/STORE FRONT & BRANDING" },
//           { name: "PRODUCT PHOTOGRAPHY", link: "/BRANDING & VISUAL CONTENT/PRODUCT PHOTOGRAPHY" },
//           { name: "PRODUCT VIDEOGRAPHY", link: "/BRANDING & VISUAL CONTENT/PRODUCT VIDEOGRAPHY" },
//           { name: "LISTING IMAGE EDITING & DESIGN SERVICE", link: "/BRANDING & VISUAL CONTENT/LISTING IMAGE EDITING & DESIGN SERVICE" },
//           { name: "ENHANCED BRAND CONTENT A+", link: "/BRANDING & VISUAL CONTENT/ENHANCED BRAND CONTENT A+" },
//         ],
//       },
//       {
//         name: "COPYWRITING AND OPTIMIZATION",
//         link: "/COPYWRITING AND OPTIMIZATION",
//         submenu: [
//           { name: "COPYWRITING & OPTIMIZATION SERVICE", link: "/COPYWRITING AND OPTIMIZATION/COPYWRITING & OPTIMIZATION SERVICE" },
//           { name: "CATALOG SETUP SERVICES", link: "/COPYWRITING AND OPTIMIZATION/CATALOG SETUP SERVICES" },
//           { name: "PRODUCT DESCRIPTION WRITING SERVICE", link: "/COPYWRITING AND OPTIMIZATION/PRODUCT DESCRIPTION WRITING SERVICE" },
//           { name: "PRODUCT LISTING OPTIMIZATION", link: "/COPYWRITING AND OPTIMIZATION/PRODUCT LISTING OPTIMIZATION" },
//           { name: "MAIN IMAGE CTR HACK", link: "/COPYWRITING AND OPTIMIZATION/MAIN IMAGE CTR HACK" },
//           { name: "UPDATE AND MAINTENANCE", link: "/COPYWRITING AND OPTIMIZATION/UPDATE AND MAINTENANCE" },
//         ],
//       },
      


//     ],
//     services: [
//       {
//         name: "BOOST YOUR SALES",
//         link: "/BOOST YOUR SALES",
//       },
//       {
//         name: "FBA WHOLESALE SERVICE",
//         link: "/FBA WHOLESALE SERVICE",
//       },
//       {
//         name: "PRODUCT LAUNCH SERVICE",
//         link: "/PRODUCT LAUNCH SERVICE",
//       },
//       {
//         name: "SELLER ACCOUNT MANAGEMENT SERVICE",
//         link: "/SELLER ACCOUNT MANAGEMENT SERVICE",
//       },
 
//     ],
//   };


//   return (
//     <header className="fixed top-0 left-0 h-40 w-full shadow-lg z-50 bg-transparent backdrop-blur-lg">
//       <div className="flex">
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

//         <div className="flex ml-80 gap-6 mt-4">
//   <Link
//     to="https://www.facebook.com/stolidzonetechnologies"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaFacebookF className="text-[#0006FF]" />
//     <span className="text-[#0006FF]">Facebook</span>
//   </Link>
//   <Link
//     to="https://x.com/StolidzoneT"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <BsTwitterX />
//     <span>Twitter</span>
//   </Link>
//   <Link
//     to="https://www.instagram.com/stolidzone_technologies/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaLinkedinIn className="text-[#0006FF]" />
//     <span className="text-[#0006FF]">LinkedIn</span>
//   </Link>
//   <Link
//     to="https://www.instagram.com/stolidzone_technologies/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaInstagram />
//     <span>Instagram</span>
//   </Link>
// </div>

//       </div>

//       <div className="container mx-auto flex flex-wrap -mt-4 ml-0">
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

//         <motion.nav
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="md:flex md:items-center mt-12 ml-64 space-x-14 text-sm font-bold"
//         >
//           <Link to="/" className="hover:text-blue-800">
//             HOME
//           </Link>
//           <DropdownMenu title="WHERE WE OPERATE" items={dropdownItems.whereWeOperate} />
//           <DropdownMenu title="WHAT WE DO" items={dropdownItems.whatWeDo} />
//           <DropdownMenu title="SERVICES" items={dropdownItems.services} />
//         </motion.nav>

//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mt-4 md:mt-0 ml-auto"
//         >
//           <Link to="/appointment">
//             <button className="bg-blue-600 text-white px-9 py-4 mt-14 rounded-full flex hover:bg-black text-sm md:text-base font-bold group">
//               For An Appointment
//               <MdArrowOutward className=" ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
//             </button>
//           </Link>
//         </motion.div>
        
//         {/* Search Icon */}
//         <div className="relative mt-4 -ml-12">
//   {/* Search Icon (Shows initially) */}
//   {!isSearchOpen && (
//     <button
//       onClick={handleSearchClick}
//       className="bg-white text-black p-4 mt-10 ml-14 rounded-full flex items-center justify-center  transform transition-transform duration-300 ease-in-out hover:scale-110"
//     >
//       <BsSearch size={20} />
//     </button>
//   )}

//   {/* Cancel Icon (Appears when search is open) */}
//   {isSearchOpen && (
//     <button
//       onClick={() => setIsSearchOpen(false)} // Close search when cancel is clicked
//       className="bg-white text-black p-4 mt-10 ml-14 rounded-full flex items-center justify-center  transform transition-transform duration-300 ease-in-out hover:scale-110"
  
//     >
//       <MdOutlineCancel size={22} />
//     </button>
//   )}

//   {/* Search Input */}
//   <input
//     type="text"
//     placeholder="Search..."
//     className={`absolute top-0 left-24 mt-11 ml-2 px-4 py-3 rounded-full border-2 border-none focus:outline-none transition-all duration-300 ease-in-out ${
//       isSearchOpen ? "w-64 opacity-100 pr-10" : "w-0 opacity-0"
//     }`}
//   />
// </div>

//       </div>
//     </header>
//   );
// }

// export default Header;




import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { RxDividerVertical } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
import { BsTwitterX, BsSearch } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import StolidLogo from "../assets/Images/StolidLogo.png";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";


const { SubMenu } = Menu;

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMailClick = () => {
    window.open("mailto:info@stolidzonetechnologies.com", "_blank");
  };

  const openMap = () => {
    window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
const menuItems = [
    {
      key: 'home',
      title: 'HOME',
      // Since HOME is just a simple link, you can handle it directly without children
      link: '/' // Assuming this goes to the homepage
    },
    {
      key: 'whereWeOperate',
      title: 'WHERE WE OPERATE',
      children: [
        {
          key: 'region',
          title: 'REGION',
          children: [
            { key: 'unitedStates', label: 'UNITED STATES', link: '/UNITED STATES' },
            { key: 'europe', label: 'EUROPE', link: '/EUROPE' },
            { key: 'canada', label: 'CANADA', link: '/CANADA' },
            { key: 'middleEast', label: 'MIDDLE EAST', link: '/MIDDLE EAST' },
          ],
        },
        {
          key: 'marketplaces',
          title: 'MARKETPLACES',
          children: [
            { key: 'amazon', label: 'AMAZON', link: '/AMAZON' },
            { key: 'etsy', label: 'ETSY', link: '/ETSY' },
            { key: 'ebay', label: 'EBAY', link: '/EBAY' },
            { key: 'facebookShop', label: 'FACEBOOK SHOP', link: '/FACEBOOK SHOP' },
            { key: 'googleShop', label: 'GOOGLE SHOP', link: '/GOOGLE SHOP' },
            { key: 'walmart', label: 'WALMART', link: '/WALMART' },
          ],
        },
        {
          key: 'shoppingCart',
          title: 'SHOPPING CART MANAGEMENT',
          children: [
            { key: 'shopify', label: 'SHOPIFY', link: '/SHOPIFY' },
            { key: 'bigcommerce', label: 'BIGCOMMERCE', link: '/BIGCOMMERCE' },
            { key: 'woocommerce', label: 'WOOCOMMERCE', link: '/WOOCOMMERCE' },
            { key: 'magento', label: 'MAGENTO', link: '/MAGENTO' },
          ],
        },
      ],
    },
    {
      key: 'whatWeDo',
      title: 'WHAT WE DO',
      children: [
        {
          key: 'ecommerceMarketing',
          title: 'E-COMMERCE MARKETING & ADVERTISING',
          children: [
            { key: 'ppcMarketing', label: 'PPC MARKETING', link: '/PPC MARKETING' },
            { key: 'promotionStrategy', label: 'PROMOTION STRATEGY', link: '/PROMOTION STRATEGY' },
            { key: 'dspAdvertising', label: 'DSP ADVERTISING', link: '/DSP ADVERTISING' },

            { key: 'seoListing', label: 'SEARCH ENGINE AND LISTING OPTIMIZATION', link: '/SEARCH ENGINE AND LISTING OPTIMIZATION', 
              children: [
                { key: 'phase1', label: 'SEARCH TERM OPTIMIZATION', link: '/SEARCH TERM OPTIMIZATION' },
                { key: 'phase2', label: 'INCREMENTAL INDEXING', link: '/INCREMENTAL INDEXING' },
                { key: 'phase3', label: 'MARKET SHARE', link: '/MARKET SHARE' },
              ]
            },

            { key: 'companyCreation', label: 'COMPANY CREATION', link: '/COMPANY CREATION' },
            { key: 'productLaunch', label: 'PRODUCT LAUNCHES', link: '/PRODUCT LAUNCHES' },
          ],
        },
        {
          key: 'marketplaceManagement',
          title: 'FULL-SERVICE MARKETPLACE MANAGEMENT',
          children: [
            { key: 'adsManagement', label: 'ADS MANAGEMENT SERVICE', link: '/ADS MANAGEMENT SERVICE' },
            { key: 'storeManagement', label: 'STORE MANAGEMENT SERVICE', link: '/STORE MANAGEMENT SERVICE' },
            { 
              key: 'vendorCentralManagement', // Unique key
              label: 'VENDOR CENTRAL MANAGEMENT SERVICE', // Label for menu
              link: '/VENDOR CENTRAL MANAGEMENT SERVICE' // Link to route
            },
            { 
              key: 'postsManagement', // Unique key
              label: 'POSTS MANAGEMENT SERVICE', // Label for menu
              link: '/POSTS MANAGEMENT SERVICE' // Link to route
            },
            { 
              key: 'logisticsAndFulfillment', // Unique key
              label: 'LOGISTICS & FULFILLMENT SERVICE', // Label for menu
              link: '/LOGISTICS & FULFILLMENT SERVICE' // Link to route
            },
            { 
              key: 'goToMarketStrategies', // Unique key
              label: 'GO TO MARKET STRATEGIES SERVICE', // Label for menu
              link: '/GO TO MARKET STRATEGIES SERVICE' // Link to route
            },
            { 
              key: 'sellerCentralManagement', // Unique key
              label: 'SELLER CENTRAL MANAGEMENT SERVICE', // Label for menu
              link: '/SELLER CENTRAL MANAGEMENT SERVICE' // Link to route
            }
         
          ],
        },

        {
          key: 'auditandSuspension',
          title: 'AUDIT AND SUSPENSION',
          children: [
            { key: 'brandprotection', label: 'BRAND PROTECTION', link: '/BRAND PROTECTION' },
            { key: 'consumeraudit', label: 'CONSUMER INSIGHT AUDIT', link: '/CONSUMER INSIGHT AUDIT' },
            { 
              key: 'listing', // Unique key
              label: 'LISTING REINSTATEMENT', // Label for menu
              link: '/LISTING REINSTATEMENT' // Link to route
            },
            { 
              key: 'accountsuspension', // Unique key
              label: 'ACCOUNT SUSPENSION', // Label for menu
              link: '/ACCOUNT SUSPENSION' // Link to route
            },
         
           
         
          ],
        },


        {
          key: 'branding&visual',
          title: 'BRANDING & VISUAL CONTENT',
          children: [
            { key: 'brandguidelines', label: 'BRAND GUIDELINES', link: '/BRAND GUIDELINES' },
            { key: 'storebranding', label: 'STORE FRONT & BRANDING', link: '/STORE FRONT & BRANDING' },
            { 
              key: 'photography', // Unique key
              label: 'PRODUCT PHOTOGRAPHY', // Label for menu
              link: '/PRODUCT PHOTOGRAPHY' // Link to route
            },
            { 
              key: 'videography', // Unique key
              label: 'PRODUCT VIDEOPHOTOGRAPHY', // Label for menu
              link: '/PRODUCT VIDEOPHOTOGRAPHY' // Link to route
            },
            { 
              key: 'enhancedbrand', // Unique key
              label: 'ENHANCED BRAND CONTENT A+ ', // Label for menu
              link: '/ENHANCED BRAND CONTENT A+' // Link to route
            },
        
          ],
        },



        {
          key: 'copywriting',
          title: 'COPY WRITING AND OPTIMIZATION',
          children: [
            { key: 'copywriting',
               label: 'COPY WRITING AND OPTIMIZATION',
                link: '/COPY WRITING AND OPTIMIZATION' },
            { key: 'catalogsetup',
               label: 'CATALOG SETUP SERVICES',
               link: '/CATALOG SETUP SERVICES' },
            { 
              key: 'productdescription', // Unique key
              label: 'PRODUCT DESCRIPTION WRITING SERVICES', // Label for menu
              link: '/PRODUCT DESCRIPTION WRITING SERVICES' // Link to route
            },
            { 
              key: 'productlisting', // Unique key
              label: 'PRODUCT LISTING OPTIMIZATION', // Label for menu
              link: '/PRODUCT LISTING OPTIMIZATION' // Link to route
            },
            { 
              key: 'mainimage', // Unique key
              label: 'MAIN IMAGE CTR HACK', // Label for menu
              link: '/MAIN IMAGE CTR HACK' // Link to route
            },
            { 
              key: 'updateandmaintenance', // Unique key
              label: 'UPDATE AND MAINTENANCE', // Label for menu
              link: '/UPDATE AND MAINTENANCE' // Link to route
            }
         
          ],
        },

        
      ],
    },
    {
      key: 'services',
      title: 'SERVICES',
      children: [
        { key: 'boostSales', label: 'BOOST YOUR SALES', link: '/BOOST YOUR SALES' },
        { key: 'fbaWholesale', label: 'FBA WHOLESALE SERVICE', link: '/FBA WHOLESALE SERVICE' },
        { key: 'productlaunch', label: 'PRODUCT LAUNCH SERVICE', link: '/PRODUCT LAUNCH SERVICE' },
        { key: 'selleraccount', label: 'SELLER ACCOUNT MANAGEMENT SERVICE', link: '/SELLER ACCOUNT MANAGEMENT SERVICE' },
      ],
    },
  ];
  

  return (
    <header className="fixed top-0  left-0 w-full shadow-lg z-50 h-40 bg-transparent backdrop-blur-lg ">

<div className="flex">
        <div className="flex flex-col md:flex-row gap-1 justify-center ml-96 mt-4 ">
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
    className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
  >
    <FaFacebookF className="text-[#0006FF]" />
    <span className="text-[#0006FF]">Facebook</span>
  </Link>
  <Link
    to="https://x.com/StolidzoneT"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
  >
    <BsTwitterX />
    <span>Twitter</span>
  </Link>
  <Link
    to="https://www.instagram.com/stolidzone_technologies/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
  >
    <FaLinkedinIn className="text-[#0006FF]" />
    <span className="text-[#0006FF]">LinkedIn</span>
  </Link>
  <Link
    to="https://www.instagram.com/stolidzone_technologies/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
  >
    <FaInstagram />
    <span>Instagram</span>
  </Link>
</div>

      </div>


    <div className="flex justify-between items-center -mt-3 px-8">
      <Link to="/">
        <img src={StolidLogo} alt="StolidZone Logo" className="w-52" />
      </Link>
      <Menu
  mode="horizontal"
  className="flex-grow text-sm bg-transparent justify-center mt-12 font-bold"
  triggerSubMenuAction="hover"
>
  {menuItems.map((item) => (
    item.children ? (
      <SubMenu
        key={item.key}
        title={item.title}
        icon={null}
        style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
      >
        {item.children.map((subItem) => (
          subItem.children ? (
            <SubMenu
              key={subItem.key}
              title={subItem.title}
              style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
            >
              {subItem.children.map((child) => (
                child.children ? (
                  <SubMenu
                    key={child.key}
                    title={child.label}
                    style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
                  >
                    {child.children.map((subChild) => (
                      <Menu.Item key={subChild.key}>
                        <Link to={subChild.link}>{subChild.label}</Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={child.key}>
                    <Link to={child.link}>{child.label}</Link>
                  </Menu.Item>
                )
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={subItem.key}>
              <Link to={subItem.link}>{subItem.label}</Link>
            </Menu.Item>
          )
        ))}
      </SubMenu>
    ) : (
      <Menu.Item key={item.key}>
        <Link to={item.link || "#"}>{item.title}</Link>
      </Menu.Item>
    )
  ))}
</Menu>




      <div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-0 ml-auto"
        >
          <Link to="/appointment">
            <button className="bg-blue-600 text-white px-9 py-4 mt-12 rounded-full flex hover:bg-black text-sm md:text-base font-bold group">
              For An Appointment
              <MdArrowOutward className=" ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="relative mt-3 flex items-center">
        <button
          onClick={handleSearchClick}
          className="bg-white text-black p-4 mt-9 ml-2 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          {!isSearchOpen ? <BsSearch size={20} /> : <MdOutlineCancel size={22} />}
        </button>
        <input
          type="text"
          placeholder="Search..."
          className={`ml-2 px-4 py-3 mt-9 rounded-full border-2 focus:outline-none transition-all duration-300 ease-in-out ${
            isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
    </div>
  </header>
  
  );
};

export default Header;
