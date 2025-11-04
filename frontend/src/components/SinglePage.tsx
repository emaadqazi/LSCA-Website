import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './layout/Header'
import HeroSection from './features/HeroSection'
import AboutSection from './sections/AboutSection'
import EventsSection from './sections/EventsSection'
import GetInvolvedSection from './sections/GetInvolvedSection'
import TeamSection from './sections/TeamSection'
import ContactSection from './sections/ContactSection'

// Supply chain network node positions (representing suppliers, warehouses, distribution centers)
const networkNodes = [
  { x: '10%', y: '15%', id: 1 },
  { x: '25%', y: '25%', id: 2 },
  { x: '15%', y: '45%', id: 3 },
  { x: '30%', y: '60%', id: 4 },
  { x: '20%', y: '80%', id: 5 },
  { x: '45%', y: '20%', id: 6 },
  { x: '50%', y: '35%', id: 7 },
  { x: '55%', y: '55%', id: 8 },
  { x: '45%', y: '75%', id: 9 },
  { x: '70%', y: '25%', id: 10 },
  { x: '75%', y: '45%', id: 11 },
  { x: '65%', y: '65%', id: 12 },
  { x: '85%', y: '35%', id: 13 },
  { x: '80%', y: '55%', id: 14 },
  { x: '90%', y: '75%', id: 15 },
]

// Connection paths between nodes (representing supply routes)
const connections = [
  { from: 1, to: 2 }, { from: 2, to: 6 }, { from: 6, to: 10 },
  { from: 3, to: 4 }, { from: 4, to: 8 }, { from: 8, to: 12 },
  { from: 2, to: 7 }, { from: 7, to: 11 }, { from: 11, to: 14 },
  { from: 1, to: 3 }, { from: 3, to: 5 }, { from: 4, to: 9 },
  { from: 6, to: 13 }, { from: 10, to: 13 }, { from: 12, to: 14 },
  { from: 14, to: 15 }, { from: 7, to: 8 }, { from: 11, to: 12 },
]

const SinglePage = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

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

        {/* Supply Chain Network Visualization - 20% more prominent */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Connection Lines - Supply Routes */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, index) => {
              const fromNode = networkNodes.find(n => n.id === conn.from)
              const toNode = networkNodes.find(n => n.id === conn.to)
              if (!fromNode || !toNode) return null
              
              return (
                <motion.line
                  key={`connection-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#14b8a6"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 2, delay: index * 0.1 },
                    opacity: { duration: 1, delay: index * 0.1 }
                  }}
                />
              )
            })}
          </svg>

          {/* Network Nodes - Supply Chain Points */}
          {networkNodes.map((node, index) => (
            <motion.div
              key={`node-${node.id}`}
              className="absolute w-3.5 h-3.5 rounded-full"
              style={{
                left: node.x,
                top: node.y,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Node core */}
              <div className="absolute inset-0 bg-teal-500 rounded-full" />
              {/* Node glow */}
              <motion.div
                className="absolute inset-0 bg-teal-400 rounded-full blur-sm"
                animate={{
                  scale: [1, 2.2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}

          {/* Animated Data Flow Particles */}
          {connections.map((conn, index) => {
            const fromNode = networkNodes.find(n => n.id === conn.from)
            const toNode = networkNodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            return (
              <motion.div
                key={`particle-${index}`}
                className="absolute w-2 h-2 rounded-full bg-teal-400"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                }}
                animate={{
                  left: [fromNode.x, toNode.x],
                  top: [fromNode.y, toNode.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
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
