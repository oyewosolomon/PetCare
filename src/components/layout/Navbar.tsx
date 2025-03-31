import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

// Define the structure of the navigation links
interface NavLinks {
  [key: string]: string[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for mobile menu
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State for dropdown menus

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  // Navigation links data
  const navLinks: NavLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
    'For Pet Parents': [
      'Find a Vet',
      'Book Consultation',
      'Health Records',
      'Medication Reminders',
      'Emergency Care',
    ],
    'For Veterinarians': [
      'Join Network',
      'Resource Center',
      'Partner Portal',
      'Success Stories',
      'Training',
    ],
    Resources: [
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Sitemap',
    ],
  };

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.0803 15.7203C18.4903 12.1903 15.1003 9.32031 11.5203 9.32031C7.63028 9.32031 4.21028 12.4703 3.88028 16.3503C3.75028 17.8503 4.23028 19.2703 5.22028 20.3403C6.20028 21.4103 7.58028 22.0003 9.08028 22.0003H13.7603C15.4503 22.0003 16.9303 21.3403 17.9403 20.1503C18.9503 18.9603 19.3503 17.3803 19.0803 15.7203Z" fill="#ffffff"></path> <path d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z" fill="#ffffff"></path> <path d="M16.94 9.02844C18.2876 9.02844 19.38 7.93601 19.38 6.58844C19.38 5.24086 18.2876 4.14844 16.94 4.14844C15.5924 4.14844 14.5 5.24086 14.5 6.58844C14.5 7.93601 15.5924 9.02844 16.94 9.02844Z" fill="#ffffff"></path> <path d="M20.5496 12.9313C21.6266 12.9313 22.4996 12.0582 22.4996 10.9812C22.4996 9.90429 21.6266 9.03125 20.5496 9.03125C19.4727 9.03125 18.5996 9.90429 18.5996 10.9812C18.5996 12.0582 19.4727 12.9313 20.5496 12.9313Z" fill="#ffffff"></path> <path d="M3.94 10.9816C5.28757 10.9816 6.38 9.88914 6.38 8.54156C6.38 7.19399 5.28757 6.10156 3.94 6.10156C2.59243 6.10156 1.5 7.19399 1.5 8.54156C1.5 9.88914 2.59243 10.9816 3.94 10.9816Z" fill="#ffffff"></path> </g></svg>
            PetCare Connect
            </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="relative">
                <button
                  onClick={() => toggleDropdown(title)}
                  className="flex items-center text-gray-300 hover:text-white focus:outline-none transition-colors"
                >
                  <span>{title}</span>
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${
                      openDropdown === title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === title && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="mb-2">
                <button
                  onClick={() => toggleDropdown(title)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white focus:outline-none py-2"
                >
                  <span>{title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === title && (
                  <div className="pl-4">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block py-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;