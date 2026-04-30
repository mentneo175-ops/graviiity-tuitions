import React from 'react'
import { Trophy, Award, Star, TrendingUp } from 'lucide-react'

const Results = () => {
  const achievements = [
    { icon: Trophy, value: '1000+', label: 'MBBS Selections', color: 'from-yellow-400 to-yellow-600' },
    { icon: Award, value: '3500+', label: 'IIT/NIT Seats', color: 'from-blue-500 to-blue-600' },
    { icon: Star, value: '95%', label: 'Success Rate', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: '40+', label: 'Top 100 Ranks', color: 'from-green-500 to-green-600' },
  ]

  const toppers = [
    { name: 'Arjun Sharma', rank: 'AIR 47', exam: 'JEE Advanced', initials: 'AS' },
    { name: 'Priya Reddy', rank: 'AIR 89', exam: 'NEET', initials: 'PR' },
    { name: 'Rahul Kumar', rank: 'AIR 156', exam: 'JEE Main', initials: 'RK' },
    { name: 'Sneha Patel', rank: 'AIR 203', exam: 'NEET', initials: 'SP' },
  ]

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s', background: '#22d3ee' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
            Our Track Record
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Results That <span className="text-accent-400">Speak Volumes</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our students consistently achieve top ranks in competitive exams
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-3xl text-center transform hover:scale-110 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-blue-200 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Top Performers */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Recent Top Performers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{topper.initials}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{topper.name}</h4>
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-sm font-bold mb-2">
                  {topper.rank}
                </div>
                <p className="text-blue-200 text-sm">{topper.exam}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 text-lg mb-4">Want your child to be our next success story?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>

      <style jsx>{`
        .glass-dark {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  )
}

export default Results
