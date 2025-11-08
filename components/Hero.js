export default function Hero() {
  return (
    <section className="hero bg-base-200 min-h-screen">
      {/* Animated background */}
      <div className="hero-animated-bg"></div>

      {/* Floating background elements */}
      <div className="floating-element">💼</div>
      <div className="floating-element">🎯</div>
      <div className="floating-element">⭐</div>
      <div className="floating-element">🚀</div>

      <div className="hero-content text-center">
        <div className="max-w-4xl hero-content-wrapper">
          <h1 className="text-4xl font-bold lg:text-6xl hero-title">
            Learn to get internships that suits you in 60 days
          </h1>
          <h2 className="mt-6 text-2xl font-semibold lg:text-3xl hero-subtitle-header">
            Getting an internship should not be hard
          </h2>
          <p className="mt-6 text-lg leading-relaxed lg:text-xl hero-subtitle">
            I will show you everything you need to get one without lying
          </p>
          <div className="mt-10 hero-cta">
            <a
              className="btn btn-primary btn-lg"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
            >
              Get a Free Call Right Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}