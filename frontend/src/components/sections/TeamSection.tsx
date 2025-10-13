import { motion } from 'framer-motion'
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const TeamSection = () => {
  const [activePortfolio, setActivePortfolio] = useState(0)

  const portfolios = [
    {
      name: "Leadership",
      vps: [
        {
          name: "Brady Kuzma",
          role: "Co-President",
          yearMajor: "3rd Year BBA/BSc Student",
          image: "./images/MembersPFP/VPs/BradyKuzma.png",
          linkedin: "https://www.linkedin.com/in/brady-kuzma/",
          email: "brady.kuzma@lsca.ca"
        },
        {
          name: "Konstance Vondouris",
          role: "Co-President",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/KonstanceVondouris.png",
          linkedin: "https://www.linkedin.com/in/konstance-voudouris-628003291/",
          email: "konstance.vondouris@lsca.ca"
        },
        {
          name: "Ben Maycock",
          role: "Executive VP",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/BenMaycock.png",
          linkedin: "https://www.linkedin.com/in/ben-maycock-56a84b29b/",
          email: "ben.maycock@lsca.ca"
        },
        {
          name: "Ewan Macneil",
          role: "Senior Advisor",
          yearMajor: "4th Year BBA Student",
          image: "./images/MembersPFP/VPs/EwanMacneil.png",
          linkedin: "https://www.linkedin.com/in/ewanmacneil/",
          email: "ewan.macneil@lsca.ca"
        }
      ]
    },
    {
      name: "Marketing",
      vps: [
        {
          name: "Chris Weng",
          role: "VP of Marketing",
          yearMajor: "2nd Year BBA/BMath (UW)",
          image: "./images/MembersPFP/VPs/ChrisWeng.png",
          linkedin: "https://www.linkedin.com/in/chris-weng-intern/",
          email: "chris.weng@lsca.ca"
        }
      ]
    },
    {
      name: "Internal",
      vps: [
        {
          name: "Evika Trinidade",
          role: "VP of Internal",
          yearMajor: "4th Year BBA Student",
          image: "./images/MembersPFP/VPs/EvikaTrinidade.png",
          linkedin: "https://www.linkedin.com/in/evika-trinidade/",
          email: "evika.trinidade@lsca.ca"
        }
      ]
    },
    {
      name: "Events",
      vps: [
        {
          name: "Hailey Krywiak",
          role: "Co-VP of Events",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/HaileyKrywiak.png",
          linkedin: "https://www.linkedin.com/in/hailey-krywiak-4ba971303/",
          email: "hailey.krywiak@lsca.ca"
        },
        {
          name: "Brayden Greekamol",
          role: "Co-VP of Events",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/BraydenGreekamol.png",
          linkedin: "https://www.linkedin.com/in/brayden-greekamol/",
          email: "brayden.greekamol@lsca.ca"
        }
      ]
    },
    {
      name: "Software",
      vps: [
        {
          name: "Emaad Qazi",
          role: "VP of Software Development",
          yearMajor: "3rd Year BBA/BSc Student",
          image: "./images/MembersPFP/VPs/EmaadQazi.png",
          linkedin: "https://www.linkedin.com/in/emaadqazi/",
          email: "emaad.qazi@lsca.ca"
        }
      ]
    },
    {
      name: "Finance",
      vps: [
        {
          name: "Zanir Khot",
          role: "VP of Finance",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/ZanirKhot.png",
          linkedin: "https://www.linkedin.com/in/zanirkhot/",
          email: "zanir.khot@lsca.ca"
        }
      ]
    },
    {
      name: "Corporate",
      vps: [
        {
          name: "Abira Selim",
          role: "VP of Corporate Relations",
          yearMajor: "4th Year BBA Student",
          image: "./images/MembersPFP/VPs/AbiraSelim.png",
          linkedin: "https://www.linkedin.com/in/abiraselim2004/",
          email: "abira.selim@lsca.ca"
        }
      ]
    },
    {
      name: "Education",
      vps: [
        {
          name: "Afnan Shan",
          role: "VP of Education",
          yearMajor: "3rd Year BBA Student",
          image: "./images/MembersPFP/VPs/AfnanShan.png",
          linkedin: "https://www.linkedin.com/in/afnanshan/",
          email: "afnan.shan@lsca.ca"
        }
      ]
    }
  ]

  const nextPortfolio = () => {
    setActivePortfolio((prev) => (prev + 1) % portfolios.length)
  }

  const prevPortfolio = () => {
    setActivePortfolio((prev) => (prev - 1 + portfolios.length) % portfolios.length)
  }

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight" 
              style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Meet the Team
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold">
            Get to the know the LSCA team, consisting of 12 VPS and 15+ Directors accross 8 portfolios!
          </p>
        </motion.div>

        {/* Portfolio Navigation */}
        <div className="flex justify-center items-center mb-12">
          <motion.button
            onClick={prevPortfolio}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 mr-6"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <div className="flex space-x-4">
            {portfolios.map((portfolio, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePortfolio(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activePortfolio === index
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20'
                }`}
              >
                {portfolio.name}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            onClick={nextPortfolio}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ml-6"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Active Portfolio Display */}
        <motion.div
          key={activePortfolio}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-12">
            <h3 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {portfolios[activePortfolio].name}
            </h3>
          </div>

          {/* Team Members - Dynamic Grid Based on Count */}
          <div className={`grid gap-12 justify-items-center ${
            portfolios[activePortfolio].vps.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto'
              : portfolios[activePortfolio].vps.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : portfolios[activePortfolio].vps.length === 3
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto'
          }`}>
            {portfolios[activePortfolio].vps.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group flex flex-col items-center"
              >
                {/* Large Profile Picture */}
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full mx-auto object-cover border-4 border-white/20 shadow-lg group-hover:border-cyan-300/50 transition-all duration-300"
                  />
                </div>
                
                {/* Text Content Container with Fixed Height */}
                <div className="flex flex-col items-center justify-center min-h-[120px] w-full">
                  {/* Name */}
                  <h5 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{member.name}</h5>
                  
                  {/* Role */}
                  <p className="text-white font-medium mb-2 text-xl leading-tight min-h-[28px] flex items-center justify-center">{member.role}</p>
                  
                  {/* Year/Major */}
                  {member.yearMajor && (
                    <p className="text-white/70 mb-4 text-base font-bold leading-tight min-h-[24px] flex items-center justify-center text-center">{member.yearMajor}</p>
                  )}
                </div>
                
                {/* LinkedIn Link */}
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center text-white/60 hover:text-white transition-colors mt-2"
                >
                  <Linkedin size={20} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
