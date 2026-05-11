import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const whatsappNumber = '919247901196'
  const message = encodeURIComponent('Hi! I would like to know more about Graviity Tuitions programs.')

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-4 w-64 glass p-4 rounded-2xl shadow-2xl animate-slide-up">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-700 font-medium mb-2">
                👋 Need help?
              </p>
              <p className="text-xs text-gray-600">
                Chat with us on WhatsApp for instant support!
              </p>
            </div>
          )}

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            
            {/* Icon */}
            <MessageCircle className="relative w-8 h-8 text-white" />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </span>
          </a>
        </div>
      )}
    </>
  )
}

export default WhatsAppButton
