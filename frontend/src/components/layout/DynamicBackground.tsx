import { useEffect, useState } from 'react'

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setWindowHeight(window.innerHeight)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // Set initial values
    setScrollY(window.scrollY)
    setWindowHeight(window.innerHeight)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Calculate which section we're in (6 sections total)
  const sectionHeight = windowHeight
  const currentSection = Math.floor(scrollY / sectionHeight)
  const sectionProgress = (scrollY % sectionHeight) / sectionHeight

  // Define color schemes for each section
  const colorSchemes = [
    // Section 0: Home (light to medium)
    { from: 'from-cyan-200', via: 'via-teal-400', to: 'to-blue-500' },
    // Section 1: About (medium to dark)
    { from: 'from-blue-500', via: 'via-blue-600', to: 'to-blue-700' },
    // Section 2: Events (dark to very dark)
    { from: 'from-blue-700', via: 'via-blue-800', to: 'to-blue-900' },
    // Section 3: Get Involved (very dark to dark)
    { from: 'from-blue-900', via: 'via-blue-800', to: 'to-blue-700' },
    // Section 4: Team (dark to medium)
    { from: 'from-blue-700', via: 'via-blue-600', to: 'to-blue-500' },
    // Section 5: Contact (medium to light)
    { from: 'from-blue-500', via: 'via-teal-400', to: 'to-cyan-200' }
  ]

  // Get current and next color schemes
  const currentScheme = colorSchemes[Math.min(currentSection, colorSchemes.length - 1)]
  const nextScheme = colorSchemes[Math.min(currentSection + 1, colorSchemes.length - 1)]

  // Interpolate between current and next scheme based on scroll progress
  const getGradientClass = () => {
    if (currentSection >= colorSchemes.length - 1) {
      return `bg-gradient-to-b ${currentScheme.from} ${currentScheme.via} ${currentScheme.to}`
    }
    
    // For smooth transitions, we'll use the current scheme
    return `bg-gradient-to-b ${currentScheme.from} ${currentScheme.via} ${currentScheme.to}`
  }

  return (
    <div className="fixed inset-0 z-0 transition-all duration-1000 ease-out">
      {/* Main gradient background */}
      <div className={`absolute inset-0 ${getGradientClass()}`}>
        {/* Wave-like overlay for depth */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-cyan-100/50 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-1/4 bg-gradient-to-b from-teal-200/30 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-1/4 bg-gradient-to-b from-blue-300/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-1/4 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96, 165, 250, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
      </div>
      
      {/* Add CSS animation for grid movement */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </div>
  )
}

export default DynamicBackground
