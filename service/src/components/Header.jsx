import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/mockData.jsx'

function Header({ activeCategory }) {
  const categoriesRef = useRef()
  const navigate = useNavigate()
  const currentIndex = categories.findIndex((cat) => cat.key === activeCategory)

  useEffect(() => {
    const container = categoriesRef.current
    if (!container) return
    const buttons = container.querySelectorAll('.category-button')
    const el = buttons[currentIndex]
    if (!el) return
    const elCenter = el.offsetLeft + el.offsetWidth / 2
    const target = Math.max(0, elCenter - container.offsetWidth / 2)
    container.scrollLeft = target
  }, [activeCategory])

  const scrollToIndex = (index, cb) => {
    const container = categoriesRef.current
    if (!container) { cb(); return }
    const buttons = container.querySelectorAll('.category-button')
    const el = buttons[index]
    if (!el) { cb(); return }
    const elCenter = el.offsetLeft + el.offsetWidth / 2
    const target = Math.max(0, elCenter - container.offsetWidth / 2)
    container.scrollTo({ left: target, behavior: 'smooth' })
    let done = false
    const finish = () => { if (!done) { done = true; cb() } }
    container.addEventListener('scrollend', finish, { once: true })
    setTimeout(finish, 320)
  }

  const goTo = (index) => {
    scrollToIndex(index, () => navigate(`/device/${categories[index].key.toLowerCase()}`))
  }

  const handlePrev = () => goTo((currentIndex - 1 + categories.length) % categories.length)
  const handleNext = () => goTo((currentIndex + 1) % categories.length)

  return (
    <section className="header-panel">
      <button className="nav-button prev" type="button" aria-label="Scroll left" onClick={handlePrev}>
        ‹
      </button>

      <div className="categories" ref={categoriesRef}>
        {categories.map((item, i) => {
          const dist = Math.abs(i - currentIndex)
          return (
            <button
              key={item.key}
              type="button"
              className={`category-button ${item.key === activeCategory ? 'active' : ''}`}
              data-dist={dist}
              onClick={() => goTo(i)}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <button className="nav-button next" type="button" aria-label="Scroll right" onClick={handleNext}>
        ›
      </button>
    </section>
  )
}

export default Header
