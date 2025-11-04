import { motion } from 'framer-motion'
import { UserPlus, Mail, Calendar, Award } from 'lucide-react'

const GetInvolvedSection = () => {
  const involvementOptions = [
    {
      icon: UserPlus,
      title: "Become a Member",
      description: "Join our community of supply chain enthusiasts and gain access to exclusive events, workshops, and networking opportunities.",
      action: "Join Now"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our regular events, workshops, and seminars to expand your knowledge and network with industry professionals.",
      action: "View Events"
    },
    {
      icon: Award,
      title: "Volunteer",
      description: "Take on leadership roles within the association and help organize events while building valuable experience.",
      action: "Get Involved"
    },
    {
      icon: Mail,
      title: "Stay Connected",
      description: "Subscribe to our newsletter and follow us on social media to stay updated with the latest news and opportunities.",
      action: "Subscribe"
    }
  ]

  return (
    <section id="get-involved" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Involved</span>
          </h2>
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to take your supply chain journey to the next level? Here are the ways you can get involved with LSCA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-navy-800/40 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300"
            >
              <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                <option.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{option.title}</h3>
              <p className="text-navy-100/70 mb-6 leading-relaxed font-normal">{option.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 transition-all duration-300"
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
