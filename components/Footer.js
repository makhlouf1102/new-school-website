import { useState, useEffect } from 'react'
import * as Separator from '@radix-ui/react-separator'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors" href="#home">
              Internship Ally
            </a>
            <p className="mt-2 text-gray-600">
              Empowering future professionals through meaningful
              internship experiences.
            </p>
          </div>
          <nav className="space-y-2">
            <a className="block text-gray-600 hover:text-gray-900 transition-colors" href="#services">Services</a>
            <a className="block text-gray-600 hover:text-gray-900 transition-colors" href="#reviews">Reviews</a>
            <a className="block text-gray-600 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
            <a className="block text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
          </nav>
          <nav className="space-y-2">
            <a
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              href="mailto:hello@internshipally.com"
            >
              hello@internshipally.com
            </a>
            <a className="block text-gray-600 hover:text-gray-900 transition-colors" href="tel:+1234567890">
              (123) 456-7890
            </a>
            <a
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
      <Separator.Root className="h-px bg-gray-200" />
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        © {year} Internship Ally. All rights reserved.
      </div>
    </footer>
  )
}