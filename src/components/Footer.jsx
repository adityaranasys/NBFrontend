import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">Nothing Before</h3>
            <p>Redefining digital innovation</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <a href="/services#app">App Development</a>
              <a href="/services#web">Web Development</a>
              <a href="/services#marketing">Digital Marketing</a>
              <a href="/services#ai">AI Solutions</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/about#team">Our Team</a>
              <a href="/about#careers">Careers</a>
              <a href="/contact">Contact</a>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:hello@nothingbefore.com">Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nothing Before. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}