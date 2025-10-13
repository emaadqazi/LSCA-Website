import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
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
            Contact Us
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold">
            Have questions about LSCA? Want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Information - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-cyan-300 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">Email</p>
                  <p className="text-white font-bold">info@lsca.ca</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyan-300 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">Phone</p>
                  <p className="text-white font-bold">+1 (519) 884-0710</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-cyan-300 mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">Address</p>
                  <p className="text-white font-bold">
                    Wilfrid Laurier University<br />
                    75 University Avenue West<br />
                    Waterloo, ON N2L 3C5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
