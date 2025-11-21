import { motion } from 'framer-motion'


const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-base-100 shadow-md border-b border-base-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              className="btn btn-primary btn-sm text-white shadow-md hover:shadow-lg border-none"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>

          <div className="hidden lg:flex">
            <ul className="flex space-x-8">
              <li>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  <a
                    className="text-base-content/70 hover:text-base-content px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#about"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#services"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#reviews"
                  >
                    Reviews
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#faq"
                  >
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              </li>
              <li>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#contact"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}