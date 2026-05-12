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

export default function AndroidPage() {
  const categoryKey = 'Android'
  const currentServices = services[categoryKey]

  return (
    <>
      <Helmet>
        <title>Android Smartphone Reparatur Berlin - Schnelle Reparatur</title>
        <meta name="description" content="Android Smartphone Reparatur in Berlin. Display, Akku, Backcover, Kamera und Wasserschaden Reparatur. Professioneller Service für Android Geräte." />
        <meta name="keywords" content="Android Reparatur Berlin, Smartphone Reparatur Berlin, Android Display Reparatur, Android Akku Austausch" />
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
