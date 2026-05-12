import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function DatenschutzPage() {
  return (
    <>
      <Helmet>
        <title>Datenschutz – Reparatur Service Berlin</title>
      </Helmet>
      <div className="legal-page">
        <Link to="/" className="legal-back">← Zurück</Link>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>FIRMENNAME</strong><br />
          STRASSE HAUSNUMMER<br />
          PLZ STADT<br />
          E-Mail: <a href="mailto:info@example.de">info@example.de</a>
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst.
          Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers,
          das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ähnliches.
          Dies sind ausschließlich Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
        </p>

        <h2>3. Kontaktaufnahme per WhatsApp</h2>
        <p>
          Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachrichten und Ihre Telefonnummer
          von WhatsApp Inc. verarbeitet. Weitere Informationen finden Sie in der{' '}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            Datenschutzerklärung von WhatsApp
          </a>.
        </p>

        <h2>4. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerspruch gegen die Verarbeitung</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
          <a href="mailto:info@example.de">info@example.de</a>
        </p>

        <h2>5. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
          Die zuständige Aufsichtsbehörde in Berlin ist der Berliner Beauftragte für
          Datenschutz und Informationsfreiheit.
        </p>
      </div>
    </>
  )
}
