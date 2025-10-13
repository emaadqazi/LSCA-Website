import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Have questions about LSCA? Want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-cyan-300 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="text-white font-semibold">info@lsca.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-cyan-300 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 (519) 884-0710</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-cyan-300 mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      Wilfrid Laurier University<br />
                      75 University Avenue West<br />
                      Waterloo, ON N2L 3C5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-300 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-300 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="john.doe@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-300 transition-colors"
                  placeholder="General Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-300 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
