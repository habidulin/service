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

export default function AirPodsPage() {
  const categoryKey = 'AirPods'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>AirPods Reparatur Berlin - Diagnose und Service</title>
        <meta name="description" content="AirPods Reparatur in Berlin. Diagnose und Wartung von AirPods. Professioneller Service für Ihre drahtlosen Kopfhörer." />
        <meta name="keywords" content="AirPods Reparatur Berlin, AirPods Diagnose, AirPods Service" />
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
