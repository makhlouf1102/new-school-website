export default function Footer() {
  return (
    <footer className="bg-base-200">
      <div className="footer mx-auto max-w-6xl items-center justify-between px-6 py-10 text-base-content/80">
        <aside>
          <a className="btn btn-ghost text-2xl font-bold" href="#header">
            Internship Ally
          </a>
          <p>
            Empowering future professionals through meaningful
            internship experiences.
          </p>
        </aside>
        <nav className="grid gap-2">
          <a className="link link-hover" href="#services">Services</a>
          <a className="link link-hover" href="#reviews">Reviews</a>
          <a className="link link-hover" href="#faq">FAQ</a>
          <a className="link link-hover" href="#contact">Contact</a>
        </nav>
        <nav className="grid gap-2">
          <a
            className="link link-hover"
            href="mailto:hello@internshipally.com"
          >
            hello@internshipally.com
          </a>
          <a className="link link-hover" href="tel:+1234567890">
            (123) 456-7890
          </a>
          <a
            className="link link-hover"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener"
          >
            Book a Call
          </a>
        </nav>
      </div>
      <div className="bg-base-300 py-4 text-center text-sm text-base-content/60">
        © <span id="year" suppressHydrationWarning></span> Internship Ally. All rights reserved.
      </div>
    </footer>
  )
}