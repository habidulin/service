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

export default function IPadPage() {
  const categoryKey = 'iPad'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>iPad Reparatur Berlin - Zuverlässige Reparaturdienste</title>
        <meta name="description" content="iPad Reparatur in Berlin. Professionelle Reparatur von iPads. Display, Akku, Kamera, Audio und Wasserschaden Reparatur. Schneller Service." />
        <meta name="keywords" content="iPad Reparatur Berlin, iPad Display Reparatur, iPad Akku Austausch, iPad Kamera Reparatur" />
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
