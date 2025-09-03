const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-blue-600">Laurier Supply Chain Association</span>
        </div>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Empowering the future of supply chain management through innovation, 
          networking, and professional development opportunities.
        </p>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm">
            © 2024 LSCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
