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

export default function IMacPage() {
  const categoryKey = 'iMac'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>iMac Reparatur Berlin - Professionelle Reparaturdienste</title>
        <meta name="description" content="iMac Reparatur in Berlin. Schnelle und zuverlässige Reparatur von iMacs. Display, Akku, Audio und mehr. Kontaktieren Sie uns für einen Termin." />
        <meta name="keywords" content="iMac Reparatur Berlin, iMac Display Reparatur, iMac Akku Austausch, iMac Audio Reparatur" />
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
