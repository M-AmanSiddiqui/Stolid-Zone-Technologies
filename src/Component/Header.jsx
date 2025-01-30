// import { Link } from "react-router-dom";
// import { Menu } from 'antd';
// import { RxDividerVertical } from "react-icons/rx";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
// import { BsTwitterX, BsSearch } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import StolidLogo from "../assets/Images/StolidLogo.png";
// import { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";


// const { SubMenu } = Menu;

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleMailClick = () => {
//     window.open("mailto:info@stolidzonetechnologies.com", "_blank");
//   };

//   const openMap = () => {
//     window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
//   };

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };
// const menuItems = [
//     {
//       key: 'home',
//       title: 'HOME',
//       // Since HOME is just a simple link, you can handle it directly without children
//       link: '/' // Assuming this goes to the homepage
//     },
//     {
//       key: 'whereWeOperate',
//       title: 'WHERE WE OPERATE',
//       children: [
//         {
//           key: 'region',
//           title: 'REGION',
//           children: [
//             { key: 'unitedStates', label: 'UNITED STATES', link: '/UNITED STATES' },
//             { key: 'europe', label: 'EUROPE', link: '/EUROPE' },
//             { key: 'canada', label: 'CANADA', link: '/CANADA' },
//             { key: 'middleEast', label: 'MIDDLE EAST', link: '/MIDDLE EAST' },
//           ],
//         },
//         {
//           key: 'marketplaces',
//           title: 'MARKETPLACES',
//           children: [
//             { key: 'amazon', label: 'AMAZON', link: '/AMAZON' },
//             { key: 'etsy', label: 'ETSY', link: '/ETSY' },
//             { key: 'ebay', label: 'EBAY', link: '/EBAY' },
//             { key: 'facebookShop', label: 'FACEBOOK SHOP', link: '/FACEBOOK SHOP' },
//             { key: 'googleShop', label: 'GOOGLE SHOP', link: '/GOOGLE SHOP' },
//             { key: 'walmart', label: 'WALMART', link: '/WALMART' },
//           ],
//         },
//         {
//           key: 'shoppingCart',
//           title: 'SHOPPING CART MANAGEMENT',
//           children: [
//             { key: 'shopify', label: 'SHOPIFY', link: '/SHOPIFY' },
//             { key: 'bigcommerce', label: 'BIGCOMMERCE', link: '/BIGCOMMERCE' },
//             { key: 'woocommerce', label: 'WOOCOMMERCE', link: '/WOOCOMMERCE' },
//             { key: 'magento', label: 'MAGENTO', link: '/MAGENTO' },
//           ],
//         },
//       ],
//     },
//     {
//       key: 'whatWeDo',
//       title: 'WHAT WE DO',
//       children: [
//         {
//           key: 'ecommerceMarketing',
//           title: 'E-COMMERCE MARKETING & ADVERTISING',
//           children: [
//             { key: 'ppcMarketing', label: 'PPC MARKETING', link: '/PPC MARKETING' },
//             { key: 'promotionStrategy', label: 'PROMOTION STRATEGY', link: '/PROMOTION STRATEGY' },
//             { key: 'dspAdvertising', label: 'DSP ADVERTISING', link: '/DSP ADVERTISING' },

//             { key: 'seoListing', label: 'SEARCH ENGINE AND LISTING OPTIMIZATION', link: '/SEARCH ENGINE AND LISTING OPTIMIZATION', 
//               children: [
//                 { key: 'phase1', label: 'SEARCH TERM OPTIMIZATION', link: '/SEARCH TERM OPTIMIZATION' },
//                 { key: 'phase2', label: 'INCREMENTAL INDEXING', link: '/INCREMENTAL INDEXING' },
//                 { key: 'phase3', label: 'MARKET SHARE', link: '/MARKET SHARE' },
//               ]
//             },

