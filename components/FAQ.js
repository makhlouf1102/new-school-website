import { motion } from 'framer-motion'

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

export default function FAQ() {
  return (
    <motion.section
      id="faq"
      className="bg-base-200 py-20"
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
          <h2 className="text-3xl font-bold text-base-content">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-base-content/70">
            Click a question to learn more about our process and
            services.
          </p>
        </motion.div>
        <motion.div
          className="mt-12"
          variants={containerVariants}
        >
          <div className="space-y-4">
            {/* Item 1 */}
            <motion.div variants={itemVariants} layout>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:shadow-md transition-all duration-300 group">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium text-base-content group-hover:text-primary transition-colors duration-200">
                  How does the internship matching process work?
                </div>
                <div className="collapse-content overflow-hidden">
                  <motion.div className="pb-4 text-base-content/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}>
                      We start with a discovery call to understand your goals, then connect you with curated opportunities that align with your skills and preferences.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={itemVariants} layout>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:shadow-md transition-all duration-300 group">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Do you help with interview preparation?
                </div>
                <div className="collapse-content overflow-hidden">
                  <motion.div className="pb-4 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}>
                      Yes! We offer tailored interview coaching sessions, mock interviews, and feedback to ensure you stand out.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div variants={itemVariants} layout>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:shadow-md transition-all duration-300 group">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Can you support international internship searches?
                </div>
                <div className="collapse-content overflow-hidden">
                  <motion.div className="pb-4 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}>
                      Absolutely. Our global partner network helps us match clients with international experiences and guide visa requirements.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 4 */}
            <motion.div variants={itemVariants} layout>
              <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:shadow-md transition-all duration-300 group">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  What is the timeline to get started?
                </div>
                <div className="collapse-content overflow-hidden">
                  <motion.div className="pb-4 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}>
                      After your introductory call, we create a personalized plan within a week and begin outreach immediately.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}