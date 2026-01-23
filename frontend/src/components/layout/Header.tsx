import { useState, useEffect } from 'react'
import { Linkedin, Instagram, Slack, Menu, X, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    closeMobileMenu()
  }

  return (
    <header className="bg-navy-900/90 backdrop-blur-xl text-white py-5 px-8 shadow-xl border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-3 text-2xl font-bold text-white hover:text-teal-500 transition-all duration-300 group" 
        >
          <div className="relative">
            <img 
              src="/LSCA-Website/LSCA Logo.jpeg" 
              alt="LSCA Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'lighten',
              }}
            />
            <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold tracking-tight">LSCA</span>
        </button>

        {/* Navigation Links - Desktop Only */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('get-involved')}
            className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Get involved
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-teal-500 transition-all duration-300 p-2 -mr-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Media Links - Desktop Only */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/company/lauriersupplychainassociation/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} strokeWidth={2} />
          </a>
          <a 
            href="https://www.instagram.com/lauriersupplychain/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <Instagram size={22} strokeWidth={2} />
          </a>
          <a 
            href="https://join.slack.com/t/lsca-wlu/shared_invite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform"
            aria-label="Slack"
          >
            <Slack size={22} strokeWidth={2} />
          </a>
        </div>

      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-navy-900/95 backdrop-blur-xl border-l border-teal-500/20 z-50 md:hidden"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/LSCA-Website/LSCA Logo.jpeg" 
                      alt="LSCA Logo" 
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-white font-bold text-lg">LSCA</span>
                  </div>
                  <button 
                    onClick={closeMobileMenu}
                    className="text-white/70 hover:text-teal-500 transition-colors duration-200 p-1"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-6">
                  <button 
                    onClick={() => handleMobileNavClick('about')}
                    className="w-full text-left text-white/80 hover:text-teal-500 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-teal-500/10 flex items-center justify-between group"
                  >
                    About
                    <ChevronLeft className="transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
                  </button>
                  <button 
                    onClick={() => handleMobileNavClick('events')}
                    className="w-full text-left text-white/80 hover:text-teal-500 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-teal-500/10 flex items-center justify-between group"
                  >
                    Events
                    <ChevronLeft className="transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
                  </button>
                  <button 
                    onClick={() => handleMobileNavClick('get-involved')}
                    className="w-full text-left text-white/80 hover:text-teal-500 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-teal-500/10 flex items-center justify-between group"
                  >
                    Get Involved
                    <ChevronLeft className="transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
                  </button>
                  <button 
                    onClick={() => handleMobileNavClick('team')}
                    className="w-full text-left text-white/80 hover:text-teal-500 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-teal-500/10 flex items-center justify-between group"
                  >
                    Team
                    <ChevronLeft className="transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
                  </button>
                  <button 
                    onClick={() => handleMobileNavClick('contact')}
                    className="w-full text-left text-white/80 hover:text-teal-500 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-teal-500/10 flex items-center justify-between group"
                  >
                    Contact
                    <ChevronLeft className="transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
                  </button>
                </nav>

                {/* Mobile Social Links */}
                <div className="mt-8 pt-6 border-t border-teal-500/20">
                  <p className="text-white/60 text-sm mb-4 font-medium">Follow Us</p>
                  <div className="flex items-center space-x-6">
                    <a 
                      href="https://www.linkedin.com/company/lauriersupplychainassociation/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform p-2"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} strokeWidth={2} />
                    </a>
                    <a 
                      href="https://www.instagram.com/lauriersupplychain/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform p-2"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} strokeWidth={2} />
                    </a>
                    <a 
                      href="https://join.slack.com/t/lsca-wlu/shared_invite" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-teal-500 transition-all duration-300 hover:scale-110 transform p-2"
                      aria-label="Slack"
                    >
                      <Slack size={24} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
