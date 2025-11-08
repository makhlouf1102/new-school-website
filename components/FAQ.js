import * as Accordion from '@radix-ui/react-accordion'

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Click a question to learn more about our process and
            services.
          </p>
        </div>
        <div className="mt-12">
          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="item-1" className="bg-white rounded-lg shadow-sm border">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center">
                  How does the internship matching process work?
                  <span className="ml-4 text-gray-400">▼</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                <p>
                  We start with a discovery call to understand
                  your goals, then connect you with curated
                  opportunities that align with your skills
                  and preferences.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="bg-white rounded-lg shadow-sm border">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center">
                  Do you help with interview preparation?
                  <span className="ml-4 text-gray-400">▼</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                <p>
                  Yes! We offer tailored interview coaching
                  sessions, mock interviews, and feedback to
                  ensure you stand out.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className="bg-white rounded-lg shadow-sm border">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center">
                  Can you support international internship searches?
                  <span className="ml-4 text-gray-400">▼</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                <p>
                  Absolutely. Our global partner network helps
                  us match clients with international
                  experiences and guide visa requirements.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4" className="bg-white rounded-lg shadow-sm border">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left text-xl font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-between items-center">
                  What is the timeline to get started?
                  <span className="ml-4 text-gray-400">▼</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                <p>
                  After your introductory call, we create a
                  personalized plan within a week and begin
                  outreach immediately.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}