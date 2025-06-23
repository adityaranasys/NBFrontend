import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Nothing Before
          </span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      )}
    </motion.nav>
  );
}
