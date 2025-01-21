import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sign Up To Our Newsletter</h2>
          <p className="mb-4">Subscribe to our Newsletter & Event right now to be updates</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md">Subscribe Now</button>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">What We Do</h2>
          <ul className="space-y-2">
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
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company Address</h2>
          <ul className="space-y-2">
            <li><a href="https://www.google.com/maps?q=12501+Revere+Ave+Cleveland,+Ohio+44105" target="_blank" rel="noopener noreferrer">12501 Revere Ave Cleveland, Ohio 44105</a></li>
            <li><a href="tel:+14403749502">Call: +14403749502</a></li>
            <li><a href="mailto:info@stolidzonetechnologies.com">Email: info@stolidzonetechnologies.com</a></li>
            <li>Timing: 8:00am - 17:00pm</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <p className="mb-4">Copyright © Stolid Zone Technologies. All rights reserved 2024</p>
        <div className="flex justify-center space-x-4">
          <Link to="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">F</Link>
          <Link to="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">X</Link>
          <Link to="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">In</Link>
          <Link to="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">Ig</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
