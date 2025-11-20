import { useState, useEffect } from 'react'


export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a className="text-2xl font-bold text-base-content hover:text-base-content/80 transition-colors" href="#home">
              Internship Ally
            </a>
            <p className="mt-2 text-base-content/70">
              Empowering future professionals through meaningful
              internship experiences.
            </p>
          </div>
          <nav className="space-y-2">
            <a className="block text-base-content/70 hover:text-base-content transition-colors" href="#services">Services</a>
            <a className="block text-base-content/70 hover:text-base-content transition-colors" href="#reviews">Reviews</a>
            <a className="block text-base-content/70 hover:text-base-content transition-colors" href="#faq">FAQ</a>
            <a className="block text-base-content/70 hover:text-base-content transition-colors" href="#contact">Contact</a>
          </nav>
          <nav className="space-y-2">
            <a
              className="block text-base-content/70 hover:text-base-content transition-colors"
              href="mailto:hello@internshipally.com"
            >
              hello@internshipally.com
            </a>
            <a className="block text-base-content/70 hover:text-base-content transition-colors" href="tel:+1234567890">
              (123) 456-7890
            </a>
            <a
              className="block text-base-content/70 hover:text-base-content transition-colors"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
      <div className="h-px bg-base-300" />
      <div className="bg-base-300 py-4 text-center text-sm text-base-content/70">
        © {year} Internship Ally. All rights reserved.
      </div>
    </footer>
  )
}