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
      {/* Professional Navy Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-900 z-0"></div>
      
      {/* Animated Background Overlay */}
      <div className="fixed inset-0 z-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-navy-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-400/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-navy-400/5 to-transparent"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #22c9e0 1px, transparent 1px),
            linear-gradient(to bottom, #22c9e0 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
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
