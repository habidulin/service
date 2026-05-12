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

export default function WatchPage() {
  const categoryKey = 'Watch'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>Apple Watch Reparatur Berlin - Zuverlässiger Service</title>
        <meta name="description" content="Apple Watch Reparatur in Berlin. Software Update und Reparatur von Apple Watch. Diagnose und Wartung. Professioneller Service." />
        <meta name="keywords" content="Apple Watch Reparatur Berlin, Apple Watch Software Update, Apple Watch Diagnose" />
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
