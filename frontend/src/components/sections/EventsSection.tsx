import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const EventsSection = () => {
  const events = [
    {
      title: "Supply Chain Innovation Summit",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Laurier Campus",
      attendees: "150+",
      description: "Join industry leaders as they discuss the latest trends in supply chain innovation and digital transformation."
    },
    {
      title: "Networking Mixer with Industry Professionals",
      date: "April 8, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Waterloo Convention Centre",
      attendees: "200+",
      description: "Connect with supply chain professionals from leading companies in an informal networking setting."
    },
    {
      title: "Case Study Competition",
      date: "May 3, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Laurier Business School",
      attendees: "80+",
      description: "Test your problem-solving skills in our annual case study competition with real-world supply chain challenges."
    }
  ]

  return (
    <section id="events" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Events</span>
          </h2>
          <p className="text-xl md:text-2xl text-navy-100/80 max-w-4xl mx-auto leading-relaxed font-light">
            Stay connected with our latest events, workshops, and networking opportunities designed to advance your supply chain career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-navy-800/40 backdrop-blur-md rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{event.title}</h3>
                <p className="text-navy-100/70 mb-4 font-normal leading-relaxed">{event.description}</p>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-teal-400/10">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-3 text-teal-400" strokeWidth={2} />
                  <span className="text-navy-100/80 text-sm">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-3 text-teal-400" strokeWidth={2} />
                  <span className="text-navy-100/80 text-sm">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-teal-400" strokeWidth={2} />
                  <span className="text-navy-100/80 text-sm">{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users size={18} className="mr-3 text-teal-400" strokeWidth={2} />
                  <span className="text-navy-100/80 text-sm">{event.attendees} attendees</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
