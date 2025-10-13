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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight" 
              style={{ fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}>
            About LSCA
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            The Laurier Supply Chain Association is dedicated to connecting students with the dynamic world of supply chain management through education, networking, and professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-cyan-300 mb-4 flex justify-center">
                <item.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
