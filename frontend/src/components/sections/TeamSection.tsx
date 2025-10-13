import { motion } from 'framer-motion'
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const TeamSection = () => {
  const [activePortfolio, setActivePortfolio] = useState(0)

  const portfolios = [
    {
      name: "Co-presidents",
      color: "from-purple-500 to-pink-500",
      vps: [
        {
          name: "Emaad Qazi",
          role: "Co-President",
          image: "/images/MembersPFP/VPs/EmaadQazi.png",
          linkedin: "#",
          email: "emaad.qazi@lsca.ca",
          bio: "Leading LSCA with strategic vision and operational excellence."
        },
        {
          name: "Konstance Vondouris",
          role: "Co-President", 
          image: "/images/MembersPFP/VPs/KonstanceVondouris.png",
          linkedin: "#",
          email: "konstance.vondouris@lsca.ca",
          bio: "Driving innovation and growth in supply chain education."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Director",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "director1@lsca.ca",
          bio: "Supporting presidential initiatives and strategic planning."
        }
      ]
    },
    {
      name: "Corporate",
      color: "from-blue-500 to-cyan-500",
      vps: [
        {
          name: "Abira Selim",
          role: "VP Corporate",
          image: "/images/MembersPFP/VPs/AbiraSelim.png",
          linkedin: "#",
          email: "abira.selim@lsca.ca",
          bio: "Building strategic partnerships with industry leaders."
        },
        {
          name: "Zanir Khot",
          role: "VP Corporate",
          image: "/images/MembersPFP/VPs/ZanirKhot.png",
          linkedin: "#",
          email: "zanir.khot@lsca.ca",
          bio: "Developing corporate relationships and sponsorship opportunities."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Corporate Director",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "corporate.director@lsca.ca",
          bio: "Managing corporate relationships and partnerships."
        }
      ]
    },
    {
      name: "Education",
      color: "from-green-500 to-emerald-500",
      vps: [
        {
          name: "Ewan Macneil",
          role: "VP Education",
          image: "/images/MembersPFP/VPs/EwanMacneil.png",
          linkedin: "#",
          email: "ewan.macneil@lsca.ca",
          bio: "Developing educational programs and learning opportunities."
        },
        {
          name: "Ben Maycock",
          role: "VP Education",
          image: "/images/MembersPFP/VPs/BenMaycock.png",
          linkedin: "#",
          email: "ben.maycock@lsca.ca",
          bio: "Creating innovative learning experiences and educational content."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Education Director",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "education.director@lsca.ca",
          bio: "Creating engaging educational content and workshops."
        }
      ]
    },
    {
      name: "Events",
      color: "from-orange-500 to-red-500",
      vps: [
        {
          name: "Brayden Greekamol",
          role: "VP Events",
          image: "/images/MembersPFP/VPs/BraydenGreekamol.png",
          linkedin: "#",
          email: "brayden.greekamol@lsca.ca",
          bio: "Organizing memorable events and networking opportunities."
        },
        {
          name: "Brady Kuzma",
          role: "VP Events",
          image: "/images/MembersPFP/VPs/BradyKuzma.png",
          linkedin: "#",
          email: "brady.kuzma@lsca.ca",
          bio: "Coordinating logistics and ensuring successful event execution."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Events Director",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "events.director@lsca.ca",
          bio: "Planning and executing successful events and activities."
        }
      ]
    },
    {
      name: "Marketing",
      color: "from-pink-500 to-rose-500",
      vps: [
        {
          name: "Hailey Krywiak",
          role: "VP Marketing",
          image: "/images/MembersPFP/VPs/HaileyKrywiak.png",
          linkedin: "#",
          email: "hailey.krywiak@lsca.ca",
          bio: "Leading marketing strategies and brand development."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Marketing Director",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "marketing.director@lsca.ca",
          bio: "Creating compelling marketing campaigns and content."
        }
      ]
    },
    {
      name: "Software Development",
      color: "from-indigo-500 to-purple-500",
      vps: [
        {
          name: "Chris Weng",
          role: "VP Software Development",
          image: "/images/MembersPFP/VPs/ChrisWeng.png",
          linkedin: "#",
          email: "chris.weng@lsca.ca",
          bio: "Leading digital innovation and technology solutions."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Software Director",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "software.director@lsca.ca",
          bio: "Developing technical solutions and digital platforms."
        }
      ]
    },
    {
      name: "Internal",
      color: "from-teal-500 to-cyan-500",
      vps: [
        {
          name: "Evika Trinidade",
          role: "VP Internal",
          image: "/images/MembersPFP/VPs/EvikaTrinidade.png",
          linkedin: "#",
          email: "evika.trinidade@lsca.ca",
          bio: "Managing internal operations and member engagement."
        },
        {
          name: "Afnan Shan",
          role: "VP Internal",
          image: "/images/MembersPFP/VPs/AfnanShan.png",
          linkedin: "#",
          email: "afnan.shan@lsca.ca",
          bio: "Supporting member relations and internal communications."
        }
      ],
      directors: [
        {
          name: "Director 1",
          role: "Internal Director",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
          linkedin: "#",
          email: "internal.director@lsca.ca",
          bio: "Supporting internal processes and member services."
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
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Get to know the dedicated students who make LSCA possible. Our team is committed to providing exceptional value to our members.
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
                    ? `bg-gradient-to-r ${portfolio.color} text-white shadow-lg`
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
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className={`text-4xl font-black mb-4 bg-gradient-to-r ${portfolios[activePortfolio].color} bg-clip-text text-transparent`}>
              {portfolios[activePortfolio].name}
            </h3>
          </div>

          {/* VPs Row */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Vice Presidents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolios[activePortfolio].vps.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-300/30"
                    />
                    <h5 className="text-lg font-bold text-white mb-1">{member.name}</h5>
                    <p className="text-cyan-300 font-semibold mb-3">{member.role}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Directors Row */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Directors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolios[activePortfolio].directors.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-300/30"
                    />
                    <h5 className="text-lg font-bold text-white mb-1">{member.name}</h5>
                    <p className="text-cyan-300 font-semibold mb-3">{member.role}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
