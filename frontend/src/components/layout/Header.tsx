import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white text-black py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - LSCA */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          LSCA
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Contact
          </Link>
          <Link to="/title3" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Title3
          </Link>
          <Link to="/title4" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Title4
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Header
