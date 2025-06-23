import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 bg-gray-900 text-white pt-16 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
          {/* Brand Info */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Nothing Before
            </h3>
            <p className="mt-2 text-gray-300">
              Redefining digital innovation
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-10 md:w-2/3 justify-between">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Services</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/services#app" className="hover:text-white transition">App Development</a></li>
                <li><a href="/services#web" className="hover:text-white transition">Web Development</a></li>
                <li><a href="/services#marketing" className="hover:text-white transition">Digital Marketing</a></li>
                <li><a href="/services#ai" className="hover:text-white transition">AI Solutions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/about#team" className="hover:text-white transition">Our Team</a></li>
                <li><a href="/about#careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Connect</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="mailto:hello@nothingbefore.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Nothing Before. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
