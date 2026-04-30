import React from 'react'
import { BookOpen, Zap, Brain, Code, ArrowRight } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'School Tuition',
      subtitle: 'Grades 1–10',
      features: ['CBSE | State | IB', 'Strong Fundamentals', 'Interactive Learning', 'Regular Assessments'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Zap,
      title: 'IIT-NEET Foundation',
      subtitle: 'Grades 8–12',
      features: ['Concept Clarity', 'Competitive Edge', 'Expert Faculty', 'Mock Tests'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Brain,
      title: 'AI & ML Programs',
      subtitle: 'Future Skills',
      features: ['Real-world Learning', 'Hands-on Projects', 'Industry Experts', 'Career Ready'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
    },
    {
      icon: Code,
      title: 'Coding Programs',
      subtitle: 'Scratch to Python',
      features: ['Web Development', 'App Development', 'Game Design', 'Problem Solving'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
  ]

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to unlock your child's full potential
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-6">
                  {program.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${program.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center space-x-2 text-gray-700 group-hover:text-primary-600 font-semibold transition-colors`}
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3 gradient-primary text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <span>Talk to Our Counselor</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Programs
