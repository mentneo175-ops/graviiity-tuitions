import React from 'react'
import { BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    { name: 'School Tuition (1-10)', href: '#programs' },
    { name: 'IIT-NEET Foundation', href: '#programs' },
    { name: 'AI & ML Programs', href: '#programs' },
    { name: 'Coding Programs', href: '#programs' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <img 
                src="/logo.png?v=1" 
                alt="Graviity Tuitions - Pathways to Excellence" 
                className="h-14 w-auto brightness-0 invert opacity-90"
                onError={(e) => {
                  console.error('Footer logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with quality education and proven results for over 10 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919381791038" className="text-gray-300 hover:text-white transition-colors block">
                    +91 93817 91038
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@graviitytuitions.com" className="text-gray-300 hover:text-white transition-colors">
                    info@graviitytuitions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  Hyderabad, Telangana<br />
                  India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center">
            <p className="text-gray-300 mb-4">Download Our Mobile App (Coming Soon)</p>
            <div className="flex justify-center space-x-4">
              <div className="px-6 py-3 bg-white/10 rounded-lg text-sm flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-lg text-sm flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Play Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Graviity Tuitions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
