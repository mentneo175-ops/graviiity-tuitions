import React from 'react'
import { Calendar, ClipboardCheck, Target, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Book Demo',
      description: 'Schedule a free demo class at your convenience. Experience our teaching methodology firsthand.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: ClipboardCheck,
      title: 'Assessment',
      description: 'We evaluate your child\'s current level and identify strengths and areas for improvement.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Personalized Plan',
      description: 'Get a customized learning roadmap tailored to your child\'s goals and learning pace.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Regular tests, detailed reports, and parent-teacher meetings keep you informed every step.',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is easy. Follow these simple steps to begin your child's journey to excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-y-1/2 opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 text-lg z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Ready to get started? Book your free demo class today!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 gradient-primary text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Book Free Demo Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
