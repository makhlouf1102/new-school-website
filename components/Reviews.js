export default function Reviews() {
  return (
    <section id="reviews" className="bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Reviews from Previous Clients
          </h2>
          <p className="mt-4 text-lg">
            Hear from the professionals who found their dream
            internships with us.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <p className="italic">
                "Internship Ally guided me through every
                step of the application process. I landed an
                internship that turned into a full-time
                offer!"
              </p>
              <div className="mt-4 font-semibold">
                Alexandra T.
              </div>
              <div className="text-sm text-base-content/70">
                Marketing Intern, BrightWave Media
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <p className="italic">
                "The mock interviews and resume overhaul
                were game changers. I never felt more
                confident walking into interviews."
              </p>
              <div className="mt-4 font-semibold">Jamal R.</div>
              <div className="text-sm text-base-content/70">
                Software Intern, Apex Labs
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <p className="italic">
                "Their employer connections opened doors I
                didn't even know existed. Highly recommend
                to anyone serious about their career."
              </p>
              <div className="mt-4 font-semibold">Priya N.</div>
              <div className="text-sm text-base-content/70">
                Operations Intern, Forward Logistics
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <p className="italic">
                "The personalized guidance made all the
                difference. They helped me choose the right
                internship track for my goals."
              </p>
              <div className="mt-4 font-semibold">Diego L.</div>
              <div className="text-sm text-base-content/70">
                Finance Intern, Summit Capital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}