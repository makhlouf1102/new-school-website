export default function About() {
  return (
    <section id="about" className="bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              About Internship Ally
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Internship Ally is a boutique service agency
              dedicated to connecting aspiring professionals
              with internships that accelerate their growth.
              From crafting standout applications to interview
              coaching, we partner with you to secure
              opportunities that align with your goals.
            </p>
          </div>
          <div className="stats stats-vertical shadow lg:stats-horizontal">
            <div className="stat">
              <div className="stat-title">
                Internships Secured
              </div>
              <div className="stat-value">250+</div>
              <div className="stat-desc">
                Across 15 industries
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Partner Companies</div>
              <div className="stat-value">120</div>
              <div className="stat-desc">Worldwide network</div>
            </div>

            <div className="stat">
              <div className="stat-title">Success Rate</div>
              <div className="stat-value">92%</div>
              <div className="stat-desc">
                Offers after coaching
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}