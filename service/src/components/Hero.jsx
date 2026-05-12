import { heroSvgs } from '../data/mockData.jsx'

function Hero({ category, imageSrc }) {
  const svg = heroSvgs[category]
  const deviceClass = `device-hero ${category.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <section className="hero-card">
      <div className="hero-copy">
        {/* <span className="eyebrow">Premium Service</span> */}
        {/* <h1>{category}</h1> */}
        {/* <p>Express repair and maintenance</p> */}
      </div>
      <div className={deviceClass}>
        {imageSrc
          ? <img src={imageSrc} alt={category} className="hero-service-image" />
          : svg
        }
      </div>
    </section>
  )
}

export default Hero
