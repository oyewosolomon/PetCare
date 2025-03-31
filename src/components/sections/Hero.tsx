import React from 'react';
import { ArrowRight, Smartphone, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HeroSection = () => {
  return (
    <motion.div 
      className="relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.2, duration: 1, type: 'spring' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.4, duration: 1, type: 'spring' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Stats banner */}
            <motion.div variants={item} className="flex gap-2 items-center bg-blue-50 rounded-full px-4 py-2 w-fit">
              <span className="text-blue-600 font-semibold">5,000+ Veterinarians</span>
              <span className="text-gray-500">•</span>
              <span className="text-blue-600 font-semibold">100,000+ Pets Served</span>
            </motion.div>

            <motion.h1 variants={item} className="text-7xl font-bold text-gray-900 leading-tight">
              Expert Pet Care, 
              <span className="text-blue-600"> Just a Click Away</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl text-gray-600">
              Connect with licensed veterinarians instantly, track your pet's health, and manage prescriptions - all in one platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
                Book a Demo
              </button>
            </motion.div>

            {/* Features list */}
            <motion.div variants={container} className="grid sm:grid-cols-3 gap-6 pt-8">
              <motion.div variants={item} className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">24/7 Telemedicine</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">Licensed Vets</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">Instant Care</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/pet.jpg" 
                alt="Veterinarian examining a dog with owner" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating stats card */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;