import ServiceCard from './ServiceCard.jsx'

function ServicesGrid({ services, category }) {
  return (
    <section className="services-section">
      <div className="section-header">
        <div>
          <h2>Service Solutions</h2>
        </div>
      </div>
      <div className="grid">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} category={category} />
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
