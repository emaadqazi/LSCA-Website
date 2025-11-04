import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">LSCA</span>
          </h2>
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-4xl mx-auto leading-relaxed font-light">
            The Laurier Supply Chain Association is dedicated to connecting students with the dynamic world of supply chain management through education, networking, and professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To bridge the gap between academic learning and real-world supply chain challenges."
            },
            {
              icon: Users,
              title: "Our Community",
              description: "A diverse network of students passionate about supply chain excellence."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "Committed to the highest standards in education and professional development."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Connecting local talent with global supply chain opportunities."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-navy-800/40 backdrop-blur-md rounded-2xl p-6 border border-teal-400/20 text-center hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300"
            >
              <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-navy-100/70 font-normal">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
