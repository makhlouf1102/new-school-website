export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>💼</div>
      <div className="absolute top-40 right-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🎯</div>
      <div className="absolute bottom-40 left-20 text-2xl animate-bounce" style={{ animationDelay: '2s' }}>⭐</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-bounce" style={{ animationDelay: '3s' }}>🚀</div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Learn to get internships that suits you in 60 days
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Getting an internship should not be hard
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          I will show you everything you need to get one without lying
        </p>
        <div className="flex justify-center">
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener"
          >
            Get a Free Call Right Now
          </a>
        </div>
      </div>
    </section>
  )
}