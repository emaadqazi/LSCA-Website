import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from './layout/Header'
import HeroSection from './features/HeroSection'
import AboutSection from './sections/AboutSection'
import EventsSection from './sections/EventsSection'
import GetInvolvedSection from './sections/GetInvolvedSection'
import TeamSection from './sections/TeamSection'
import ContactSection from './sections/ContactSection'

// Organized in three layers for parallax effect (foreground, middle, background)
const networkNodes = [
  // Top section (Hero area) - Layer 1 (foreground - moves fastest)
  { x: '8%', y: '5%', id: 1, layer: 1 },
  { x: '22%', y: '12%', id: 2, layer: 1 },
  { x: '45%', y: '8%', id: 3, layer: 2 },
  { x: '68%', y: '15%', id: 4, layer: 1 },
  { x: '85%', y: '10%', id: 5, layer: 3 },
  
  // Upper-middle section - Layer mix
  { x: '12%', y: '22%', id: 6, layer: 2 },
  { x: '28%', y: '28%', id: 7, layer: 1 },
  { x: '50%', y: '25%', id: 8, layer: 3 },
  { x: '72%', y: '30%', id: 9, layer: 2 },
  { x: '88%', y: '26%', id: 10, layer: 1 },
  
  // Middle section (About/Events area)
  { x: '15%', y: '38%', id: 11, layer: 3 },
  { x: '32%', y: '42%', id: 12, layer: 2 },
  { x: '48%', y: '40%', id: 13, layer: 1 },
  { x: '65%', y: '45%', id: 14, layer: 3 },
  { x: '82%', y: '43%', id: 15, layer: 2 },
  
  // Lower-middle section
  { x: '10%', y: '52%', id: 16, layer: 1 },
  { x: '25%', y: '58%', id: 17, layer: 3 },
  { x: '45%', y: '55%', id: 18, layer: 2 },
  { x: '70%', y: '60%', id: 19, layer: 1 },
  { x: '85%', y: '57%', id: 20, layer: 3 },
  
  // Bottom section (Team/Contact area)
  { x: '18%', y: '68%', id: 21, layer: 2 },
  { x: '35%', y: '72%', id: 22, layer: 1 },
  { x: '52%', y: '70%', id: 23, layer: 3 },
  { x: '68%', y: '75%', id: 24, layer: 2 },
  { x: '88%', y: '73%', id: 25, layer: 1 },
  
  // Very bottom section
  { x: '12%', y: '82%', id: 26, layer: 3 },
  { x: '30%', y: '88%', id: 27, layer: 2 },
  { x: '55%', y: '85%', id: 28, layer: 1 },
  { x: '75%', y: '90%', id: 29, layer: 3 },
  { x: '90%', y: '87%', id: 30, layer: 2 },
]

// Expanded connections creating an interconnected network
const connections = [
  // Top section connections
  { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 },
  { from: 1, to: 6 }, { from: 2, to: 7 }, { from: 3, to: 8 }, { from: 4, to: 9 },
  
  // Upper-middle connections
  { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 10 },
  { from: 6, to: 11 }, { from: 7, to: 12 }, { from: 8, to: 13 }, { from: 9, to: 14 },
  
  // Middle connections
  { from: 11, to: 12 }, { from: 12, to: 13 }, { from: 13, to: 14 }, { from: 14, to: 15 },
  { from: 11, to: 16 }, { from: 12, to: 17 }, { from: 13, to: 18 }, { from: 14, to: 19 },
  
  // Lower-middle connections
  { from: 16, to: 17 }, { from: 17, to: 18 }, { from: 18, to: 19 }, { from: 19, to: 20 },
  { from: 16, to: 21 }, { from: 17, to: 22 }, { from: 18, to: 23 }, { from: 19, to: 24 },
  
  // Bottom connections
  { from: 21, to: 22 }, { from: 22, to: 23 }, { from: 23, to: 24 }, { from: 24, to: 25 },
  { from: 21, to: 26 }, { from: 22, to: 27 }, { from: 23, to: 28 }, { from: 24, to: 29 },
  
  // Very bottom connections
  { from: 26, to: 27 }, { from: 27, to: 28 }, { from: 28, to: 29 }, { from: 29, to: 30 },
  
  // Cross-layer connections for complexity
  { from: 5, to: 10 }, { from: 10, to: 15 }, { from: 15, to: 20 }, { from: 20, to: 25 }, { from: 25, to: 30 },
]

