import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Phone, Wrench, PackageCheck, Star } from 'lucide-react'

const steps = [
  { num: '01', icon: MessageCircle, title: 'Kontakt', text: 'Schreiben Sie uns per WhatsApp — schnell und unkompliziert.' },
  { num: '02', icon: Phone, title: 'Beratung', text: 'Wir besprechen das Problem und nennen Ihnen einen fairen Preis.' },
  { num: '03', icon: Wrench, title: 'Reparatur', text: 'Schnelle Diagnose und professionelle Reparatur Ihres Geräts.' },
  { num: '04', icon: PackageCheck, title: 'Qualitätsprüfung', text: 'Jede Reparatur wird sorgfältig geprüft bevor wir sie übergeben.' },
  { num: '05', icon: Star, title: 'Abholen', text: 'Ihr Gerät ist fertig abholen oder wir informieren Sie per WhatsApp.' },
]

export default function HowItWorks() {
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 900

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

    let interval = null
    const startInterval = () => {
      if (!isDesktop()) return
      setActiveIndex(0)
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % steps.length)
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
      <h2 className="why-us-title">Wie wir arbeiten</h2>

      <div className="hiw-body">
        <div className="hiw-timeline-v">
          {steps.map(({ num }, i) => (
            <div key={i} className="hiw-timeline-v-item">
              <div className={`hiw-num ${i === activeIndex ? 'active' : ''}`}>{num}</div>
              {i < steps.length - 1 && <div className="hiw-line-v" />}
            </div>
          ))}
        </div>

        <div className="hiw-cards">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={i}
              className={`hiw-card ${i === activeIndex ? 'active' : ''}`}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className={`hiw-icon-box ${i === activeIndex ? 'active' : ''}`}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="hiw-text">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
