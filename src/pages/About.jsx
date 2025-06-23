import { motion } from 'framer-motion';

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
];

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
];

export default function About() {
  return (
    <motion.div
      className="pt-24 pb-16 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600">Pioneering digital innovation since 2018</p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Nothing Before was founded on the principle that true innovation means creating
            what hasn't existed before. We reject the notion of "business as usual" and
            instead focus on pushing boundaries in the digital landscape.
          </p>
          <p className="text-gray-700">
            What began as a small team of visionary developers has grown into a full-service
            digital innovation firm serving clients worldwide. Our approach combines
            technical excellence with creative problem-solving to deliver solutions that
            redefine industries.
          </p>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation First",
                desc:
                  "We don't follow trends - we set them. Every project is an opportunity to create something groundbreaking."
              },
              {
                title: "Relentless Quality",
                desc:
                  "From code to customer experience, we obsess over every detail to deliver exceptional results."
              },
              {
                title: "Collaborative Spirit",
                desc:
                  "We believe the best solutions emerge from diverse perspectives working together toward a common goal."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4" id="team">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-600 mb-10">The brilliant minds behind Nothing Before</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="text-4xl mb-2">{member.img}</div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-purple-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones */}
      <section className="bg-gray-100 py-16 px-4" id="milestones">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Milestones</h2>
          <div className="relative border-l-4 border-purple-500 pl-6 space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="absolute -left-3 top-1.5 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-purple-700">{milestone.year}</h3>
                  <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
