import { motion } from 'framer-motion'
import './About.css'

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in software innovation and digital transformation.",
    img: "👨‍💼"
  },
  {
    name: "Sam Lee",
    role: "CTO",
    bio: "Technology strategist specializing in scalable architectures and emerging tech.",
    img: "👨‍💻"
  },
  {
    name: "Taylor Smith",
    role: "Creative Director",
    bio: "Design thinker focused on creating meaningful user experiences.",
    img: "👩‍🎨"
  },
  {
    name: "Jordan Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer passionate about clean code and performance optimization.",
    img: "👩‍💻"
  }
]

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Nothing Before was established with a vision to redefine digital innovation."
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured partnership with Fortune 500 company for digital transformation."
  },
  {
    year: "2020",
    title: "AI Division Launch",
    description: "Expanded services to include artificial intelligence solutions."
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Opened offices in Europe and Asia to serve global clients."
  }
]

export default function About() {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="about-hero">
        <div className="container">
          <h1 className="gradient-text">About Us</h1>
          <p className="subtitle">Pioneering digital innovation since 2018</p>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Our Story</h2>
            <p>
              Nothing Before was founded on the principle that true innovation means creating 
              what hasn't existed before. We reject the notion of "business as usual" and 
              instead focus on pushing boundaries in the digital landscape.
            </p>
            <p>
              What began as a small team of visionary developers has grown into a full-service 
              digital innovation firm serving clients worldwide. Our approach combines 
              technical excellence with creative problem-solving to deliver solutions that 
              redefine industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>Innovation First</h3>
              <p>
                We don't follow trends - we set them. Every project is an opportunity 
                to create something groundbreaking.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>Relentless Quality</h3>
              <p>
                From code to customer experience, we obsess over every detail to deliver 
                exceptional results.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>Collaborative Spirit</h3>
              <p>
                We believe the best solutions emerge from diverse perspectives working 
                together toward a common goal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="our-team" id="team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-subtitle">
            The brilliant minds behind Nothing Before
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="team-avatar">
                  {member.img}
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-milestones" id="milestones">
        <div className="container">
          <h2>Milestones</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}