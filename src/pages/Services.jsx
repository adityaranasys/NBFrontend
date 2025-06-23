import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

const serviceDetails = [
  {
    id: 'app',
    title: 'App Development',
    description: 'We create cutting-edge mobile applications that push the boundaries of what\'s possible on iOS and Android platforms. Our apps are optimized for performance, user experience, and scalability.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'Performance optimization',
      'App store deployment',
      'Ongoing maintenance'
    ],
    icon: '📱'
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Our web applications are built with the latest technologies to deliver immersive experiences, blazing performance, and rock-solid reliability across all devices and browsers.',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'Single Page Applications',
      'E-commerce solutions',
      'Web accessibility'
    ],
    icon: '🌐'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that elevate your brand in the digital landscape. We combine creativity with analytics to deliver measurable results.',
    features: [
      'SEO optimization',
      'Social media strategy',
      'Content marketing',
      'PPC advertising',
      'Analytics & reporting'
    ],
    icon: '📈'
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'Transformative artificial intelligence solutions tailored to your specific business needs. From machine learning models to natural language processing, we bring AI to your fingertips.',
    features: [
      'Machine learning models',
      'Predictive analytics',
      'Computer vision',
      'Natural language processing',
      'AI integration'
    ],
    icon: '🧠'
  }
]

export default function Services() {
  return (
    <motion.div 
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="services-hero">
        <div className="container">
          <h1 className="gradient-text">Our Services</h1>
          <p className="subtitle">Innovative solutions tailored to your digital needs</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {serviceDetails.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-detail"
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h3>Key Features</h3>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Ready to transform your business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals.</p>
            <button className="nb-button">Get in Touch</button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}