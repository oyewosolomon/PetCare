import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Care",
      price: "45,000",
      description: "Essential care for single pet owners",
      features: [
        "24/7 Chat Support",
        "3 Video Consultations/month",
        "Basic Health Tracking",
        "Vaccination Reminders",
        "Digital Pet Records"
      ],
      highlighted: false
    },
    {
      name: "Premium Care",
      price: "150,000",
      description: "Complete care for dedicated pet parents",
      features: [
        "Unlimited Video Consultations",
        "Priority Emergency Support",
        "Advanced Health Analytics",
        "Prescription Management",
        "Multi-pet Support",
        "Insurance Claim Assistance",
        "Specialist Referral Network"
      ],
      highlighted: true
    },
    {
      name: "Family Plan",
      price: "200,000",
      description: "Perfect for multiple pets",
      features: [
        "All Premium Features",
        "Up to 5 Pets",
        "Family Account Sharing",
        "Customized Care Plans",
        "Annual Health Assessments",
        "24/7 Emergency Hotline",
        "Exclusive Vet Network"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your pet's healthcare needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-white shadow-xl border-2 border-blue-600 scale 105' 
                  : 'bg-white shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                  ₦{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Not sure which plan is right for you?
              </h4>
              <p className="text-gray-600 mb-4">
                Schedule a free consultation with our pet care advisors to find the perfect plan for your furry friend.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;