import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const cardVariantsReverse = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-base-200 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-base-content">Our Services</h2>
          <p className="mt-4 text-lg text-base-content/70">
            Tailored support packages designed to meet you where
            you are in your career journey.
          </p>
        </motion.div>
        <div className="mt-12 space-y-12">
          <motion.div
            className="bg-base-100 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="lg:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://placehold.co/500x320"
                alt="Service one"
                className="h-64 lg:h-full w-full object-cover"
              />
            </motion.div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-base-content mb-4">Service One</h3>
              <p className="text-base-content/70 mb-6">
                Describe the first service offering here.
                Highlight the benefits and the outcomes
                clients can expect.
              </p>
              <div className="flex justify-end">
                <motion.a
                  className="btn btn-outline btn-primary"
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-base-100 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row-reverse hover:shadow-xl transition-shadow duration-300"
            variants={cardVariantsReverse}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="lg:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://placehold.co/500x320"
                alt="Service two"
                className="h-64 lg:h-full w-full object-cover"
              />
            </motion.div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-base-content mb-4">Service Two</h3>
              <p className="text-base-content/70 mb-6">
                Describe the second service offering here.
                Focus on how it solves a specific problem
                for your clients.
              </p>
              <div className="flex justify-end">
                <motion.a
                  className="btn btn-outline btn-primary"
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}