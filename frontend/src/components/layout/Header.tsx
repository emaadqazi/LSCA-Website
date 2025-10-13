import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 text-white py-6 px-8 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-white hover:text-cyan-200 transition-colors">
          <img 
            src="/LSCA Logo.jpeg" 
            alt="LSCA Logo" 
            className="h-10 w-auto object-contain"
          />
          <span>LSCA</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <Link to="/" className="text-white/90 hover:text-cyan-200 transition-colors font-medium hover:scale-105 transform duration-200">
            Home
          </Link>
          <Link to="/about" className="text-white/90 hover:text-cyan-200 transition-colors font-medium hover:scale-105 transform duration-200">
            About
          </Link>
          <Link to="/contact" className="text-white/90 hover:text-cyan-200 transition-colors font-medium hover:scale-105 transform duration-200">
            Contact
          </Link>
          <Link to="/title3" className="text-white/90 hover:text-cyan-200 transition-colors font-medium hover:scale-105 transform duration-200">
            Title3
          </Link>
          <Link to="/title4" className="text-white/90 hover:text-cyan-200 transition-colors font-medium hover:scale-105 transform duration-200">
            Title4
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-lg transition-all duration-300 font-medium hover:scale-105 transform shadow-lg">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Header
