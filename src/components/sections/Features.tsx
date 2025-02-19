import React from 'react';
import { Video, Calendar, Pill, Activity, ChevronRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "24/7 Video Consultations",
      description: "Connect with licensed veterinarians instantly through high-quality video calls, anytime and anywhere.",
      stat: "15,000+ Monthly Consultations",
      color: "blue"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Health Tracking & Monitoring",
      description: "Keep detailed records of your pet's health metrics, vaccinations, and medical history all in one place.",
      stat: "98% Health Tracking Accuracy",
      color: "green"
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Prescription Management",
      description: "Easily manage and refill your pet's prescriptions with automatic reminders and doorstep delivery.",
      stat: "50,000+ Prescriptions Managed",
      color: "purple"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Book and manage appointments with your preferred veterinarians effortlessly.",
      stat: "200,000+ Appointments Booked",
      color: "orange"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pet Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to keep your pets healthy and happy, all in one platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${feature.color}-100`}>
                <div className={`text-${feature.color}-600`}>{feature.icon}</div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {feature.stat}
                </span>
                
                <button className={`text-${feature.color}-600 flex items-center gap-1 text-sm font-medium hover:underline`}>
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Explore All Features
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;