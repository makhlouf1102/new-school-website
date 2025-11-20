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
            <a className="text-2xl font-bold text-base-content hover:text-base-content/80 transition-colors" href="#home">
              Internship Ally
            </a>
          </motion.div>

          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  <NavigationMenu.Link
                    className="text-base-content/70 hover:text-base-content px-3 py-2 text-sm font-medium transition-colors relative group"
                    href="#about"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
            <label className="swap swap-rotate mr-4">
              <input type="checkbox" className="theme-controller" value="dark" />

              {/* sun icon */}
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm13.02,9.9a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,18.66,16.95ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,5.64a1,1,0,0,0-1,0,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

              {/* moon icon */}
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>
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
        </div>
      </nav>
    </motion.header>
  )
}