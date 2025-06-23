import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <motion.div
      className="pt-24 pb-16 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="text-center px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Let's create something extraordinary together
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have a project in mind or want to learn more about our services? Reach out to
              us and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-purple-600">Email</h3>
                <a href="mailto:hello@nothingbefore.com" className="hover:underline">
                  hello@nothingbefore.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600">Phone</h3>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600">Office</h3>
                <address className="not-italic">
                  123 Innovation Drive
                  <br />
                  Tech City, TC 10101
                </address>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6"
            >
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gray-100 rounded-lg p-10 text-center shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-semibold mb-2">Our Headquarters</h3>
            <p className="text-gray-700 mb-4">
              123 Innovation Drive, Tech City, TC 10101
            </p>
            <div className="text-5xl">🗺️</div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
