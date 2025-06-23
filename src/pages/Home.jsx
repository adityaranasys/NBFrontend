import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ServiceCard from '../components/ServiceCard';
import FloatingOrbs from '../components/FloatingOrbs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Home() {
  return (
    <motion.div
      className="relative min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <FloatingOrbs />

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nothing Before
              </span>
            </h2>
            <AnimatedText />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We create digital experiences that redefine what's possible.
            Where others see limits, we see opportunities to innovate.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition shadow-md">
              Explore Our Work
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 transition shadow-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10 rounded-xl text-center shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to build something extraordinary?
            </h3>
            <p className="mb-6 text-lg">
              Let's create something that's never been done before.
            </p>
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-purple-100 transition">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
