import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, X, Mic, Linkedin } from 'lucide-react'
import { useState } from 'react'

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  
  // Get base URL for image paths
  const baseUrl = import.meta.env.BASE_URL

  const events = [
    {
      title: "Careers in Supply Chain Speaker Panel",
      date: "October 6th, 2025",
      time: "7:00PM to 9:00PM",
      location: "Lazaridis, LH2064",
      attendees: "150+",
      description: "Join us as 5 speakers share their insights and experiences working in the Supply Chain Industry",
      fullDescription: "You will have the chance to hear 5 industry preofessionals speak about their experience working in Supply Chain. We have speakers from all backgrounds, whether that be academia, the liquor industry, consulting, and more. Join us for an event of networking and learning more about the Supply Chain Industry.",
      speakers: [
        { 
          name: "Blessing Ukiri", 
          title: "Supply Chain & Operations at EY", 
          photo: `${baseUrl}images/SpeakersPFP/Blessing-Ukiri.jpeg`, 
          linkedin: "https://www.linkedin.com/in/blessingukiri/" 
        },
        { 
          name: "Kunal Sheel", 
          title: "Sr. IT Analyst, Supply Chain, at Honey Well", 
          photo: `${baseUrl}images/SpeakersPFP/Kunal-Sheel.jpeg`, 
          linkedin: "https://www.linkedin.com/in/kunalsheel/" 
        },
        { 
          name: "Micheal Haughton", 
          title: "Program Director of Supply Chain Management at Laurier", 
          photo: `${baseUrl}images/SpeakersPFP/Micheal-Haughton.jpeg`, 
          linkedin: "https://www.linkedin.com/in/michael-haughton-99395a3a/" 
        },
        { 
          name: "Andaleeb Syed Dobson", 
          title: "Inventory Planning/Supply Chain Strategy at LCBO", 
          photo: `${baseUrl}images/SpeakersPFP/Andaleeb-Syed-Dobson.jpeg`, 
          linkedin: "https://www.linkedin.com/in/andaleeb-syed-dobson/" 
        },
        {
          name: "Redwan Siddiqui",
          title: "Professor in Supply Chain Management",
          photo: `${baseUrl}images/SpeakersPFP/Redwan-Siddiqui.jpeg`,
          linkedin: "https://www.linkedin.com/in/redwan/"
        }
      ]
    },
    {
      title: "Supply Chain Trivia",
      date: "January 12th, 2026",
      time: "7:00PM to 9:00PM",
      location: "Lazaridis, LH2064",
      attendees: "100+",
      description: "Test your supply chain knowledge in our Jeopardy-style trivia night with a $250 prize pool!",
      fullDescription: "Join us for an exciting evening of Supply Chain Trivia! Compete in 2-3 rounds of Jeopardy-style questions for a chance to win from our $250 prize pool. LSCA members can participate if they bring a team of friends. We're also giving away 2x $25 gift cards to attendees (non-LSCA members eligible). Plus, there's an internal competition for LSCA members - whoever brings the most people wins a $50 gift card! Register through the link in our Instagram bio and make sure to fill in which LSCA member referred you. Snacks included. Dress code is casual - wear your LSCA merch if you have it!",
      speakers: []
    },
    {
      title: "US Tariffs Case Competition",
      date: "February 27th, 2026",
      time: "TBD",
      location: "TBD",
      attendees: "Open to BU275/BU375 Students",
      description: "An optional case competition for BU275 and BU375 students analyzing US tariffs for bonus marks.",
      fullDescription: "The Supply Chain Department is introducing an optional case competition into BU275 and BU375 for bonus marks regarding US tariffs. Instead of a PowerPoint presentation, participants will present a poster solution (similar to World of Opportunities in 4th year). Cases will be distributed approximately 2 weeks before the presentation date. This competition is organized by Dr. Michael Haughton, our faculty advisor, in collaboration with LSCA. Open to all students currently enrolled in BU275 or BU375.",
      speakers: []
    }
  ]

  return (
    <section id="events" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Past & Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">Events</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedEvent(index)}
              className="group bg-navy-800/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 border border-teal-400/20 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-6 flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-teal-400 transition-colors min-h-[3rem]">{event.title}</h3>
                <p className="text-navy-100/70 mb-3 sm:mb-4 font-normal leading-relaxed text-sm sm:text-base min-h-[4rem]">{event.description}</p>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-teal-400/10 flex-shrink-0">
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

              <div className="mt-4 pt-4 border-t border-teal-400/10 flex-shrink-0">
                <button className="text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl max-w-3xl w-full border border-teal-400/30 shadow-2xl max-h-[85vh] sm:max-h-[70vh] overflow-hidden relative m-2"
            >
              {/* Close Button - Positioned absolutely above scrollable content */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-1 right-1 md:top-2 md:right-2 text-white/60 hover:text-white transition-colors z-50 bg-navy-800/80 rounded-full p-1.5 hover:bg-navy-800"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2} />
              </button>

              {/* Scrollable Content Container */}
              <div 
                className="overflow-y-auto custom-scrollbar p-4 sm:p-6 md:p-8 max-h-[85vh] sm:max-h-[70vh] relative pt-10 sm:pt-12 md:pt-14"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(20, 184, 166, 0.4) transparent'
                }}
              >
                {/* Event Content */}
                <div className="space-y-6 pr-2">
                {/* Header */}
                <div className="pr-4 sm:pr-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {events[selectedEvent].title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-navy-100/80 leading-relaxed">
                    {events[selectedEvent].fullDescription}
                  </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-5 border-y border-teal-400/20">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-teal-500/20 p-2 sm:p-3 rounded-xl">
                      <Calendar className="text-teal-400" size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">Date</p>
                      <p className="text-white font-medium text-sm sm:text-base">{events[selectedEvent].date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-teal-500/20 p-2 sm:p-3 rounded-xl">
                      <Clock className="text-teal-400" size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">Time</p>
                      <p className="text-white font-medium text-sm sm:text-base">{events[selectedEvent].time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-teal-500/20 p-2 sm:p-3 rounded-xl">
                      <MapPin className="text-teal-400" size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base">{events[selectedEvent].location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-teal-500/20 p-2 sm:p-3 rounded-xl">
                      <Users className="text-teal-400" size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">Attendees</p>
                      <p className="text-white font-medium text-sm sm:text-base">{events[selectedEvent].attendees}</p>
                    </div>
                  </div>
                </div>

                {/* Speakers Section - Only show if there are speakers */}
                {events[selectedEvent].speakers.length > 0 && (
                <div className="pb-2">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <Mic className="text-teal-400" size={20} strokeWidth={2} />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Speakers</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {events[selectedEvent].speakers.map((speaker, idx) => (
                      <div
                        key={idx}
                        className="bg-navy-900/50 rounded-xl p-3 sm:p-4 border border-teal-400/20 hover:border-teal-400/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                            {/* Speaker avatar */}
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                              {speaker.photo ? (
                                <>
                                  <img 
                                    src={speaker.photo}
                                    alt={speaker.name}
                                    className="w-full h-full rounded-full object-cover ring-2 ring-teal-400/40"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                      if (fallback) fallback.style.display = 'flex';
                                    }}
                                  />
                                  <div 
                                    className="w-full h-full rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center ring-2 ring-teal-400/40 hidden avatar-fallback"
                                  >
                                    <span className="text-white font-bold text-lg">
                                      {speaker.name.charAt(0)}
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <div 
                                  className="w-full h-full rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center ring-2 ring-teal-400/40"
                                >
                                  <span className="text-white font-bold text-lg">
                                    {speaker.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-bold text-sm sm:text-base mb-1">{speaker.name}</h4>
                              <p className="text-navy-100/70 text-xs sm:text-sm leading-snug">{speaker.title}</p>
                            </div>
                          </div>
                          
                          {/* LinkedIn link */}
                          {'linkedin' in speaker && speaker.linkedin && (
                            <a
                              href={speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-teal-400/70 hover:text-teal-400 hover:scale-110 transition-all ml-2 sm:ml-4 flex-shrink-0"
                              aria-label={`${speaker.name}'s LinkedIn`}
                            >
                              <Linkedin size={18} strokeWidth={2} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default EventsSection
