import { motion } from 'framer-motion'
import { Linkedin, Mail, Users } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah.johnson@lsca.ca",
      bio: "Supply Chain Management student with 3+ years of industry experience. Passionate about sustainable logistics."
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "michael.chen@lsca.ca",
      bio: "Operations Management major specializing in global supply chain optimization and digital transformation."
    },
    {
      name: "Emily Rodriguez",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "emily.rodriguez@lsca.ca",
      bio: "Business Administration student focused on supply chain analytics and process improvement methodologies."
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "david.kim@lsca.ca",
      bio: "Marketing and Supply Chain dual major with expertise in digital marketing and brand management."
    }
  ]

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-300/30"
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-300 font-semibold mb-3">{member.role}</p>
                <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.1 }}
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
