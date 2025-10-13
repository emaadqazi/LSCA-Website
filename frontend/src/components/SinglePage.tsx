import { useEffect } from 'react'
import Header from './layout/Header'
import HeroSection from './features/HeroSection'
import AboutSection from './sections/AboutSection'
import EventsSection from './sections/EventsSection'
import GetInvolvedSection from './sections/GetInvolvedSection'
import TeamSection from './sections/TeamSection'
import ContactSection from './sections/ContactSection'

const SinglePage = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Simple Background for now */}
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-200 via-teal-400 via-blue-500 to-blue-800 z-0"></div>
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Test content first */}
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">LSCA Website</h1>
        </div>
        
        {/* Home Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Get Involved Section */}
        <GetInvolvedSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}

export default SinglePage
