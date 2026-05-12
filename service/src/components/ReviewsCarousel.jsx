import { useEffect, useMemo, useRef, useState } from 'react'

function useItemsPerPage() {
  const getItems = () => {
    if (window.matchMedia('(min-width: 900px)').matches) return 3
    if (window.matchMedia('(max-width: 440px)').matches) return 1
    return 1
  }
  const [itemsPerPage, setItemsPerPage] = useState(getItems)

  useEffect(() => {
    const onChange = () => setItemsPerPage(getItems())
    window.addEventListener('resize', onChange)
    return () => window.removeEventListener('resize', onChange)
  }, [])

  return itemsPerPage
}

function GoogleGIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 256 262" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M255.68 133.6c0-11.24-1.02-22.04-2.92-32.44H130.5v61.38h70.04c-3.02 16.3-12.2 30.1-25.98 39.34v32.34h42.04c24.6-22.64 39.08-56.02 39.08-100.62z"
      />
      <path
        fill="#34A853"
        d="M130.5 261.1c35.28 0 64.9-11.7 86.54-31.74l-42.04-32.34c-11.7 7.84-26.66 12.5-44.5 12.5-34.04 0-62.92-22.96-73.22-53.82H13.84v33.84C35.36 233.66 79.76 261.1 130.5 261.1z"
      />
      <path
        fill="#FBBC05"
        d="M57.28 155.7c-2.62-7.84-4.12-16.22-4.12-24.86s1.5-17.02 4.12-24.86V72.14H13.84C5.02 89.72 0 109.66 0 130.84c0 21.18 5.02 41.12 13.84 58.7l43.44-33.84z"
      />
      <path
        fill="#EA4335"
        d="M130.5 52.16c19.2 0 36.44 6.6 50.04 19.56l37.54-37.54C195.38 12.8 165.78 0 130.5 0 79.76 0 35.36 27.44 13.84 72.14l43.44 33.84c10.3-30.86 39.18-53.82 73.22-53.82z"
      />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#2563eb"
        d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.97 8.6 1.5 6.71 4.7l-3.61.82.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2L12 21.03l3.4 1.47 1.89-3.2 3.61-.82-.34-3.69L23 12z"
      />
      <path fill="#fff" d="M10.09 13.75l-1.42-1.41-1.41 1.41 2.83 2.83 6.36-6.36-1.41-1.41-4.95 4.94z" />
    </svg>
  )
}

