import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-violet-600 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <Link className="text-2xl font-bold flex items-center mb-2" to={"/"}>
            <i className="fa-solid fa-truck-fast me-2"></i> E CART
          </Link>
          <p className="text-black-600">Designed and build with all the  love in the world by the luminar team with the help of our contributor.</p>
          <p>Code licensed Luminar,docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/landing-page" className="hover:text-gray-300">
                Landing Page
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-gray-300">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/watch-history" className="hover:text-gray-300">
                Watch History Page
              </Link>
            </li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Guides</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/react" className="hover:text-gray-300">
                React
              </Link>
            </li>
            <li>
              <Link to="/react-bootstrap" className="hover:text-gray-300">
                React Bootstrap
              </Link>
            </li>
            <li>
              <Link to="/react-router" className="hover:text-gray-300">
                React Router
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
         
          {/* Input and Arrow Button */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Your email"
              className="flex-1 p-2 rounded-l-md text-gray-800"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/color/48/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/color/48/instagram-new.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/color/48/twitter.png"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="GitHub"
                className="w-8 h-8 bg-black rounded-full"
              />
            </a>
            <a href="tel:+1234567890">
              <img
                src="https://img.icons8.com/color/48/phone.png"
                alt="Call"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} E CART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
