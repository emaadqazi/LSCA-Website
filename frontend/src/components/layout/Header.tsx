const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Header = () => {
  return (
    <header className="bg-navy-900/80 backdrop-blur-md text-white py-5 px-8 shadow-xl border-b border-teal-400/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-3 text-2xl font-bold text-white hover:text-teal-400 transition-all duration-300 group" 
        >
          <div className="relative">
            <img 
              src="/LSCA-Website/LSCA Logo.jpeg" 
              alt="LSCA Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-teal-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold tracking-tight">LSCA</span>
        </button>

        {/* Navigation Links - Centered */}
        <nav className="flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white/80 hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('get-involved')}
            className="text-white/80 hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Get involved
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white/80 hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105 transform relative group" 
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Empty div to balance the layout */}
        <div className="w-40"></div>

      </div>
    </header>
  )
}

export default Header
