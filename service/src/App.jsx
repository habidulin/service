import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './styles/App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import CTAButton from './components/CTAButton.jsx'
import Footer from './components/Footer.jsx'
import IMacPage from './pages/ImacPage.jsx'
import MacBookPage from './pages/MacBookPage.jsx'
import IPadPage from './pages/IPadPage.jsx'
import IPhonePage from './pages/IPhonePage.jsx'
import WatchPage from './pages/WatchPage.jsx'
import AirPodsPage from './pages/AirPodsPage.jsx'
import WindowsPage from './pages/WindowsPage.jsx'
import AndroidPage from './pages/AndroidPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import DeviceServicePage from './pages/DeviceServicePage.jsx'
import ImpressumPage from './pages/ImpressumPage.jsx'
import DatenschutzPage from './pages/DatenschutzPage.jsx'
import { services, reviews } from './data/mockData.jsx'
import { Helmet } from 'react-helmet-async'
import ReviewsCarousel from './components/ReviewsCarousel.jsx'

function HomePage() {
  const defaultCategory = 'iMac'
  const currentServices = services[defaultCategory]

  return (
    <>
      <Helmet>
        <title>Reparatur Service Berlin - Professionelle Geräte Reparatur</title>
        <meta name="description" content="Reparatur Service in Berlin. Schnelle und zuverlässige Reparatur von iMac, MacBook, iPad, iPhone, Watch, AirPods, Windows und Android Geräten." />
        <meta name="keywords" content="Reparatur Berlin, Geräte Reparatur Berlin, iMac Reparatur, MacBook Reparatur, iPhone Reparatur" />
      </Helmet>
      <div className="app-shell">
        <Header activeCategory={defaultCategory} />
        <div className="page-frame">
          <Hero category={defaultCategory} />
          <ServicesGrid services={currentServices} category={defaultCategory} />
          <ReviewsCarousel reviews={reviews} title="Bewertung" />
          <Footer />
        </div>
        <CTAButton />
      </div>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/device/imac" element={<IMacPage />} />
        <Route path="/device/macbook" element={<MacBookPage />} />
        <Route path="/device/ipad" element={<IPadPage />} />
        <Route path="/device/iphone" element={<IPhonePage />} />
        <Route path="/device/watch" element={<WatchPage />} />
        <Route path="/device/airpods" element={<AirPodsPage />} />
        <Route path="/device/windows" element={<WindowsPage />} />
        <Route path="/device/android" element={<AndroidPage />} />
        <Route path="/device/contacts" element={<ContactsPage />} />
        <Route path="/repair/:device/:service" element={<DeviceServicePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
