import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
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
                        delay: index * 0.10,
                        ease: "easeInOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600">
                  {"Association".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.05,
                        delay: (index + 21) * 0.10,
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
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            The official Supply Chain club at Wilfrid Laurier University!
          </motion.p>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
