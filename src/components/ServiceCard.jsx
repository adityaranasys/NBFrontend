import { useState } from 'react'
import { motion } from 'framer-motion'
import './ServiceCard.css'

const serviceData = {
  app: {
    title: "App Development",
    description: "Cutting-edge mobile applications for iOS and Android that push boundaries.",
    icon: "📱"
  },
  web: {
    title: "Web Development",
    description: "Next-gen web applications with immersive experiences and blazing performance.",
    icon: "🌐"
  },
  marketing: {
    title: "Digital Marketing",
    description: "Data-driven strategies to elevate your brand in the digital landscape.",
    icon: "📈"
  },
  ai: {
    title: "AI Solutions",
    description: "Transformative artificial intelligence tailored to your business needs.",
    icon: "🧠"
  }
}

export default function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      className={`service-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="service-icon">{serviceData[service].icon}</div>
          <h3>{serviceData[service].title}</h3>
        </div>
        <div className="card-back">
          <p>{serviceData[service].description}</p>
          <button className="nb-button">Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}