//             { key: 'companyCreation', label: 'COMPANY CREATION', link: '/COMPANY CREATION' },
//             { key: 'productLaunch', label: 'PRODUCT LAUNCHES', link: '/PRODUCT LAUNCHES' },
//           ],
//         },
//         {
//           key: 'marketplaceManagement',
//           title: 'FULL-SERVICE MARKETPLACE MANAGEMENT',
//           children: [
//             { key: 'adsManagement', label: 'ADS MANAGEMENT SERVICE', link: '/ADS MANAGEMENT SERVICE' },
//             { key: 'storeManagement', label: 'STORE MANAGEMENT SERVICE', link: '/STORE MANAGEMENT SERVICE' },
//             { 
//               key: 'vendorCentralManagement', // Unique key
//               label: 'VENDOR CENTRAL MANAGEMENT SERVICE', // Label for menu
//               link: '/VENDOR CENTRAL MANAGEMENT SERVICE' // Link to route
//             },
//             { 
//               key: 'postsManagement', // Unique key
//               label: 'POSTS MANAGEMENT SERVICE', // Label for menu
//               link: '/POSTS MANAGEMENT SERVICE' // Link to route
//             },
//             { 
//               key: 'logisticsAndFulfillment', // Unique key
//               label: 'LOGISTICS & FULFILLMENT SERVICE', // Label for menu
//               link: '/LOGISTICS & FULFILLMENT SERVICE' // Link to route
//             },
//             { 
//               key: 'goToMarketStrategies', // Unique key
//               label: 'GO TO MARKET STRATEGIES SERVICE', // Label for menu
//               link: '/GO TO MARKET STRATEGIES SERVICE' // Link to route
//             },
//             { 
//               key: 'sellerCentralManagement', // Unique key
//               label: 'SELLER CENTRAL MANAGEMENT SERVICE', // Label for menu
//               link: '/SELLER CENTRAL MANAGEMENT SERVICE' // Link to route
//             }
         
//           ],
//         },

//         {
//           key: 'auditandSuspension',
//           title: 'AUDIT AND SUSPENSION',
//           children: [
//             { key: 'brandprotection', label: 'BRAND PROTECTION', link: '/BRAND PROTECTION' },
//             { key: 'consumeraudit', label: 'CONSUMER INSIGHT AUDIT', link: '/CONSUMER INSIGHT AUDIT' },
//             { 
//               key: 'listing', // Unique key
//               label: 'LISTING REINSTATEMENT', // Label for menu
//               link: '/LISTING REINSTATEMENT' // Link to route
//             },
//             { 
//               key: 'accountsuspension', // Unique key
//               label: 'ACCOUNT SUSPENSION', // Label for menu
//               link: '/ACCOUNT SUSPENSION' // Link to route
//             },
         
           
         
//           ],
//         },


//         {
//           key: 'branding&visual',
//           title: 'BRANDING & VISUAL CONTENT',
//           children: [
//             { key: 'brandguidelines', label: 'BRAND GUIDELINES', link: '/BRAND GUIDELINES' },
//             { key: 'storebranding', label: 'STORE FRONT & BRANDING', link: '/STORE FRONT & BRANDING' },
//             { 
//               key: 'photography', // Unique key
//               label: 'PRODUCT PHOTOGRAPHY', // Label for menu
//               link: '/PRODUCT PHOTOGRAPHY' // Link to route
//             },
//             { 
//               key: 'videography', // Unique key
//               label: 'PRODUCT VIDEOPHOTOGRAPHY', // Label for menu
//               link: '/PRODUCT VIDEOPHOTOGRAPHY' // Link to route
//             },
//             { 
//               key: 'enhancedbrand', // Unique key
//               label: 'ENHANCED BRAND CONTENT A+ ', // Label for menu
//               link: '/ENHANCED BRAND CONTENT A+' // Link to route
//             },
        
//           ],
//         },



//         {
//           key: 'copywriting',
//           title: 'COPY WRITING AND OPTIMIZATION',
//           children: [
//             { key: 'copywriting',
//                label: 'COPY WRITING AND OPTIMIZATION',
//                 link: '/COPY WRITING AND OPTIMIZATION' },
//             { key: 'catalogsetup',
//                label: 'CATALOG SETUP SERVICES',
//                link: '/CATALOG SETUP SERVICES' },
//             { 
//               key: 'productdescription', // Unique key
//               label: 'PRODUCT DESCRIPTION WRITING SERVICES', // Label for menu
//               link: '/PRODUCT DESCRIPTION WRITING SERVICES' // Link to route
//             },
//             { 
//               key: 'productlisting', // Unique key
//               label: 'PRODUCT LISTING OPTIMIZATION', // Label for menu
//               link: '/PRODUCT LISTING OPTIMIZATION' // Link to route
//             },
//             { 
//               key: 'mainimage', // Unique key
//               label: 'MAIN IMAGE CTR HACK', // Label for menu
//               link: '/MAIN IMAGE CTR HACK' // Link to route
//             },
//             { 
//               key: 'updateandmaintenance', // Unique key
//               label: 'UPDATE AND MAINTENANCE', // Label for menu
//               link: '/UPDATE AND MAINTENANCE' // Link to route
//             }
         
//           ],
//         },

        
//       ],
//     },
//     {
//       key: 'services',
//       title: 'SERVICES',
//       children: [
//         { key: 'boostSales', label: 'BOOST YOUR SALES', link: '/BOOST YOUR SALES' },
//         { key: 'fbaWholesale', label: 'FBA WHOLESALE SERVICE', link: '/FBA WHOLESALE SERVICE' },
//         { key: 'productlaunch', label: 'PRODUCT LAUNCH SERVICE', link: '/PRODUCT LAUNCH SERVICE' },
//         { key: 'selleraccount', label: 'SELLER ACCOUNT MANAGEMENT SERVICE', link: '/SELLER ACCOUNT MANAGEMENT SERVICE' },
//       ],
//     },
//   ];
  

