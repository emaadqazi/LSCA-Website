import { motion } from 'framer-motion'
import { Users, Calendar, Target } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Abstract Chain Link Inspired Patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Interlocking rounded rectangles (chain links) */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-20 border-4 border-teal-500 rounded-full"
          style={{ rotate: '45deg' }}
          animate={{
            y: [0, -15, 0],
            rotate: ['45deg', '50deg', '45deg'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-28 left-24 w-32 h-20 border-4 border-teal-600 rounded-full"
          style={{ rotate: '45deg' }}
          animate={{
            y: [0, -15, 0],
            rotate: ['45deg', '40deg', '45deg'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute bottom-32 right-16 w-28 h-16 border-4 border-teal-500 rounded-full"
          style={{ rotate: '-30deg' }}
          animate={{
            y: [0, 20, 0],
            rotate: ['-30deg', '-25deg', '-30deg'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-28 w-28 h-16 border-4 border-teal-600 rounded-full"
          style={{ rotate: '-30deg' }}
          animate={{
            y: [0, 20, 0],
            rotate: ['-30deg', '-35deg', '-30deg'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-14 border-4 border-navy-600 rounded-full"
          style={{ rotate: '60deg' }}
          animate={{
            x: [0, 15, 0],
            rotate: ['60deg', '65deg', '60deg'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 translate-x-6 translate-y-4 w-24 h-14 border-4 border-navy-700 rounded-full"
          style={{ rotate: '60deg' }}
          animate={{
            x: [0, 15, 0],
            rotate: ['60deg', '55deg', '60deg'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Additional geometric shapes for depth */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-12 border-3 border-teal-400/40 rounded-full"
          style={{ rotate: '20deg' }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle connecting lines inspired by chain links */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <motion.path
          d="M 100 200 Q 200 250, 300 200"
          stroke="#14b8a6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 800 400 Q 700 350, 600 400"
          stroke="#0d9488"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
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
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            The official Supply Chain club at Wilfrid Laurier University!
          </motion.p>


          {/* Stats Section - Premium Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Card 1 - Members */}
            <motion.div 
              className="group relative overflow-hidden"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl group-hover:bg-white/10 transition-all duration-500">
                {/* Icon container */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-4 rounded-2xl border border-teal-500/30">
                      <Users className="w-8 h-8 text-teal-400" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
                      20+
                    </span>
                  </div>
                  <div className="text-white/90 font-medium text-lg">Members</div>
                  <div className="mt-3 text-white/50 text-sm">Active community</div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            
            {/* Card 2 - Events */}
            <motion.div 
              className="group relative overflow-hidden"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl group-hover:bg-white/10 transition-all duration-500">
                {/* Icon container */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-4 rounded-2xl border border-teal-500/30">
                      <Calendar className="w-8 h-8 text-teal-400" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
                      5+
                    </span>
                  </div>
                  <div className="text-white/90 font-medium text-lg">Events Per Term</div>
                  <div className="mt-3 text-white/50 text-sm">Networking opportunities</div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            
            {/* Card 3 - Success */}
            <motion.div 
              className="group relative overflow-hidden"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl group-hover:bg-white/10 transition-all duration-500">
                {/* Icon container */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-4 rounded-2xl border border-teal-500/30">
                      <Target className="w-8 h-8 text-teal-400" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
                      100%
                    </span>
                  </div>
                  <div className="text-white/90 font-medium text-lg">Networking Success</div>
                  <div className="mt-3 text-white/50 text-sm">Career connections</div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
