import * as Separator from '@radix-ui/react-separator'

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Internship Ally
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Internship Ally is a boutique service agency
              dedicated to connecting aspiring professionals
              with internships that accelerate their growth.
              From crafting standout applications to interview
              coaching, we partner with you to secure
              opportunities that align with your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Internships Secured</div>
              <div className="text-sm text-gray-600">Across 15 industries</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">120</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Partner Companies</div>
              <div className="text-sm text-gray-600">Worldwide network</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Success Rate</div>
              <div className="text-sm text-gray-600">Offers after coaching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}