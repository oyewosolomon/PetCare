import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Apple, Smartphone, Award, Shield } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Company": [
      "About Us",
      "Careers",
      "Press",
      "Blog",
      "Contact"
    ],
    "For Pet Parents": [
      "Find a Vet",
      "Book Consultation",
      "Health Records",
      "Medication Reminders",
      "Emergency Care"
    ],
    "For Veterinarians": [
      "Join Network",
      "Resource Center",
      "Partner Portal",
      "Success Stories",
      "Training"
    ],
    "Resources": [
      "Help Center",
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Sitemap"
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with PetCare Connect
              </h3>
              <p className="text-gray-400">
                Get the latest news, tips, and updates about pet healthcare.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                Subscribe
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              PetCare Connect
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting pet parents with licensed veterinarians for immediate, professional healthcare support anytime, anywhere.
            </p>
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-gray-400">
              © 2025 PetCare Connect. All rights reserved.
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white">HIPAA Compliant</div>
                  <div className="text-gray-400">Data Protection</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white">FDA Registered</div>
                  <div className="text-gray-400">Medical Device</div>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="lg:justify-self-end">
              <select className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="en">English (US)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Responsible Disclosure</a>
            <a href="#" className="hover:text-white transition-colors">Do Not Sell My Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;