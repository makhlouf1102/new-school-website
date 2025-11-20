export default function Contact() {
  return (
    <section id="contact" className="bg-base-200 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-base-content">Contact Us</h2>
          <p className="mt-4 text-lg text-base-content/70">
            Have questions? Reach out and we'll respond within
            one business day.
          </p>
        </div>
        <form className="mt-12 space-y-6 bg-base-100 p-8 rounded-lg shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-base-content/80 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-base-100 text-base-content"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-base-content/80 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-base-100 text-base-content"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-base-content/80 mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-base-100 text-base-content"
              rows="5"
              placeholder="Share your goals..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}