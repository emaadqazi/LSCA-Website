import { useState, useEffect } from 'react'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      // Animate the text appearing character by character
      const text = "Laurier Supply Chain Association"
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, 100)
    }, 10000) // 10 second delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Pre-headline Tag */}
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Empowering Supply Chain Excellence
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {isLoaded ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    {displayText}
                  </span>
                ) : (
                  <span className="text-gray-400">Loading...</span>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                At LSCA, we provide innovative solutions and networking opportunities 
                for the next generation of supply chain professionals.
              </p>

              {/* CTA Button */}
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gray-200 flex items-center space-x-3">
                <span>Join Our Network</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Large Curved Background Element */}
                <div className="w-96 h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full opacity-20 absolute inset-0 transform -translate-x-8 -translate-y-8"></div>
                
                {/* Main Content Circle */}
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border-8 border-blue-100">
                  {/* Inner Content */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-blue-600 font-bold text-xl">LSCA</span>
                    <p className="text-gray-600 text-sm mt-2">Supply Chain Excellence</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-4 left-4 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-blue-200 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-8 w-5 h-5 bg-blue-300 rounded-full opacity-40"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-200 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {!isLoaded && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-blue-600 text-lg font-medium">Loading in {Math.ceil((10000 - Date.now() % 10000) / 1000)}s...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
