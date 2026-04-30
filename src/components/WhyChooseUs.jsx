import React from 'react'
import { Users, Heart, FileText, Trophy } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from IIT/NIT alumni and subject matter experts with 10+ years of teaching experience.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Personalized Attention',
      description: 'Small batch sizes ensure every student gets individual focus and customized learning plans.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileText,
      title: 'Regular Tests & Reports',
      description: 'Weekly assessments and detailed progress reports keep parents informed every step of the way.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: '1000+ MBBS selections and 3500+ IIT/NIT seats speak for our commitment to excellence.',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Graviity Tuitions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach—we transform futures with proven methods and passionate educators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
