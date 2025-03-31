import React, { useState, FormEvent } from 'react';
import { Mail, Instagram, Twitter, Facebook, Youtube, HeartPulse, PawPrint, CalendarDays, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceType: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  const serviceOptions = [
    { value: 'general-consultation', label: 'General Consultation', icon: <HeartPulse className="w-4 h-4" /> },
    { value: 'emergency-care', label: 'Emergency Care', icon: <HeartPulse className="w-4 h-4" /> },
    { value: 'vaccination', label: 'Vaccination', icon: <PawPrint className="w-4 h-4" /> },
    { value: 'dental-care', label: 'Dental Care', icon: <PawPrint className="w-4 h-4" /> },
    { value: 'nutritional-advice', label: 'Nutritional Advice', icon: <PawPrint className="w-4 h-4" /> },
    { value: 'other', label: 'Other', icon: <PawPrint className="w-4 h-4" /> },
  ];

  const timeOptions = [
    { value: '9:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
  ];

  const socialMedia = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/petcareconnect' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/petcareconnect' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/petcareconnect' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/petcareconnect' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Care for Your Furry Friends
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our veterinary team is ready to provide exceptional care for your pets. Reach out to schedule an appointment or ask questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-600">support@petcareconnect.com</p>
                  <p className="mt-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Send a message</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Cards */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500"
            >
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-lg mr-4">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4 mt-3">
                    {socialMedia.map((social) => (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Join our pet-loving community!</p>
                </div>
              </div>
            </motion.div>

            {/* Resources Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500"
            >
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <PawPrint className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pet Resources</h3>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm text-gray-600 hover:text-green-600 cursor-pointer">• Pet Care Blog</li>
                    <li className="text-sm text-gray-600 hover:text-green-600 cursor-pointer">• Vaccination Guide</li>
                    <li className="text-sm text-gray-600 hover:text-green-600 cursor-pointer">• Nutrition Tips</li>
                    <li className="text-sm text-gray-600 hover:text-green-600 cursor-pointer">• Emergency Checklist</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <div className="bg-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">Jane Doe</h4>
                  <p className="text-xs text-indigo-200">Pet Parent</p>
                </div>
              </div>
              <p className="italic">"The team at PetCare Connect saved my dog's life during an emergency. Their quick response and expert care made all the difference!"</p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <PawPrint className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Schedule an Appointment</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceOptions.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`service-${option.value}`}
                          name="serviceType"
                          type="radio"
                          value={option.value}
                          checked={formData.serviceType === option.value}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`service-${option.value}`} className="ml-2 flex items-center text-sm text-gray-700">
                          {option.icon}
                          <span className="ml-1">{option.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarDays className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                      >
                        <option value="">Select a time</option>
                        {timeOptions.map((time) => (
                          <option key={time.value} value={time.value}>{time.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell Us About Your Pet's Needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Any special requirements or symptoms we should know about?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md ${isSubmitting ? 'opacity-75' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Schedule Appointment'
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-600">
                  Your information is secure and will only be used to contact you about your appointment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;