function Stars({ value = 5 }) {
  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i < value), [value])
  return (
    <div className="review-stars" aria-label={`${value} out of 5`}>
      {stars.map((filled, idx) => (
        <svg key={idx} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill={filled ? '#f4b400' : '#e5e7eb'}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  )
}

function initialsFromName(name) {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '').toUpperCase() + (parts[1]?.[0] ?? '').toUpperCase()
}

function formatDate(date) {
  if (!date) return ''
  return date
}

function ReviewsCarousel({ reviews, title = 'Bewertung' }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const itemsPerPage = useItemsPerPage()
  const [index, setIndex] = useState(0)
  const [expandedKey, setExpandedKey] = useState(null)
  const [uniformHeight, setUniformHeight] = useState(null)
  const [hasOverflow, setHasOverflow] = useState({})

  const maxIndex = Math.max(0, reviews.length - itemsPerPage)

  const computeOverflow = () => {
    const track = trackRef.current
    if (!track) return
    const next = {}
    const cards = Array.from(track.querySelectorAll('.review-card'))
    for (const card of cards) {
      const key = card.getAttribute('data-review-key')
      if (!key) continue
      const textEl = card.querySelector('.review-text')
      if (!textEl) continue
      next[key] = textEl.scrollHeight > textEl.clientHeight + 1
    }
    setHasOverflow(next)
  }

  const measureUniformHeight = () => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const viewportRect = viewport.getBoundingClientRect()
    const cards = Array.from(track.querySelectorAll('.review-card'))
    const visibleCards = cards.filter((card) => {
      const rect = card.getBoundingClientRect()
      const horizontallyVisible = rect.right > viewportRect.left + 1 && rect.left < viewportRect.right - 1
      return horizontallyVisible
    })

    const max = visibleCards.reduce((acc, el) => Math.max(acc, el.offsetHeight), 0)
    setUniformHeight(max > 0 ? max : null)
  }

  const scrollToIndex = (nextIndex) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const pageWidth = viewport.clientWidth
    const itemWidth = pageWidth / itemsPerPage
    viewport.scrollTo({ left: nextIndex * itemWidth, behavior: 'smooth' })
  }

  const goNext = () => {
    setIndex((prev) => {
      const next = prev >= maxIndex ? 0 : prev + 1
      scrollToIndex(next)
      return next
    })
  }

  const goPrev = () => {
    setIndex((prev) => {
      const next = prev <= 0 ? maxIndex : prev - 1
      scrollToIndex(next)
      return next
    })
  }

  useEffect(() => {
    setIndex(0)
    scrollToIndex(0)
    setExpandedKey(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage])

  useEffect(() => {
    if (!reviews?.length) return
    const id = window.setInterval(goNext, 5000)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length, itemsPerPage, maxIndex])

  useEffect(() => {
    measureUniformHeight()
    window.requestAnimationFrame(measureUniformHeight)
    window.requestAnimationFrame(computeOverflow)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, itemsPerPage, expandedKey, reviews.length])

  useEffect(() => {
    const onResize = () => measureUniformHeight()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onResize = () => computeOverflow()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="reviews-section" aria-label={title}>
      <div className="section-header">
        <div>
          <h2>{title}</h2>
        </div>
      </div>

      <div className="reviews-carousel">
        <button type="button" className="reviews-arrow prev" aria-label="Previous review" onClick={goPrev}>
          ‹
        </button>
        <div className="reviews-viewport" ref={viewportRef}>
          <div
            className="reviews-track"
            ref={trackRef}
            style={{ '--reviews-per-page': itemsPerPage, '--review-uniform-height': uniformHeight ? `${uniformHeight}px` : undefined }}
          >
            {reviews.map((review) => (
              // key must be stable for overflow + expand
              <article
                key={`${review.author}-${review.date}`}
                data-review-key={`${review.author}-${review.date}`}
                className={`review-card ${expandedKey === `${review.author}-${review.date}` ? 'expanded' : ''}`}
              >
                <header className="review-header">
                  <div className="review-avatar" aria-hidden="true">
                    {review.avatarUrl ? (
                      <img src={review.avatarUrl} alt="" />
                    ) : (
                      <span>{initialsFromName(review.author)}</span>
                    )}
                  </div>
                  <div className="review-headline">
                    <div className="review-author">{review.author}</div>
                    <div className="review-date">{formatDate(review.date)}</div>
                  </div>
                  <div className="review-source" aria-hidden="true">
                    <GoogleGIcon />
                  </div>
                </header>

                <div className="review-rating">
                  <Stars value={review.rating ?? 5} />
                  <span className="review-verified" title="Verified">
                    <VerifiedIcon />
                  </span>
                </div>

                <p className="review-text">{review.text}</p>

                {hasOverflow[`${review.author}-${review.date}`] ? (
                  <button
                    type="button"
                    className="review-more"
                    onClick={() => {
                      const key = `${review.author}-${review.date}`
                      setExpandedKey((prev) => (prev === key ? null : key))
                    }}
                  >
                    {expandedKey === `${review.author}-${review.date}` ? 'Weniger' : 'Weiterlesen'}
                  </button>
                ) : null}
              </article>
            ))}
          </div>
        </div>
        <button type="button" className="reviews-arrow next" aria-label="Next review" onClick={goNext}>
          ›
        </button>
      </div>
    </section>
  )
}

export default ReviewsCarousel
