import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({
    usefulLinks: false,
    categories: false,
  });
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const usefulLinks = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Press", link: "#" },
  ];
  const privacyLinks = [
    { name: "Privacy", link: "#" },
    { name: "Terms", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Contact", link: "#" },
  ];
  const partnerLinks = [
    { name: "Partner", link: "#" },
    { name: "Franchise", link: "#" },
    { name: "Seller", link: "#" },
    { name: "Warehouse", link: "#" },
  ];
  return (
    <footer className="bg-white pt-8 lg:pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="hidden lg:flex">
          {/* Links Section */}
          <div className="w-[160px]">
            <h3 className="text-[16px] font-medium text-gray-900 mb-3">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[160px] -ml-8">
            <div className="mt-9">
              <ul className="space-y-2">
                {privacyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[160px] -ml-8">
            <div className="mt-9">
              <ul className="space-y-2">
                {partnerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex-1 ml-16">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[16px] font-medium text-gray-900">
                Categories
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              {/* First Column */}
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Airpodes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Camera
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Earphones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Mobile
                  </a>
                </li>
                
              </ul>
              {/* Second Column */}
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Mouse
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Printers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Processor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Refrigerator
                  </a>
                </li>
                
              </ul>
              {/* Third Column */}
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Trimmers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    TV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-gray-600 hover:text-gray-900"
                  >
                    Watches
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Footer */}
        <div className="lg:hidden">
          {/* Useful Links Section */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 flex justify-between items-center"
              onClick={() => toggleSection("usefulLinks")}
            >
              <span className="text-[16px] font-medium text-gray-900">
                Useful Links
              </span>
              {expandedSections.usefulLinks ? (
                <IoIosArrowUp className="w-5 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSections.usefulLinks && (
              <div className="pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    {usefulLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.link}
                          className="text-[14px] text-gray-600"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {privacyLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.link}
                          className="text-[14px] text-gray-600"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* Categories Section */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 flex justify-between items-center"
              onClick={() => toggleSection("categories")}
            >
              <span className="text-[16px] font-medium text-gray-900">
                Categories
              </span>
              {expandedSections.categories ? (
                <IoIosArrowUp className="w-5 h-5 text-gray-600" />
              ) : (
                <IoIosArrowDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSections.categories && (
              <div className="pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Airpodes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Camera
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Earphones
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Mobile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Mouse
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Printers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Processor
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Refrigerator
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Speakers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] text-gray-600">
                      Trimmers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Download Section - Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 mt-8 border-t border-gray-200 space-y-4 sm:space-y-0">
          <p className="text-[14px] text-gray-600 text-center sm:text-left">
            {" "}
            Goshop Commerce Private Limited, 2016-2025
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <span className="text-[14px] text-gray-600">Download App</span>
            <div className="flex items-center gap-3">
              <a href="#" className="block">
                <img
                  src="https://blinkit.com/d61019073b700ca49d22.png"
                  alt="Download on App Store"
                  className="h-8"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                  alt="Get it on Play Store"
                  className="h-8"
                />
              </a>
            </div>
            <div className="flex items-center gap-5 sm:ml-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <BsThreads size={18} />
              </a>
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="text-[13px] text-gray-500 mt-8 leading-relaxed">
          "Goshop" is owned & managed by "Goshop Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to "GROFFR.COM" which is a real estate services business
          operated by "Redstone Consultancy Services Private Limited".
        </div>
      </div>
    </footer>
  );
};
export default Footer;
