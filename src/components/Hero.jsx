import React from 'react'
import { Phone, MessageCircle, Award, Users, TrendingUp, Trophy, BookOpen, Star, Target, Zap } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Award, value: '1000+', label: 'MBBS Selections' },
    { icon: TrendingUp, value: '3500+', label: 'IIT/NIT Seats' },
  ]

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
              <Users className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-gray-700">Trusted by 1000+ Parents</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Proven Results.
              <span className="text-gradient block">Proven Faculty.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We shape your child's future with expert guidance, personalized attention, and a proven track record of excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                style={{ background: 'linear-gradient(to right, #22d3ee, #06b6d4)' }}
              >
                <span>Book Free Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+919381791038"
                className="px-8 py-4 bg-white rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
                style={{ border: '2px solid #22d3ee', color: '#06b6d4' }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            {/* Main Hero Visual */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #22d3ee, #06b6d4, #3b82f6)' }}></div>
              
              {/* Decorative Circles */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                {/* Top Achievement Badge */}
                <div className="mb-6 glass-dark p-4 rounded-2xl text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Award className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-bold">Top Ranked Institute</span>
                  </div>
                  <p className="text-xs text-blue-100">Hyderabad 2024</p>
                </div>

                {/* Center Icon */}
                <div className="mb-6">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Award className="w-16 h-16 text-primary-600" />
                  </div>
                </div>

                {/* Main Text */}
                <h3 className="text-3xl font-bold mb-2 text-center">Excellence in Education</h3>
                <p className="text-blue-100 text-base mb-6 text-center">Trusted by Thousands</p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  <div className="glass-dark p-3 rounded-xl text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-blue-100">Success</div>
                  </div>
                  <div className="glass-dark p-3 rounded-xl text-center">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-xs text-blue-100">Students</div>
                  </div>
                  <div className="glass-dark p-3 rounded-xl text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-xs text-blue-100">Rating</div>
                  </div>
                </div>

                {/* Bottom Achievement Icons */}
                <div className="mt-8 flex justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
