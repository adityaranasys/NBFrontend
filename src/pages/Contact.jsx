import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import './Contact.css'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-hero">
        <div className="container">
          <h1 className="gradient-text">Contact Us</h1>
          <p className="subtitle">Let's create something extraordinary together</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Get in Touch</h2>
              <p>
                Have a project in mind or want to learn more about our services? 
                Reach out to us and we'll get back to you within 24 hours.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email</h3>
                  <a href="mailto:hello@nothingbefore.com">hello@nothingbefore.com</a>
                </div>
                
                <div className="contact-method">
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                
                <div className="contact-method">
                  <h3>Office</h3>
                  <address>
                    123 Innovation Drive<br />
                    Tech City, TC 10101
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>
                
                <button type="submit" className="nb-button">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* In a real implementation, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <h3>Our Headquarters</h3>
              <p>123 Innovation Drive, Tech City, TC 10101</p>
              <div className="map-image">
                <span role="img" aria-label="Map">🗺️</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}