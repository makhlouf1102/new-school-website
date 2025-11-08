export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Reviews from Previous Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from the professionals who found their dream
            internships with us.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">
              "Internship Ally guided me through every
              step of the application process. I landed an
              internship that turned into a full-time
              offer!"
            </p>
            <div className="font-semibold text-gray-900">Alexandra T.</div>
            <div className="text-sm text-gray-600">Marketing Intern, BrightWave Media</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">
              "The mock interviews and resume overhaul
              were game changers. I never felt more
              confident walking into interviews."
            </p>
            <div className="font-semibold text-gray-900">Jamal R.</div>
            <div className="text-sm text-gray-600">Software Intern, Apex Labs</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">
              "Their employer connections opened doors I
              didn't even know existed. Highly recommend
              to anyone serious about their career."
            </p>
            <div className="font-semibold text-gray-900">Priya N.</div>
            <div className="text-sm text-gray-600">Operations Intern, Forward Logistics</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">
              "The personalized guidance made all the
              difference. They helped me choose the right
              internship track for my goals."
            </p>
            <div className="font-semibold text-gray-900">Diego L.</div>
            <div className="text-sm text-gray-600">Finance Intern, Summit Capital</div>
          </div>
        </div>
      </div>
    </section>
  )
}