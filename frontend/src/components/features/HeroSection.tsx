import { motion } from 'framer-motion'
import { Package, TruckIcon, Globe, Layers, Factory, Warehouse, Ship, Plane, BarChart3, Users, Target } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Supply Chain Icons - More subtle and professional */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Floating Package Icon 1 */}
        <motion.div
          className="absolute top-20 left-10 text-teal-400/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Package size={60} strokeWidth={1.5} />
        </motion.div>

        {/* Floating Truck Icon */}
        <motion.div
          className="absolute top-40 right-20 text-navy-300/40"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TruckIcon size={70} strokeWidth={1.5} />
        </motion.div>

        {/* Floating Globe Icon */}
        <motion.div
          className="absolute bottom-40 left-1/4 text-teal-400/30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Globe size={65} strokeWidth={1.5} />
        </motion.div>

        {/* Floating Layers Icon */}
        <motion.div
          className="absolute top-1/2 right-1/4 text-navy-300/40"
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Layers size={55} strokeWidth={1.5} />
        </motion.div>

        {/* Floating Ship Icon */}
        <motion.div
          className="absolute bottom-60 left-20 text-teal-400/30"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ship size={65} strokeWidth={1.5} />
        </motion.div>

        {/* Floating Warehouse Icon */}
        <motion.div
          className="absolute top-80 right-1/3 text-navy-300/40"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Warehouse size={60} strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Animated Connection Lines - Subtle Supply Chain Network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <motion.line
          x1="15%" y1="30%"
          x2="45%" y2="60%"
          stroke="#22c9e0"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="85%" y1="35%"
          x2="55%" y2="55%"
          stroke="#1ca5c1"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.line
          x1="30%" y1="70%"
          x2="75%" y2="75%"
          stroke="#22c9e0"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Heading - Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">
                {"Laurier Supply Chain".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.05,
                      delay: index * 0.10, // 50ms per character
                      ease: "easeInOut"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-navy-200">
                {"Association".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.05,
                      delay: (index + 21) * 0.10, // Starts after first line
                      ease: "easeInOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-navy-100/80 mb-12 max-w-3xl mx-auto font-light"
          >
            Building connections, fostering innovation, and empowering the next generation of supply chain leaders
          </motion.p>


          {/* Stats Section - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div 
              className="group relative bg-navy-800/50 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-400/20 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute -top-10 -right-10 text-teal-400/10 group-hover:text-teal-400/20 transition-colors"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe size={120} strokeWidth={1} />
              </motion.div>
              <div className="relative">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-300 mb-3">20+</div>
                <div className="text-navy-100 font-medium text-lg">Members</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-navy-800/50 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-400/20 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute -top-10 -right-10 text-teal-400/10 group-hover:text-teal-400/20 transition-colors"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Layers size={120} strokeWidth={1} />
              </motion.div>
              <div className="relative">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-300 mb-3">5+</div>
                <div className="text-navy-100 font-medium text-lg">Events Per Term</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-navy-800/50 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-400/20 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute -top-10 -right-10 text-teal-400/10 group-hover:text-teal-400/20 transition-colors"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target size={120} strokeWidth={1} />
              </motion.div>
              <div className="relative">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-300 mb-3">100%</div>
                <div className="text-navy-100 font-medium text-lg">Networking Success</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
