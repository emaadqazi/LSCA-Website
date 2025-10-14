const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 text-white py-6 px-8 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-3 text-2xl font-black text-white hover:text-cyan-200 transition-colors" 
          style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          <img 
            src="/LSCA-Website/LSCA Logo.jpeg" 
            alt="LSCA Logo" 
            className="h-10 w-auto object-contain"
            style={{
              mixBlendMode: 'multiply',
              filter: 'contrast(1.1) brightness(1.1)',
              backgroundColor: 'transparent'
            }}
          />
          <span>LSCA</span>
        </button>

        {/* Navigation Links - Centered */}
        <nav className="flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/90 hover:text-cyan-200 transition-colors font-black hover:scale-105 transform duration-200" 
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white/90 hover:text-cyan-200 transition-colors font-black hover:scale-105 transform duration-200" 
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('get-involved')}
            className="text-white/90 hover:text-cyan-200 transition-colors font-black hover:scale-105 transform duration-200" 
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Get involved
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white/90 hover:text-cyan-200 transition-colors font-black hover:scale-105 transform duration-200" 
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white/90 hover:text-cyan-200 transition-colors font-black hover:scale-105 transform duration-200" 
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Contact
          </button>
        </nav>

        {/* Empty div to balance the layout */}
        <div className="w-40"></div>

      </div>
    </header>
  )
}

export default Header
