import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturedProperties from '@/components/FeaturedProperties'
import LocationSection from '@/components/LocationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <FeaturedProperties />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
