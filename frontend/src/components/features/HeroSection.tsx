import { motion } from 'framer-motion'
import { Package, TruckIcon, Globe, Layers, Factory, Warehouse, Ship, Plane, BarChart3, Users, Target } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Teal to Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 via-teal-400 via-blue-500 to-blue-800">
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
      </div>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #60a5fa 1px, transparent 1px),
            linear-gradient(to bottom, #60a5fa 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Animated Supply Chain Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Package Icon 1 */}
        <motion.div
          className="absolute top-20 left-10 text-blue-300 opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Package size={80} />
        </motion.div>

        {/* Floating Truck Icon */}
        <motion.div
          className="absolute top-40 right-20 text-blue-200 opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TruckIcon size={100} />
        </motion.div>

        {/* Floating Globe Icon */}
        <motion.div
          className="absolute bottom-40 left-1/4 text-blue-300 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Globe size={90} />
        </motion.div>

        {/* Floating Layers Icon */}
        <motion.div
          className="absolute top-1/2 right-1/4 text-blue-200 opacity-20"
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Layers size={70} />
        </motion.div>

        {/* Floating Package Icon 2 */}
        <motion.div
          className="absolute bottom-20 right-40 text-blue-300 opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Package size={60} />
        </motion.div>

        {/* Floating Factory Icon */}
        <motion.div
          className="absolute top-60 left-1/3 text-blue-200 opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Factory size={85} />
        </motion.div>

        {/* Floating Warehouse Icon */}
        <motion.div
          className="absolute bottom-60 left-20 text-blue-300 opacity-15"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Warehouse size={75} />
        </motion.div>

        {/* Floating Ship Icon */}
        <motion.div
          className="absolute top-80 right-1/3 text-blue-200 opacity-15"
          animate={{
            x: [0, 40, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ship size={90} />
        </motion.div>

        {/* Floating Plane Icon */}
        <motion.div
          className="absolute top-32 left-1/2 text-blue-300 opacity-15"
          animate={{
            x: [0, -30, 0],
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Plane size={70} />
        </motion.div>

        {/* Floating BarChart Icon */}
        <motion.div
          className="absolute bottom-40 left-1/2 text-blue-200 opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BarChart3 size={65} />
        </motion.div>

        {/* Floating Users Icon */}
        <motion.div
          className="absolute top-1/3 right-10 text-blue-300 opacity-15"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Users size={80} />
        </motion.div>

        {/* Floating Target Icon */}
        <motion.div
          className="absolute bottom-1/3 right-1/5 text-blue-200 opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Target size={55} />
        </motion.div>
      </div>

      {/* Animated Connection Lines - Supply Chain Network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Main supply chain flow lines */}
        <motion.line
          x1="15%" y1="30%"
          x2="45%" y2="60%"
          stroke="#60a5fa"
          strokeWidth="2"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="85%" y1="35%"
          x2="55%" y2="55%"
          stroke="#93c5fd"
          strokeWidth="2"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.line
          x1="30%" y1="70%"
          x2="75%" y2="75%"
          stroke="#60a5fa"
          strokeWidth="2"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Additional network connections */}
        <motion.line
          x1="20%" y1="20%"
          x2="80%" y2="25%"
          stroke="#3b82f6"
          strokeWidth="1.5"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.line
          x1="10%" y1="50%"
          x2="90%" y2="45%"
          stroke="#1d4ed8"
          strokeWidth="1.5"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        />
        <motion.line
          x1="25%" y1="80%"
          x2="70%" y2="85%"
          stroke="#2563eb"
          strokeWidth="1.5"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2.5 }}
        />
        
        {/* Vertical connections */}
        <motion.line
          x1="40%" y1="10%"
          x2="40%" y2="90%"
          stroke="#60a5fa"
          strokeWidth="1"
          opacity="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 3 }}
        />
        <motion.line
          x1="60%" y1="15%"
          x2="60%" y2="85%"
          stroke="#93c5fd"
          strokeWidth="1"
          opacity="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 4 }}
        />
        
        {/* Diagonal network lines */}
        <motion.line
          x1="5%" y1="15%"
          x2="95%" y2="85%"
          stroke="#3b82f6"
          strokeWidth="1"
          opacity="0.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
        />
        <motion.line
          x1="95%" y1="15%"
          x2="5%" y2="85%"
          stroke="#1d4ed8"
          strokeWidth="1"
          opacity="0.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 6 }}
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Heading with Letter-by-Letter Animation */}
          <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
            <div className="flex flex-wrap justify-center">
              {"Laurier Supply Chain Association".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  className={`inline-block ${
                    index >= "Laurier Supply Chain".length 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100" 
                      : ""
                  }`}
                  style={{
                    fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 900,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Connecting the world and you. Join us in shaping the future of global supply chains through innovation, networking, and excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-800 px-8 py-4 rounded-lg text-lg font-bold shadow-2xl hover:shadow-cyan-300/50 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
            >
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/30 transition-all duration-300 min-w-[200px]"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-2 right-2 text-white/20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe size={40} />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2">174+</div>
              <div className="text-white/80">Members</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-2 right-2 text-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Layers size={40} />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Events Annually</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-2 right-2 text-white/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target size={40} />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Networking Success</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
