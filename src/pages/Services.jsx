import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Manuscript Evaluation",
      description: "Free synopsis & feedback within 10 days",
      details: "Our expert editors review your manuscript synopsis and provide constructive feedback on plot, character development, market potential, and more. This free service helps you understand if your work aligns with our publishing goals.",
      icon: "📝"
    },
    {
      id: 2,
      title: "Editing & Proofreading",
      description: "Developmental, copy, and line editing",
      details: "Comprehensive editing services including developmental editing for structure and content, copy editing for grammar and style, and line editing for sentence-level refinement. Our professional editors work closely with authors to preserve their unique voice.",
      icon: "✏️"
    },
    {
      id: 3,
      title: "Design & Production",
      description: "Cover design, layout, ISBN registration",
      details: "Our creative team designs stunning book covers that capture the essence of your story. We handle interior layout design, typography selection, and all production aspects including ISBN registration and metadata setup.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Marketing & Distribution",
      description: "Amazon, Flipkart, independent retailer setup",
      details: "Comprehensive marketing strategy including online and offline promotion, social media campaigns, press releases, and author interviews. We handle distribution across major platforms like Amazon, Flipkart, and help set up independent retailer partnerships.",
      icon: "📢"
    },
    {
      id: 5,
      title: "Rights & Licensing",
      description: "International sales, translations, audio",
      details: "We manage international rights, translation deals, and audiobook production. Our licensing team works to expand your book's reach globally, negotiating favorable terms for foreign editions and multimedia adaptations.",
      icon: "🌍"
    }
  ]

  return (
    <div className="services">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="page-subtitle">Comprehensive Publishing Solutions for Authors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <p className="intro-text">
              At Regulus International Publishing House, we offer end-to-end publishing services 
              designed to guide your manuscript from conception to bookstore shelves. 
              Our team of experienced professionals ensures your work receives the attention 
              and expertise it deserves at every stage of the publishing journey.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-brief">{service.description}</p>
                <p className="service-details">{service.details}</p>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <h2>Ready to Start Your Publishing Journey?</h2>
            <p>Submit your manuscript today and let us help bring your story to life.</p>
            <Link to="/submissions" className="btn btn-primary">
              Submit Your Manuscript
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

