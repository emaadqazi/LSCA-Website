import { Linkedin, Instagram, Slack, Menu, X } from 'lucide-react'
import { useState } from 'react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-navy-900/90 backdrop-blur-xl text-white py-3 md:py-5 px-4 md:px-8 shadow-xl border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 md:space-x-3 text-xl md:text-2xl font-bold text-white hover:text-teal-500 transition-all duration-300 group" 
        >
          <div className="relative">
            <img 
              src="/images/LSCA Logo.jpeg" 
              alt="LSCA Logo" 
              className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'lighten',
              }}
            />
            <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold tracking-tight">LSCA</span>
        </button>

        {/* Navigation Links - Desktop */}
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

        {/* Social Media Links - Desktop */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-teal-500 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-navy-900/95 backdrop-blur-xl z-50 pt-20">
          <nav className="flex flex-col items-center space-y-6 px-8">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium text-xl py-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('events')}
              className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium text-xl py-2"
            >
              Events
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium text-xl py-2"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-white/80 hover:text-teal-500 transition-all duration-300 font-medium text-xl py-2"
            >
              Contact
            </button>
            <div className="flex items-center space-x-6 pt-4 border-t border-teal-500/20 mt-4">
              <a 
                href="https://www.linkedin.com/company/lauriersupplychainassociation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={2} />
              </a>
              <a 
                href="https://www.instagram.com/lauriersupplychain/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={2} />
              </a>
              <a 
                href="https://join.slack.com/t/lsca-wlu/shared_invite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-500 transition-all duration-300"
                aria-label="Slack"
              >
                <Slack size={24} strokeWidth={2} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
