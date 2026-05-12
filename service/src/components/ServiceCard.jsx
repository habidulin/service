import { resolveServiceIcon } from '../lib/serviceAssets.js'

function ServiceCard({ name, price, link, category }) {
  const iconSrc = resolveServiceIcon({ category, name })

  return (
    <a
      href={link || '#'}
      className="service-card"
      aria-disabled={!link}
    >
      <div className="service-card-body">
        <div className="service-icon-wrap">
          {iconSrc ? (
            <img src={iconSrc} alt={name} className="service-icon" />
          ) : (
            <div className="service-icon service-icon-fallback" aria-hidden="true">
              {name.slice(0, 1).toUpperCase()}
            </div>
          )}
          <h3>{name}</h3>
        </div>
        <p className="price">{price}</p>
      </div>
    </a>
  )
}

export default ServiceCard
