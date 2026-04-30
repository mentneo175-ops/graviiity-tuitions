import React from 'react'
import { Award, TrendingUp, Clock, Target } from 'lucide-react'

const TrustBar = () => {
  const stats = [
    { icon: Award, value: '1000+', label: 'MBBS Selections' },
    { icon: TrendingUp, value: '3500+', label: 'IIT/NIT Seats' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Target, value: '100%', label: 'Concept Clarity' },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(6, 182, 212))' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
