import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import IndustryStrip from './components/sections/IndustryStrip'
import Services from './components/sections/Services'
import HowItWorks from './components/sections/HowItWorks'
import WhyUs from './components/sections/WhyUs'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-text font-sans leading-relaxed">
      <Navbar />
      <main>
        <Hero />
        <IndustryStrip />
        <Services />
        <HowItWorks />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
