import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import CTAButton from '../components/CTAButton.jsx'
import Footer from '../components/Footer.jsx'
import { services } from '../data/mockData.jsx'
import { resolveServiceIcon } from '../lib/serviceAssets.js'

function serviceKeyFromLink(link) {
  if (!link) return null
  const parts = link.split('/').filter(Boolean)
  return parts.at(-1) ?? null
}

const CATEGORY_BY_DEVICE = {
  imac: 'iMac',
  macbook: 'MacBook',
  ipad: 'iPad',
  iphone: 'iPhone',
  watch: 'Watch',
  airpods: 'AirPods',
  windows: 'Windows',
  android: 'Android',
}

export default function DeviceServicePage() {
  const { device, service } = useParams()
  const categoryKey = CATEGORY_BY_DEVICE[device] ?? null

  const currentServices = categoryKey ? (services[categoryKey] ?? []) : []
  const currentService = currentServices.find((entry) => serviceKeyFromLink(entry.link) === service) ?? null
  const iconSrc = currentService && categoryKey ? resolveServiceIcon({ category: categoryKey, name: currentService.name }) : null

  const title = currentService && categoryKey
    ? `${currentService.name} – ${categoryKey} Reparatur Berlin`
    : 'Reparatur – Service'

  const backToDeviceHref = device ? `/device/${device}` : '/'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Reparatur in Berlin. Schnelle Terminvergabe, transparente Preise und WhatsApp-Kontakt."
        />
      </Helmet>
      <div className="app-shell">
        <Header activeCategory={categoryKey ?? 'iPhone'} />
        <div className="page-frame">
          <Hero category={categoryKey ?? 'iPhone'} imageSrc={iconSrc} />

          <section className="services-section" aria-label="Service">
            <div className="section-header">
              <div>
                <h2>{currentService ? currentService.name : 'Service'}</h2>
              </div>
            </div>

            <div style={{ padding: '8px 3px', color: '#1f1f28' }}>
              {currentService ? (
                <>
                  <p style={{ margin: 0, color: '#6b7280' }}>
                    Preis ab <strong style={{ color: '#1f1f28' }}>{currentService.price}</strong>
                  </p>
                  <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: '#6b7280' }}>
                    <li>Schnelle Diagnose und Reparatur</li>
                    <li>Transparente Kosten</li>
                    <li>Termin per WhatsApp</li>
                  </ul>
                  <p style={{ margin: '12px 0 0' }}>
                    <a
                      href={`https://wa.me/49123456789?text=Hallo%2C%20ich%20brauche%20Reparatur%20f%C3%BCr%20${encodeURIComponent(
                        categoryKey ?? 'Gerät',
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jetzt per WhatsApp anfragen
                    </a>
                  </p>
                  <p style={{ margin: '12px 0 0' }}>
                    <Link to={backToDeviceHref}>← Zurück</Link>
                  </p>
                </>
              ) : (
                <>
                  <p style={{ margin: 0, color: '#6b7280' }}>Diese Service-Seite wurde nicht gefunden.</p>
                  <p style={{ margin: '12px 0 0' }}>
                    <Link to={backToDeviceHref}>← Zurück</Link>
                  </p>
                </>
              )}
            </div>
          </section>

          <Footer />
        </div>
        <CTAButton />
      </div>
    </>
  )
}

