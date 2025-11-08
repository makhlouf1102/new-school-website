export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow">
      <nav className="navbar mx-auto max-w-6xl">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-bold" href="#header">
            Internship Ally
          </a>
        </div>
        <div className="navbar-center hidden space-x-2 lg:flex">
          <a className="btn btn-ghost" href="#about">About</a>
          <a className="btn btn-ghost" href="#services">Services</a>
          <a className="btn btn-ghost" href="#reviews">Reviews</a>
          <a className="btn btn-ghost" href="#faq">FAQ</a>
          <a className="btn btn-ghost" href="#contact">Contact</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  )
}