export default function Contact() {
  return (
    <section id="contact" className="bg-base-100 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg">
            Have questions? Reach out and we'll respond within
            one business day.
          </p>
        </div>
        <form className="mt-12 space-y-6">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="message">
              <span className="label-text">How can we help?</span>
            </label>
            <textarea
              id="message"
              className="textarea textarea-bordered"
              rows="5"
              placeholder="Share your goals..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}