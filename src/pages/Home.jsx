import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import ServiceCard from '../components/ServiceCard'
import FloatingOrbs from '../components/FloatingOrbs'
import './Home.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export default function Home() {
  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <FloatingOrbs />
      
      <section className="hero-section">
        <div className="container">
          <motion.div variants={itemVariants}>
            <h2 className="company-name">
              <span className="gradient-text">Nothing Before</span>
            </h2>
            <AnimatedText />
          </motion.div>
          
          <motion.p variants={itemVariants} className="hero-description">
            We create digital experiences that redefine what's possible. 
            Where others see limits, we see opportunities to innovate.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <button className="nb-button pulse">Explore Our Work</button>
            <button className="nb-button outline">Learn More</button>
          </motion.div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <motion.h2 variants={itemVariants} className="section-title">
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          
          <motion.div 
            className="services-grid"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {['app', 'web', 'marketing', 'ai'].map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3>Ready to build something extraordinary?</h3>
            <p>Let's create something that's never been done before.</p>
            <button className="nb-button">Start Your Project</button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}