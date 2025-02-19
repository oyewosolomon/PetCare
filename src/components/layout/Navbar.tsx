import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

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
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-white">PetCare Connect</div>

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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;