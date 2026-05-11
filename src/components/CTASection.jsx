import React from 'react'
import { Phone, MessageCircle, Calendar, Zap } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #22d3ee, #06b6d4, #3b82f6)' }}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1s', background: '#a5f3fc' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
          <Zap className="w-4 h-4" />
          <span>Limited Seats Available</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join Today & Secure Your
          <span className="block text-accent-300">Child's Future</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Don't wait! Our batches fill up fast. Book your free demo class now and experience the Graviity difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="group px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Demo</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://wa.me/919247901196"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Now</span>
          </a>
          <a
            href="tel:+919247901196"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">500+ Enrolled This Month</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Free Study Material</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">No Hidden Charges</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
