import { Helmet } from 'react-helmet-async'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import CTAButton from '../components/CTAButton.jsx'
import Footer from '../components/Footer.jsx'

export default function ContactsPage() {
  const categoryKey = 'Contacts'

  return (
    <>
      <Helmet>
        <title>Kontakt - Reparatur Service Berlin</title>
        <meta name="description" content="Kontaktieren Sie unseren Reparatur Service in Berlin. Adresse, Öffnungszeiten und WhatsApp-Kontakt." />
      </Helmet>
      <div className="app-shell">
        <Header activeCategory={categoryKey} />
        <div className="page-frame">
          <Hero category={categoryKey} />
          <section className="services-section" aria-label="Kontakt">
            <div className="section-header">
              <div>
                <h2>Kontakt</h2>
              </div>
            </div>
            <div style={{ padding: '8px 3px', color: '#1f1f28' }}>
              <p style={{ margin: 0 }}>
                <strong>Berlin, Friedrichstr. 123</strong>
              </p>
              <p style={{ margin: '6px 0 0', color: '#6b7280' }}>Mo-Fr 10-19, Sa 11-16</p>
              <p style={{ margin: '10px 0 0' }}>
                WhatsApp:{' '}
                <a href="https://wa.me/49123456789?text=Hallo%2C%20ich%20brauche%20Reparatur" target="_blank" rel="noreferrer">
                  +49 123 456789
                </a>
              </p>
            </div>
          </section>
          <Footer />
        </div>
        <CTAButton />
      </div>
    </>
  )
}

