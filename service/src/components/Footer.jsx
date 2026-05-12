import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Berlin, Friedrichstr. 123</strong></p>
        <p>Mo-Fr 10-19, Sa 11-16</p>
        <p className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
