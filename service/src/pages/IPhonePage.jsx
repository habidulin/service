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

export default function IPhonePage() {
  const categoryKey = 'iPhone'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>iPhone Reparatur Berlin - Professionelle Smartphone Reparatur</title>
        <meta name="description" content="iPhone Reparatur in Berlin. Schnelle und zuverlässige Reparatur von iPhones. Display, Akku, Backcover, Kamera und mehr. Kontaktieren Sie uns." />
        <meta name="keywords" content="iPhone Reparatur Berlin, iPhone Display Reparatur, iPhone Akku Austausch, iPhone Kamera Reparatur" />
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
