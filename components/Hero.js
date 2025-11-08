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

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 200%"
        }}
      ></motion.div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      >
        💼
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        🎯
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      >
        🚀
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          variants={itemVariants}
        >
          Learn to get internships that suits you in 60 days
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
          variants={itemVariants}
        >
          Getting an internship should not be hard
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
          variants={itemVariants}
        >
          I will show you everything you need to get one without lying
        </motion.p>
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.a
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Call Right Now
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}