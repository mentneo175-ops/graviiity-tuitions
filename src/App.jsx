import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Faculty from './components/Faculty'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <Programs />
        <Results />
        <Testimonials />
        <Faculty />
        <HowItWorks />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
