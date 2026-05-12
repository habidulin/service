import { useEffect, useRef, useState } from 'react'
import { Zap, BadgeDollarSign, Wrench, ShieldCheck, Lock, Smartphone, MessageCircle, Droplets, ScanSearch } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Schnelle Reparatur', text: 'Viele Reparaturen noch am selben Tag.' },
  { icon: BadgeDollarSign, title: 'Transparente Preise', text: 'Keine versteckten Kosten oder unnötigen Reparaturen.' },
  { icon: Wrench, title: 'Qualitäts-Ersatzteile', text: 'Geprüfte Komponenten für zuverlässige Reparaturen.' },
  { icon: ShieldCheck, title: 'Garantie auf Reparaturen', text: 'Garantie auf ausgewählte Reparaturen und Teile.' },
  { icon: Lock, title: 'Datenschutz', text: 'Ihre Daten bleiben sicher und privat.' },
  { icon: Smartphone, title: 'Multi-Device Service', text: 'iPhone, iPad, MacBook, Android, Windows und mehr.' },
  { icon: MessageCircle, title: 'Persönlicher Kontakt', text: 'Direkte Kommunikation ohne Callcenter.' },
  { icon: Droplets, title: 'Wasserschaden Hilfe', text: 'Schnelle Reinigung und professionelle Diagnose.' },
  { icon: ScanSearch, title: 'Diagnose & Beratung', text: 'Wir erklären Probleme einfach und verständlich.' },
]

export default function WhyUs() {
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 900

    // mobile: scroll-based
    const onScroll = () => {
      if (isDesktop()) return
      const center = window.innerHeight / 2
      let closest = -1
      let minDist = Infinity
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const dist = Math.abs(r.top + r.height / 2 - center)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActiveIndex(closest)
    }

    // desktop: auto interval
    let interval = null
    const startInterval = () => {
      if (!isDesktop()) return
      setActiveIndex(0)
      interval = setInterval(() => {
        setActiveIndex(prev => {
          let next
          do { next = Math.floor(Math.random() * items.length) } while (next === prev)
          return next
        })
      }, 3000)
    }
    const stopInterval = () => { clearInterval(interval); interval = null }

    const onResize = () => {
      if (isDesktop()) { stopInterval(); startInterval() }
      else { stopInterval(); setActiveIndex(-1) }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    if (isDesktop()) startInterval()
    else onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      stopInterval()
    }
  }, [])

  return (
    <section className="why-us-section">
      <h2 className="why-us-title">Warum Kunden uns wählen</h2>
      <div className="why-us-list">
        {items.map(({ icon: Icon, title, text }, i) => (
          <div
            key={i}
            className={`why-us-row ${i % 2 === 1 ? 'reverse' : ''} ${i === activeIndex ? 'active-row' : ''}`}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <div className={`why-us-icon-wrap ${i === activeIndex ? 'active' : ''}`}>
              <Icon size={26} strokeWidth={1.5} />
            </div>
            <div className="why-us-text">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
