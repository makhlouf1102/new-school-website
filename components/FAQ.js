export default function FAQ() {
  return (
    <section id="faq" className="bg-base-200 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg">
            Click a question to learn more about our process and
            services.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          <div className="collapse collapse-plus bg-base-100">
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked
            />
            <div className="collapse-title text-xl font-medium">
              How does the internship matching process work?
            </div>
            <div className="collapse-content">
              <p>
                We start with a discovery call to understand
                your goals, then connect you with curated
                opportunities that align with your skills
                and preferences.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Do you help with interview preparation?
            </div>
            <div className="collapse-content">
              <p>
                Yes! We offer tailored interview coaching
                sessions, mock interviews, and feedback to
                ensure you stand out.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Can you support international internship
              searches?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely. Our global partner network helps
                us match clients with international
                experiences and guide visa requirements.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              What is the timeline to get started?
            </div>
            <div className="collapse-content">
              <p>
                After your introductory call, we create a
                personalized plan within a week and begin
                outreach immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}