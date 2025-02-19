import React from 'react';
import { ArrowRight, Smartphone, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Stats banner */}
            <div className="flex gap-2 items-center bg-blue-50 rounded-full px-4 py-2 w-fit">
              <span className="text-blue-600 font-semibold">5,000+ Veterinarians</span>
              <span className="text-gray-500">•</span>
              <span className="text-blue-600 font-semibold">100,000+ Pets Served</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Expert Pet Care, 
              <span className="text-blue-600"> Just a Click Away</span>
            </h1>

            <p className="text-xl text-gray-600">
              Connect with licensed veterinarians instantly, track your pet's health, and manage prescriptions - all in one platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
                Book a Demo
              </button>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">24/7 Telemedicine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">Licensed Vets</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">Instant Care</span>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/pet.jpg" 
                alt="Veterinarian examining a dog with owner" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating stats card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Active Consultations</p>
                    <p className="text-2xl font-bold text-gray-900">2,457</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-sm text-gray-600">Pet Health Records</p>
                    <p className="text-2xl font-bold text-gray-900">100k+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;