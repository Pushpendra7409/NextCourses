// import React from 'react';
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div>
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Social and Logo Section */}
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto md:mx-0" />
          <p className="mt-4">Let's connect with our socials</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold uppercase mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms and Condition</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing and Refund</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Hire From Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Bug Bounty</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold uppercase mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Inertia</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold uppercase mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-gray-400">
            <li>+91 8109161752</li>
            <li>+91 9691778470</li>
            <li><a href="mailto:hello@sheryians.com" className="hover:text-white">hello@sheryians.com</a></li>
            <li>23-B, Indrapuri Sector C, Bhopal(MP), 462021</li>
          </ul>
        </div>
      </div>  
    </footer>
    </div>
    </>
  );
};

export default Footer;
