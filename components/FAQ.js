import { motion, AnimatePresence } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2 }
    }
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
}

export default function FAQ() {
  return (
    <motion.section
      id="faq"
      className="bg-gray-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Click a question to learn more about our process and
            services.
          </p>
        </motion.div>
        <motion.div
          className="mt-12"
          variants={containerVariants}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            <motion.div variants={itemVariants}>
              <Accordion.Item value="item-1" className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center group">
                    How does the internship matching process work?
                    <motion.span
                      className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      animate={{ rotate: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      ▼
                    </motion.span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden">
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      We start with a discovery call to understand
                      your goals, then connect you with curated
                      opportunities that align with your skills
                      and preferences.
                    </motion.p>
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Accordion.Item value="item-2" className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center group">
                    Do you help with interview preparation?
                    <motion.span
                      className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      animate={{ rotate: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      ▼
                    </motion.span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden">
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Yes! We offer tailored interview coaching
                      sessions, mock interviews, and feedback to
                      ensure you stand out.
                    </motion.p>
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Accordion.Item value="item-3" className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center group">
                    Can you support international internship searches?
                    <motion.span
                      className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      animate={{ rotate: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      ▼
                    </motion.span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden">
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Absolutely. Our global partner network helps
                      us match clients with international
                      experiences and guide visa requirements.
                    </motion.p>
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Accordion.Item value="item-4" className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center group">
                    What is the timeline to get started?
                    <motion.span
                      className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      animate={{ rotate: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      ▼
                    </motion.span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden">
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      After your introductory call, we create a
                      personalized plan within a week and begin
                      outreach immediately.
                    </motion.p>
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          </Accordion.Root>
        </motion.div>
      </div>
    </motion.section>
  )
}