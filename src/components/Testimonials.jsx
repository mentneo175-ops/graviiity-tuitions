import React from 'react'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Lakshmi Reddy',
      role: 'Parent of JEE Aspirant',
      initials: 'LR',
      rating: 5,
      text: 'Graviity Tuitions changed my son\'s future. The personalized attention and expert faculty helped him secure AIR 156 in JEE Main. Forever grateful!',
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of NEET Student',
      initials: 'RK',
      rating: 5,
      text: 'The best decision we made was enrolling our daughter here. She not only cleared NEET but also developed confidence and discipline.',
    },
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Grade 9 Student',
      initials: 'PS',
      rating: 5,
      text: 'My daughter\'s grades improved dramatically. The teachers genuinely care about each student\'s progress. Highly recommend!',
    },
    {
      name: 'Mr. Venkat Rao',
      role: 'Parent of Coding Student',
      initials: 'VR',
      rating: 5,
      text: 'The coding program is exceptional. My son built his first app at 12! The curriculum is modern and the instructors are patient.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What <span className="text-gradient">Parents Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real parents who trusted us with their child's future
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 glass p-6 rounded-2xl">
            <div>
              <div className="text-3xl font-bold text-primary-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Happy Parents</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