const SinglePage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // Set initial viewport height
    setViewportHeight(window.innerHeight)
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Calculate if a node is visible in viewport (with extended range)
  const isNodeVisible = (nodeYPercent: string) => {
    const nodeY = (parseFloat(nodeYPercent) / 100) * document.documentElement.scrollHeight
    const scrollTop = scrollY
    const scrollBottom = scrollY + viewportHeight
    
    // Extended range - show nodes 50vh before and after viewport
    const extendedTop = scrollTop - viewportHeight * 0.5
    const extendedBottom = scrollBottom + viewportHeight * 0.5
    
    return nodeY >= extendedTop && nodeY <= extendedBottom
  }

  return (
    <div className="relative min-h-screen">
      {/* Professional Navy Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 z-0"></div>
      
      {/* Animated Background Overlay */}
      <div className="fixed inset-0 z-0">
        {/* Subtle gradient orbs with logo colors */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-500/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-teal-600/5 to-transparent"></div>
        </div>
        
        {/* Subtle grid pattern with logo teal */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, #14b8a6 1px, transparent 1px),
            linear-gradient(to bottom, #14b8a6 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>

        {/* Supply Chain Network Visualization - Dynamic with Parallax */}
        <div className="absolute inset-0 overflow-hidden opacity-30" style={{ height: '100%' }}>
          {/* Connection Lines - Varying design, appear/disappear dynamically */}
          <svg className="absolute inset-0 w-full" style={{ height: '100%' }}>
            {connections.map((conn, index) => {
              const fromNode = networkNodes.find(n => n.id === conn.from)
              const toNode = networkNodes.find(n => n.id === conn.to)
              if (!fromNode || !toNode) return null
              
              // Calculate parallax offset based on layer
              const parallaxFactor = fromNode.layer === 1 ? 0.3 : fromNode.layer === 2 ? 0.15 : 0.05
              const offset = scrollY * parallaxFactor
              
              // Check if connection should be visible
              const fromVisible = isNodeVisible(fromNode.y)
              const toVisible = isNodeVisible(toNode.y)
              const connectionVisible = fromVisible || toVisible
              
              // Vary stroke style based on position and scroll
              const strokeDasharray = index % 3 === 0 ? "5,5" : index % 3 === 1 ? "10,3" : "none"
              
              return (
                <motion.line
                  key={`connection-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#14b8a6"
                  strokeWidth={fromNode.layer === 1 ? 2.5 : fromNode.layer === 2 ? 2 : 1.8}
                  strokeOpacity={connectionVisible ? (fromNode.layer === 1 ? 0.8 : fromNode.layer === 2 ? 0.7 : 0.6) : 0.2}
                  strokeDasharray={strokeDasharray}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: connectionVisible ? 1 : 0.3, 
                    opacity: connectionVisible ? 1 : 0.3,
                  }}
                  style={{
                    transform: `translateY(${-offset}px)`,
                  }}
                  transition={{
                    pathLength: { duration: connectionVisible ? 2 : 1, delay: index * 0.05 },
                    opacity: { duration: 0.8 }
                  }}
                />
              )
            })}
          </svg>

          {/* Network Nodes - Subtle, appear/disappear based on scroll */}
          {networkNodes.map((node, index) => {
            // Calculate parallax offset based on layer
            const parallaxFactor = node.layer === 1 ? 0.3 : node.layer === 2 ? 0.15 : 0.05
            const offset = scrollY * parallaxFactor
            
            // Check if node should be visible
            const visible = isNodeVisible(node.y)
            
            return (
              <motion.div
                key={`node-${node.id}`}
                className="absolute rounded-full"
                style={{
                  left: node.x,
                  top: node.y,
                  translateX: '-50%',
                  translateY: '-50%',
                  // Smaller, subtler nodes (mobile responsive)
                  width: node.layer === 1 ? '8px' : node.layer === 2 ? '6px' : '5px',
                  height: node.layer === 1 ? '8px' : node.layer === 2 ? '6px' : '5px',
                  transform: `translate(-50%, calc(-50% - ${offset}px))`,
                  zIndex: node.layer === 1 ? 3 : node.layer === 2 ? 2 : 1,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: visible ? [1, 1.2, 1] : 0,
                  opacity: visible ? [0.3, 0.5, 0.3] : 0,
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: visible ? 3 : 0.5,
                    repeat: visible ? Infinity : 0,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Node core - more subtle */}
                <div 
                  className="absolute inset-0 bg-teal-500 rounded-full" 
                  style={{
                    opacity: node.layer === 1 ? 0.6 : node.layer === 2 ? 0.5 : 0.4
                  }}
                />
                {/* Reduced glow */}
                <motion.div
                  className="absolute inset-0 bg-teal-400 rounded-full blur-sm"
                  animate={{
                    scale: visible ? [1, 1.8, 1] : 0,
                    opacity: visible ? [0.3, 0, 0.3] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: visible ? Infinity : 0,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            )
          })}

          {/* Animated Data Flow Particles - Only on visible connections */}
          {connections.map((conn, index) => {
            const fromNode = networkNodes.find(n => n.id === conn.from)
            const toNode = networkNodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const parallaxFactor = fromNode.layer === 1 ? 0.3 : fromNode.layer === 2 ? 0.15 : 0.05
            const offset = scrollY * parallaxFactor
            
            // Only show particles on visible connections
            const fromVisible = isNodeVisible(fromNode.y)
            const toVisible = isNodeVisible(toNode.y)
            const particleActive = fromVisible || toVisible

            return (
              <motion.div
                key={`particle-${index}`}
                className="absolute rounded-full bg-teal-400"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  width: '6px',
                  height: '6px',
                  transform: `translateY(${-offset}px)`,
                  zIndex: fromNode.layer,
                }}
                animate={{
                  left: particleActive ? [fromNode.x, toNode.x] : fromNode.x,
                  top: particleActive ? [fromNode.y, toNode.y] : fromNode.y,
                  opacity: particleActive ? [0, 0.8, 0.8, 0] : 0,
                }}
                transition={{
                  duration: 4,
                  repeat: particleActive ? Infinity : 0,
                  delay: index * 0.2,
                  ease: "linear",
                }}
              />
            )
          })}
        </div>
      </div>
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Home Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Get Involved Section */}
        <GetInvolvedSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}

export default SinglePage
