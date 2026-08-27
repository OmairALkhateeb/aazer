import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/landing/HeroSection'
import IntroSection from '../components/landing/IntroSection'
import FeatureShowcase from '../components/landing/FeatureShowcase'
import WhyAzerSection from '../components/landing/WhyAzerSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import DownloadSection from '../components/landing/DownloadSection'
import FAQSection from '../components/landing/FAQSection'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <FeatureShowcase />
        <WhyAzerSection />
        <TestimonialsSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
