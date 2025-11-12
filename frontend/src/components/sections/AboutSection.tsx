import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Laurier Supply Chain Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            The Laurier Supply Chain Association is dedicated to connecting students with the dynamic world of supply chain management through education, networking, and professional development.
          </p>
          <br />
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            With 25 members consisting of 12 VPs and 15 Directors, we have a team experienced in working amongst numerous industries including Supply Chain, Tech, Accounting, and more!
          </p>
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-3xl mx-auto leading-relaxed font-light">
          <br />
            Serving 3000+ students in the Lazaridis Students Society and beyond since 2012, LSCA continues to be the leading Supply Chain club at Laurier.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
