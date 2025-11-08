export default function Services() {
  return (
    <section id="services" className="bg-base-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg">
            Tailored support packages designed to meet you where
            you are in your career journey.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row">
            <figure className="max-h-80 w-full lg:w-1/2">
              <img
                src="https://placehold.co/500x320"
                alt="Service one"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body lg:w-1/2">
              <h3 className="card-title">Service One</h3>
              <p>
                Describe the first service offering here.
                Highlight the benefits and the outcomes
                clients can expect.
              </p>
              <div className="card-actions justify-end">
                <a className="btn btn-outline" href="#contact">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row-reverse">
            <figure className="max-h-80 w-full lg:w-1/2">
              <img
                src="https://placehold.co/500x320"
                alt="Service two"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body lg:w-1/2">
              <h3 className="card-title">Service Two</h3>
              <p>
                Describe the second service offering here.
                Focus on how it solves a specific problem
                for your clients.
              </p>
              <div className="card-actions justify-end">
                <a className="btn btn-outline" href="#contact">
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