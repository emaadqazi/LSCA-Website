import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-100/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Have questions about LSCA? Want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Information - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center px-4"
        >
          <div className="bg-navy-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 border border-teal-400/20 max-w-lg w-full hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8 text-center">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 rounded-xl bg-navy-900/30 hover:bg-navy-900/50 transition-colors">
                <div className="text-teal-400 mr-4">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-navy-100/60 text-sm font-normal">Email</p>
                  <p className="text-white font-medium">info@lsca.ca</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 rounded-xl bg-navy-900/30 hover:bg-navy-900/50 transition-colors">
                <div className="text-teal-400 mr-4">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-navy-100/60 text-sm font-normal">Phone</p>
                  <p className="text-white font-medium">+1 (519) 884-0710</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-navy-900/30 hover:bg-navy-900/50 transition-colors">
                <div className="text-teal-400 mr-4 mt-1">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-navy-100/60 text-sm font-normal">Address</p>
                  <p className="text-white font-medium leading-relaxed">
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
