import { Helmet } from 'react-helmet-async'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import ReviewsCarousel from '../components/ReviewsCarousel.jsx'
import WhyUs from '../components/WhyUs.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import CTAButton from '../components/CTAButton.jsx'
import Footer from '../components/Footer.jsx'
import { services, reviews } from '../data/mockData.jsx'

export default function WindowsPage() {
  const categoryKey = 'Windows'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>Windows Laptop Reparatur Berlin - Professionelle Dienstleistungen</title>
        <meta name="description" content="Windows Laptop Reparatur in Berlin. Display, Akku, Audio, Tastatur und Wasserschaden Reparatur. Zuverlässiger Service für Windows Geräte." />
        <meta name="keywords" content="Windows Reparatur Berlin, Laptop Reparatur Berlin, Windows Display Reparatur, Windows Akku Austausch" />
      </Helmet>
      <div className="app-shell">
        <Header activeCategory={categoryKey} />
        <div className="page-frame">
          <Hero category={categoryKey} />
          <ServicesGrid services={currentServices} category={categoryKey} />
          <HowItWorks />
          <WhyUs />
          <ReviewsCarousel reviews={reviews} title="Bewertung" />
          <Footer />
        </div>
        <CTAButton />
      </div>
    </>
  )
}
