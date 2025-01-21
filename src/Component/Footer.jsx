import { Link } from "react-router-dom";
import bgFooter from "../assets/Images/bgFooter.jpg";
import FooterLogo from "../assets/Images/StolidLogo.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX} from "react-icons/bs"
import { MdLocationOn, MdCall, MdOutlineMailOutline, MdAccessTime } from "react-icons/md";

const Footer = () => {
  return (
<div className="relative text-white p-56">
  {/* Background Image */}
  <img
    src={bgFooter}
    alt=""
    className="absolute top-0  left-0 w-full object-cover z-0 h-full"  // Adjust the background height to fit well
  />
  
  <div className="relative z-10 mb-28 -mt-16 flex items-center space-x-64">
    <h2 className="text-5xl font-bold">Sign Up To Our Newsletter</h2>
    <div className="flex">
      <input
        type="email"
        placeholder="Email Address"
        className="px-8 ml-12 py-3 w-96 text-black rounded-full focus:outline-none"
      />
      <button className="bg-blue-600 px-7 py-3 w-52 absolute right-0 top-0 rounded-full">
        Subscribe Now
      </button>
    </div>
  </div>

  {/* Footer Content */}
  <div className="relative z-10 bg-white   text-gray-500 rounded-2xl p-24 max-w-10xl  grid grid-cols-1 md:grid-cols-4 gap-12">
    {/* Newsletter Section */}
    <div>
      <img className="mb-4" src={FooterLogo} alt="" />
      <p>Our consulting services encompass a broad range, including strategic planning, operational efficiency…</p>
      <div className="flex gap-2 mt-6">
     
      <Link
  to="https://www.facebook.com/stolidzonetechnologies"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
>
  <FaFacebookF className="text-[#1877F2]" />
</Link>

<Link
  to="https://x.com/StolidzoneT"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
>
  <BsTwitterX className="text-black" />
</Link>

<Link
  to="https://www.instagram.com/stolidzone_technologies/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
>
  <FaLinkedinIn className="text-[#0A66C2]" />
</Link>

<Link
  to="https://www.instagram.com/stolidzone_technologies/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gray-200 p-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
>
  <FaInstagram className="text-[#E4405F]" />
</Link>

  </div>
    </div>

    {/* About Section */}
    <div>
      <h2 className="text-xl font-bold mb-8 text-black">What We Do</h2>
      <ul className="space-y-3 font-semibold">
        <li><Link to="/store-management">Store Management Services</Link></li>
        <li><Link to="/logistics">Logistics and Fulfillment Service</Link></li>
        <li><Link to="/brand-guidelines">Brand Guidelines</Link></li>
        <li><Link to="/store-front">Store Front and Branding</Link></li>
        <li><Link to="/account-suspension">Account Suspension</Link></li>
        <li><Link to="/product-launches">Product Launches</Link></li>
        <li><Link to="/ppc-marketing">PPC Marketing</Link></li>
      </ul>
    </div>

    {/* Quick Links Section */}
    <div>
      <h2 className="text-xl font-bold mb-8 text-black">Quick Links</h2>
      <ul className="space-y-3 font-semibold">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h2 className="text-xl font-bold mb-8 text-black">Company Address</h2>
      <ul className="space-y-3 font-semibold">
      <li className="flex items-center gap-2">
        <MdLocationOn className="text-blue-600" />
        <a
          href="https://www.google.com/maps?q=12501+Revere+Ave+Cleveland,+Ohio+44105"
          target="_blank"
          rel="noopener noreferrer"
        >
          12501 Revere Ave Cleveland, Ohio 44105
        </a>
      </li>
      <li className="flex items-center gap-2">
        <MdCall className="text-blue-600" />
        <a href="tel:+14403749502">Call: +14403749502</a>
      </li>
      <li className="flex items-center gap-2">
        <MdOutlineMailOutline className="text-blue-600" />
        <a href="mailto:info@stolidzonetechnologies.com">
          info@stolidzonetechnologies.com
        </a>
      </li>
      <li className="flex items-center gap-2">
        <MdAccessTime className="text-blue-600" />
        Timing: 8:00am - 17:00pm
      </li>
    </ul>
    </div>
  </div>
</div>

  );
};

export default Footer;
