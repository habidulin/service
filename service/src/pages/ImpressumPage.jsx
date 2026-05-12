import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum – Reparatur Service Berlin</title>
      </Helmet>
      <div className="legal-page">
        <Link to="/" className="legal-back">← Zurück</Link>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>FIRMENNAME</strong><br />
          STRASSE HAUSNUMMER<br />
          PLZ STADT
        </p>

        <h2>Inhaber</h2>
        <p>VORNAME NACHNAME</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+49000000000">+49 000 000000</a><br />
          E-Mail: <a href="mailto:info@example.de">info@example.de</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>USt-IdNr.: DE000000000</p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
          .<br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </>
  )
}
