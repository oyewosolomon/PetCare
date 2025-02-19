import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Veterinarian",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      content: "PetCare Connect has revolutionized how I provide care. The platform's telemedicine capabilities allow me to help more pets while maintaining the highest standard of care.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Pet Parent",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      content: "Being able to consult with a vet at 2 AM when my dog was sick was incredible. The prescription management feature is also a game-changer - no more running to the pharmacy!",
      rating: 5
    },
    {
      name: "Dr. Emily Chen",
      role: "Veterinary Specialist",
      image: "https://randomuser.me/api/portraits/men/59.jpg",
      content: "The health tracking features help me monitor my patients' progress effectively. It's made follow-up care much more efficient and accurate.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Pet Parents and Vets
          </h2>
          <p className="text-xl text-gray-600">
            Join our growing community of satisfied users
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-lg mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
</div>
<div>
<h3 className="text-4xl font-bold text-blue-600 mb-2">10K+</h3>
<p className="text-gray-600">Happy Pets</p>
</div>
<div>
<h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
<p className="text-gray-600">Veterinarians</p>
</div>
</div>
</div>
</div>
);
};

export default Testimonials;