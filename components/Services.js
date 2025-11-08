export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored support packages designed to meet you where
            you are in your career journey.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="https://placehold.co/500x320"
                alt="Service one"
                className="h-64 lg:h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service One</h3>
              <p className="text-gray-600 mb-6">
                Describe the first service offering here.
                Highlight the benefits and the outcomes
                clients can expect.
              </p>
              <div className="flex justify-end">
                <a
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  href="#contact"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <img
                src="https://placehold.co/500x320"
                alt="Service two"
                className="h-64 lg:h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Two</h3>
              <p className="text-gray-600 mb-6">
                Describe the second service offering here.
                Focus on how it solves a specific problem
                for your clients.
              </p>
              <div className="flex justify-end">
                <a
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  href="#contact"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}