//   return (
//     <header className="fixed top-0 left-0 w-full shadow-lg z-50 bg-white h-40 bg-transparent backdrop-blur-2xl overflow-hidden overflow-x-hidden">

// <div className="flex">
//         <div className="flex flex-col md:flex-row gap-1 justify-center ml-96 mt-4 ">
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
//     <FaFacebookF className="text-[#1877F2]" />
//     <span className="text-[#1877F2]">Facebook</span>
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
//     <FaLinkedinIn className="text-[#0A66C2]" />
//     <span className="text-[#0A66C2]">LinkedIn</span>
//   </Link>
//   <Link
//     to="https://www.instagram.com/stolidzone_technologies/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaInstagram  className="text-[#E4405F]"/>
//     <span className="text-[#E4405F]">Instagram</span>
//   </Link>
// </div> 

//       </div>


//     <div className="flex justify-between items-center -mt-3 px-8">
//       <Link to="/">
//         <img src={StolidLogo} alt="StolidZone Logo" className="w-52" />
//       </Link>
//       <Menu
//   mode="horizontal"
//   className="flex-grow text-sm bg-transparent justify-center mt-12 font-bold"
//   triggerSubMenuAction="hover"
// >
//   {menuItems.map((item) => (
//     item.children ? (
//       <SubMenu
//       className="font-bold"
//         key={item.key}
//         title={item.title}
//         icon={null}
//         style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//       >
//         {item.children.map((subItem) => (
//           subItem.children ? (
//             <SubMenu
//             className="font-bold"
//               key={subItem.key}
//               title={subItem.title}
//               style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//             >
//               {subItem.children.map((child) => (
//                 child.children ? (
//                   <SubMenu
//                   className="font-bold"
//                     key={child.key}
//                     title={child.label}
//                     style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//                   >
//                     {child.children.map((subChild) => (
//                       <Menu.Item key={subChild.key} className="font-bold">
//                         <Link to={subChild.link}>{subChild.label}</Link>
//                       </Menu.Item>
//                     ))}
//                   </SubMenu>
//                 ) : (
//                   <Menu.Item key={child.key} className="font-bold">
//                     <Link to={child.link}>{child.label}</Link>
//                   </Menu.Item>
//                 )
//               ))}
//             </SubMenu>
//           ) : (
//             <Menu.Item key={subItem.key} className="font-bold">
//               <Link to={subItem.link}>{subItem.label}</Link>
//             </Menu.Item>
//           )
//         ))}
//       </SubMenu>
//     ) : (
//       <Menu.Item key={item.key} className="font-bold">  
//         <Link to={item.link || "#"}>{item.title}</Link>
//       </Menu.Item>
//     )
//   ))}
// </Menu>




      // <div>
      //   <motion.div
      //     initial={{ scale: 0.8, opacity: 0 }}
      //     animate={{ scale: 1, opacity: 1 }}
      //     transition={{ duration: 0.8 }}
      //     className="mt-4 md:mt-0 ml-auto"
      //   >
      //     <Link to="/appointment">
      //       <button className="bg-blue-600 text-white px-9 py-4 mt-12 rounded-full flex hover:bg-black text-sm md:text-base font-bold group">
      //         For An Appointment
      //         <MdArrowOutward className=" ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
      //       </button>
      //     </Link>
      //   </motion.div>
      // </div>
      // <div className="relative mt-3 flex items-center">
      //   <button
      //     onClick={handleSearchClick}
      //     className="bg-white text-black p-4 mt-9 ml-2 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110"
      //   >
      //     {!isSearchOpen ? <BsSearch size={20} /> : <MdOutlineCancel size={22} />}
      //   </button>
      //   <input
      //     type="text"
      //     placeholder="Search..."
      //     className={`ml-2 px-4 py-3 mt-9 rounded-full border-2 focus:outline-none transition-all duration-300 ease-in-out ${
      //       isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      //     }`}
      //   />
      // </div>
//     </div>
//   </header>
  
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline,MdArrowOutward,MdOutlineCancel } from "react-icons/md";
import { BsTwitterX,BsSearch  } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import StolidLogo from "../assets/Images/StolidLogo.png";
import { useState } from "react";
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';






