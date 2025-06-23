import { motion } from 'framer-motion';

const serviceDetails = [
  {
    id: 'app',
    title: 'App Development',
    description:
      "We create cutting-edge mobile applications that push the boundaries of what's possible on iOS and Android platforms. Our apps are optimized for performance, user experience, and scalability.",
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'Performance optimization',
      'App store deployment',
      'Ongoing maintenance',
    ],
    icon: '📱',
  },
  {
    id: 'web',
    title: 'Web Development',
    description:
      'Our web applications are built with the latest technologies to deliver immersive experiences, blazing performance, and rock-solid reliability across all devices and browsers.',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'Single Page Applications',
      'E-commerce solutions',
      'Web accessibility',
    ],
    icon: '🌐',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies that elevate your brand in the digital landscape. We combine creativity with analytics to deliver measurable results.',
    features: [
      'SEO optimization',
      'Social media strategy',
      'Content marketing',
      'PPC advertising',
      'Analytics & reporting',
    ],
    icon: '📈',
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description:
      'Transformative artificial intelligence solutions tailored to your specific business needs. From machine learning models to natural language processing, we bring AI to your fingertips.',
    features: [
      'Machine learning models',
      'Predictive analytics',
      'Computer vision',
      'Natural language processing',
      'AI integration',
    ],
    icon: '🧠',
  },
];

export default function Services() {
  return (
    <motion.div
      className="pt-24 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Innovative solutions tailored to your digital needs
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        {serviceDetails.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="text-3xl md:text-4xl mr-4">{service.icon}</div>
              <h2 className="text-2xl md:text-3xl font-semibold">{service.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center p-10 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to transform your business?
            </h2>
            <p className="mb-6">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <button className="bg-white text-purple-700 font-medium px-6 py-3 rounded-md hover:bg-purple-100 transition">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
