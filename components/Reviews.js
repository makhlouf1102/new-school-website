import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Reviews() {
  return (
    <motion.section
      id="reviews"
      className="bg-white py-20"
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
          <h2 className="text-3xl font-bold text-gray-900">
            Reviews from Previous Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from the professionals who found their dream
            internships with us.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic mb-4">
              "Internship Ally guided me through every
              step of the application process. I landed an
              internship that turned into a full-time
              offer!"
            </p>
            <div className="font-semibold text-gray-900">Alexandra T.</div>
            <div className="text-sm text-gray-600">Marketing Intern, BrightWave Media</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic mb-4">
              "The mock interviews and resume overhaul
              were game changers. I never felt more
              confident walking into interviews."
            </p>
            <div className="font-semibold text-gray-900">Jamal R.</div>
            <div className="text-sm text-gray-600">Software Intern, Apex Labs</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic mb-4">
              "Their employer connections opened doors I
              didn't even know existed. Highly recommend
              to anyone serious about their career."
            </p>
            <div className="font-semibold text-gray-900">Priya N.</div>
            <div className="text-sm text-gray-600">Operations Intern, Forward Logistics</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic mb-4">
              "The personalized guidance made all the
              difference. They helped me choose the right
              internship track for my goals."
            </p>
            <div className="font-semibold text-gray-900">Diego L.</div>
            <div className="text-sm text-gray-600">Finance Intern, Summit Capital</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}