const ResponsiveMenu = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const handleMailClick = () => window.open("mailto:info@stolidzonetechnologies.com", "_blank");
  const openMap = () => window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
  const handleSearchClick = () => setIsSearchOpen(!isSearchOpen);

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
    <header className="fixed top-0 left-0 w-full shadow-lg bg-white z-50 bg-transparent backdrop-blur-lg overflow-hidden overflow-x-hidden">
    <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto px-4 py-3">
      {/* Contact Info (will appear inside drawer for mobile) */}
    </div>
  
    <div className="flex justify-between items-center -mt-3 px-8">
      <Link to="/" className="flex  md:justify-start sm:justify-start w-full">
        <img src={StolidLogo} alt="StolidZone Logo" className="w-32 sm:w-40 md:w-52 max-w-full h-auto" />
      </Link>
  
      {/* Desktop Menu */}
      <div className="hidden sm:block justify-start">
        <Menu mode="horizontal" className="text-sm bg-transparent flex mt-6 font-bold" triggerSubMenuAction="hover">
          {menuItems.map((item) =>
            item.children ? (
              <Menu.SubMenu className="font-bold" key={item.key} title={item.title} icon={null}>
                {item.children.map((subItem) =>
                  subItem.children ? (
                    <Menu.SubMenu key={subItem.key} title={subItem.title}>
                      {subItem.children.map((child) => (
                        <Menu.Item key={child.key} className="font-bold">
                          <Link to={child.link}>{child.label}</Link>
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  ) : (
                    <Menu.Item key={subItem.key} className="font-bold">
                      <Link to={subItem.link}>{subItem.label}</Link>
                    </Menu.Item>
                  )
                )}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} className="font-bold">
                <Link to={item.link || "#"}>{item.title}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
  
      {/* Mobile Menu */}
      <div className="block sm:hidden  md:hidden">
        <button onClick={toggleDrawer} className="p-2">
          <MenuOutlined className="text-xl" />
        </button>
        <Drawer
  title="Menu"
  placement="right"
  visible={drawerVisible}
  onClose={toggleDrawer}
  width="100%" // Set width to 100% for smaller screens
  bodyStyle={{ padding: 0 }} // Remove padding from body for better control
>
  <div className="relative flex items-center">
    <button
      onClick={handleSearchClick}
      className="bg-white text-black p-4 mt-4  ml-2 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      {!isSearchOpen ? <BsSearch size={20} /> : <MdOutlineCancel size={22} />}
    </button>
    <input
      type="text"
      placeholder="Search..."
      className={`ml-2 px-4 py-3 mt-4 rounded-full border-2 focus:outline-none transition-all duration-300 ease-in-out ${
        isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      }`}
    />
  </div>

  {/* Mobile Menu Items */}
  <Menu mode="inline" className="font-bold ">
    {menuItems.map((item) =>
      item.children ? (
        <Menu.SubMenu key={item.key} title={item.title}>
          {item.children.map((subItem) =>
            subItem.children ? (
              <Menu.SubMenu key={subItem.key} title={subItem.title}>
                {subItem.children.map((child) => (
                  <Menu.Item key={child.key} className="font-bold">
                    <Link to={child.link}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={subItem.key} className="font-bold">
                <Link to={subItem.link}>{subItem.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.key} className="font-bold">
          <Link to={item.link || "#"}>{item.title}</Link>
        </Menu.Item>
      )
    )}
  </Menu>

  {/* Contact Info in Drawer */}
  <div className="flex flex-col gap-3 md:gap-6 mt-8 px-4">
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
    <RxDividerVertical className="hidden md:block text-2xl text-gray-600" />
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

  {/* Social Links in Drawer for Mobile */}
  <div className="flex flex-col gap-4 mt-4 px-4">
    <Link
      to="https://www.facebook.com/stolidzonetechnologies"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <FaFacebookF className="text-[#1877F2]" />
      <span className="text-[#1877F2]">Facebook</span>
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
      to="https://www.linkedin.com/company/stolidzone-technologies/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <FaLinkedinIn className="text-[#0A66C2]" />
      <span className="text-[#0A66C2]">LinkedIn</span>
    </Link>
    <Link
      to="https://www.instagram.com/stolidzone_technologies/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <FaInstagram className="text-[#E4405F]" />
      <span className="text-[#E4405F]">Instagram</span>
    </Link>
  </div>

  {/* Appointment Button */}
  <div className="mt-4 md:mt-0 ml-auto px-4">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/appointment">
        <button className="bg-blue-600 text-white px-9 py-4 mt-12 rounded-full flex hover:bg-black text-sm md:text-base font-bold group">
          For An Appointment
          <MdArrowOutward className="ml-2 text-2xl font-extrabold transform group-hover:rotate-45 transition-transform duration-300" />
        </button>
      </Link>
    </motion.div>
  </div>
</Drawer>

      </div>
    </div>
  </header>
    
  );
};

export default ResponsiveMenu;
