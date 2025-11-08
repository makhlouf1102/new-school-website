import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Navbar blur effect on scroll
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id="header">
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Services />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}