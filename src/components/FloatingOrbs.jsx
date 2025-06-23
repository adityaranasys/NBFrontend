import { motion } from 'framer-motion'
import './FloatingOrbs.css'

export default function FloatingOrbs() {
  return (
    <div className="floating-orbs">
      <motion.div 
        className="orb purple-orb"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="orb blue-orb"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}