import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const TeamSection = () => {
  const teams = [
    {
      name: "Presidents",
      members: [
        {
          name: "Brady Kuzma",
          role: "Co-President",
          yearProgram: "3rd Year BBA/BSc",
          image: "/LSCA-Website/images/MembersPFP/VPs/BradyKuzma.png",
          linkedin: "https://www.linkedin.com/in/brady-kuzma/"
        },
        {
          name: "Konstance Vondouris",
          role: "Co-President",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/KonstanceVondouris.png",
          linkedin: "https://www.linkedin.com/in/konstance-voudouris-628003291/"
        }
      ]
    },
    {
      name: "Admin",
      members: [
        {
          name: "Ben Maycock",
          role: "Executive VP",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/BenMaycock.png",
          linkedin: "https://www.linkedin.com/in/ben-maycock-56a84b29b/"
        },
        {
          name: "Evika Trinidade",
          role: "VP of Internal Affairs",
          yearProgram: "4th Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/EvikaTrinidade.png",
          linkedin: "https://www.linkedin.com/in/evika-trinidade/"
        },
        {
          name: "Ewan Macneil",
          role: "Senior Advisor",
          yearProgram: "4th Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/EwanMacneil.png",
          linkedin: "https://www.linkedin.com/in/ewanmacneil/"
        },
        {
          name: "Leonidas Bakalis",
          role: "First Year Representative",
          yearProgram: "1st Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/LeonidasBakalis.png",
          linkedin: "https://www.linkedin.com/in/leonidas-bakalis-014209308/"
        }
      ]
    },
    {
      name: "Corporate Relations",
      members: [
        {
          name: "Abira Selim",
          role: "VP of Corporate Relations",
          yearProgram: "4th Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/AbiraSelim.png",
          linkedin: "https://www.linkedin.com/in/abiraselim2004/"
        },
        {
          name: "Iqra Morkas",
          role: "Director of Corporate Relations",
          yearProgram: "3rd Year BA",
          image: "/LSCA-Website/images/MembersPFP/Directors/IqraMorkas.png",
          linkedin: "https://www.linkedin.com/in/iqra-morkas-0aa121274/"
        },
        {
          name: "James Carmichael",
          role: "Director of Corporate Relations",
          yearProgram: "1st Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/JamesCarmichael.png",
          linkedin: "https://www.linkedin.com/in/james-carmichael-95707b374/"
        }
      ]
    },
    {
      name: "Education",
      members: [
        {
          name: "Afnan Shan",
          role: "VP of Education",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/AfnanShan.png",
          linkedin: "https://www.linkedin.com/in/afnanshan/"
        },
        {
          name: "Sebastian Teodorescu",
          role: "Director of Education",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/SebastianTeodorescu.png",
          linkedin: "https://www.linkedin.com/in/sebastian-teodorescu/"
        },
        {
          name: "Majd Abdulkarim",
          role: "Director of Education",
          yearProgram: "2nd Year BBA/Finmath",
          image: "/LSCA-Website/images/MembersPFP/Directors/MajdAbdulkarim.png",
          linkedin: "https://www.linkedin.com/in/majdabdulkarim/"
        },
        {
          name: "Ali Razack",
          role: "Director of Education",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/AliRazack.png",
          linkedin: "https://www.linkedin.com/in/ayanali-razack/"
        },
      ]
    },
    {
      name: "Events",
      members: [
        {
          name: "Hailey Krywiak",
          role: "Co-VP of Events",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/HaileyKrywiak.png",
          linkedin: "https://www.linkedin.com/in/hailey-krywiak-4ba971303/"
        },
        {
          name: "Brayden Greekamol",
          role: "Co-VP of Events",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/BraydenGreekamol.png",
          linkedin: "https://www.linkedin.com/in/brayden-greekamol/"
        },
        {
          name: "Jay Kapadia",
          role: "Director of Events",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/JayKapadia.png",
          linkedin: "https://www.linkedin.com/in/jay-kap/"
        },
        {
          name: "Kavya Patel",
          role: "Director of Events",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/KavyaPatel.png",
          linkedin: "https://www.linkedin.com/in/kavya-patell/"
        }
      ]
    },
    {
      name: "Marketing",
      members: [
        {
          name: "Chris Weng",
          role: "VP of Marketing",
          yearProgram: "2nd Year BBA/BMath (UW)",
          image: "/LSCA-Website/images/MembersPFP/VPs/ChrisWeng.png",
          linkedin: "https://www.linkedin.com/in/chris-weng-intern/"
        },
        {
          name: "Ryder Vilanez",
          role: "Director of Marketing",
          yearProgram: "1st Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/RyderVilanez.png",
          linkedin: "https://www.linkedin.com/in/rydervilanez/"
        },
        {
          name: "Kaitlyn Lee",
          role: "Director of Marketing",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/KaitlynLee.png",
          linkedin: "https://www.linkedin.com/in/kaitlyn-a-lee/"
        }
      ]
    },
    {
      name: "Software",
      members: [
        {
          name: "Emaad Qazi",
          role: "VP of Software",
          yearProgram: "3rd Year BBA/BSc",
          image: "/LSCA-Website/images/MembersPFP/VPs/EmaadQazi.jpg",
          linkedin: "https://www.linkedin.com/in/emaadqazi/"
        },
        {
          name: "Moeez Ishaq",
          role: "Director of Software",
          yearProgram: "3rd Year BBA/BSc",
          image: "/LSCA-Website/images/MembersPFP/Directors/MoeezIshaq.png",
          linkedin: "https://www.linkedin.com/in/moeez-ishaq/"
        },
        {
          name: "David Zhao",
          role: "Director of Software",
          yearProgram: "2nd Year CS",
          image: "/LSCA-Website/images/MembersPFP/Directors/DavidZhao.png",
          linkedin: "https://www.linkedin.com/in/david-zhao-0524dz/"
        }
      ]
    },
    {
      name: "Finance",
      members: [
        {
          name: "Zanir Khot",
          role: "VP of Finance",
          yearProgram: "3rd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/VPs/ZanirKhot.png",
          linkedin: "https://www.linkedin.com/in/zanirkhot/"
        },
        {
          name: "Nicholas Cornea",
          role: "VP of Finance",
          yearProgram: "2nd Year BBA",
          image: "/LSCA-Website/images/MembersPFP/Directors/NicholasCornea.png",
          linkedin: "https://www.linkedin.com/in/nicholas-cornea-716350217/"
        }
      ]
    }
  ]

  return (
    <section id="team" className="min-h-screen px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Team</span>
          </h2>
          {/* <p className="text-xl md:text-2xl text-navy-100/80 max-w-4xl mx-auto leading-relaxed font-light">
            Get to know the LSCA team, consisting of 12 VPs and 15+ Directors across 8 portfolios!
          </p> */}
        </motion.div>

        {/* All Teams Display */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <motion.div
              key={teamIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section Heading */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {team.name}
              </h3>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-start">
                {team.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start text-left"
                  >
                    {/* Profile Picture */}
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                    
                    {/* Name */}
                    <h4 className="text-lg font-bold text-white mb-2">
                      {member.name}
                    </h4>
                    
                    {/* Role */}
                    <p className="text-navy-100/90 font-medium mb-2 text-sm">
                      {member.role}
                    </p>
                    
                    {/* Year/Program */}
                    <p className="text-navy-100/60 mb-3 text-xs">
                      {member.yearProgram}
                    </p>
                    
                    {/* LinkedIn Link */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center text-teal-400/60 hover:text-teal-400 transition-colors"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
