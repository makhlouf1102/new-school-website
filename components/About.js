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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-base-100 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-base-content mb-6">
              About Internship Ally
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Internship Ally is a boutique service agency
              dedicated to connecting aspiring professionals
              with internships that accelerate their growth.
              From crafting standout applications to interview
              coaching, we partner with you to secure
              opportunities that align with your goals.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            <motion.div
              className="bg-base-200 p-6 rounded-lg text-center hover:bg-base-300 transition-colors duration-200"
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm font-medium text-base-content mb-1">Internships Secured</div>
              <div className="text-sm text-base-content/70">Across 15 industries</div>
            </motion.div>

            <motion.div
              className="bg-base-200 p-6 rounded-lg text-center hover:bg-base-300 transition-colors duration-200"
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">120</div>
              <div className="text-sm font-medium text-base-content mb-1">Partner Companies</div>
              <div className="text-sm text-base-content/70">Worldwide network</div>
            </motion.div>

            <motion.div
              className="bg-base-200 p-6 rounded-lg text-center hover:bg-base-300 transition-colors duration-200"
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm font-medium text-base-content mb-1">Success Rate</div>
              <div className="text-sm text-base-content/70">Offers after coaching</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}