import { motion } from 'framer-motion'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

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
      className="sticky top-0 z-50 bg-white shadow-md border-b"
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
            <a className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors" href="#header">
              Internship Ally
            </a>
          </motion.div>

          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  <NavigationMenu.Link
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#about"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                  <NavigationMenu.Link
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#services"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                  <NavigationMenu.Link
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#reviews"
                  >
                    Reviews
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
                  <NavigationMenu.Link
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#faq"
                  >
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
                  <NavigationMenu.Link
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#contact"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}