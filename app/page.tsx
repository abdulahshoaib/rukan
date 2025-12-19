import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="bg-slate-950 text-[#F9F4EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="space-y-6 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F9F4EC]">
                Built to deliver
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#F9F4EC]">
                Smart estimating,<br />
                <span className="text-[#F9F4EC]">solid construction.</span>
              </h1>
              <p className="text-sm sm:text-base text-[#F9F4EC] max-w-xl">
                Rukan Construction is a Texas general contractor and estimating partner serving the DFW and Houston metro areas.
                We combine detailed preconstruction takeoffs with practical field experience so owners get real numbers and projects that finish
                the way they were planned.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full text-sm font-semibold bg-[#F9F4EC] text-black hover:bg-black hover:text-[#F9F4EC] shadow-sm transition-colors"
                >
                  Request an estimate
                </a>
                <a
                  href="#services"
                  className="px-5 py-3 rounded-full text-sm font-semibold bg-[#F9F4EC] text-black hover:bg-black hover:text-[#F9F4EC] shadow-sm transition-colors"
                >
                  What we do
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-[11px] text-[#F9F4EC]">
                <span>Residential and commercial projects</span>
                <span className="hidden sm:inline">|</span>
                <span>Dallas Fort Worth and Houston metroplex</span>
              </div>
            </div>
          </div>
        </section>

        {/* What we do band */}
        <section className="py-12 sm:py-16 bg-brandcream border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">
                What we do
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Best in class estimating and construction services.
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                We support projects from the idea stage through final punch list. Some clients hire us to focus on clean, detailed estimates.
                Others rely on us to run the job as general contractor. Many choose both.
              </p>
              <p className="text-sm text-slate-700">
                Our work stays focused on residential and commercial projects. We do not pursue heavy civil or high rise development, which
                keeps our attention on the project types where we provide the most value.
              </p>
            </div>
            <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-1">
                Local feel, Texas reach
              </p>
              <p className="text-sm text-slate-700">
                Headquartered in Dallas with work throughout the Dallas Fort Worth area and Houston metroplex.
              </p>
              <ul className="text-sm text-slate-700 space-y-1 mt-2">
                <li>Estimating services for owners, architects, and contractors</li>
                <li>General contracting for residential and commercial work</li>
                <li>Renovations, tenant improvements, and select ground up projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intro tiles */}
        <section id="about" className="py-12 sm:py-16 bg-brandcream border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">Who we are</p>
              <p className="text-sm text-slate-700 mb-3">
                A Texas based estimating and general contracting team built on clear communication, detailed planning, and respect for budgets.
              </p>
            </div>
            <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">Where we work</p>
              <p className="text-sm text-slate-700 mb-3">
                Based in Dallas, serving clients across the Dallas Fort Worth area and the Houston metroplex.
              </p>
            </div>
            <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">How we show up</p>
              <p className="text-sm text-slate-700 mb-3">
                Professional, relaxed, and organized on site, so trades can do their best work and owners stay informed.
              </p>
            </div>
          </div>
        </section>

        {/* About content */}
        <section className="py-12 sm:py-16 bg-brandcream border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-3">About Rukan Construction</h2>
              <p className="text-slate-700 mb-4">
                Rukan Construction operates under MIQ Construct LLC, a Texas based general contracting and estimating firm and subsidiary of AIQ Construction LLC.
                MIQ Construct LLC has been in service since 2017. All work, billing, and project delivery are performed through MIQ Construct LLC under the
                Rukan Construction brand.
              </p>
              <p className="text-slate-700 mb-4">
                From our home base in Dallas we serve clients across the Dallas Fort Worth area and the Houston metroplex, providing both preconstruction estimating
                and general contracting services for residential and commercial projects.
              </p>
              <p className="text-slate-700 mb-4">
                We focus on interior, renovation, and light commercial work instead of heavy civil or high rise development. That focus keeps our team tuned in to the
                project types where we add the most value and can move quickly with local trades.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">What we believe</h3>
              <ul className="space-y-4 text-slate-700 text-sm">
                <li>
                  <span className="font-semibold text-slate-900">Straightforward communication. </span>
                  Construction is complicated enough. We keep our language simple and our updates frequent.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Planning before promises. </span>
                  We do the homework on scope, quantities, and logistics before we commit to a price or schedule.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Respect for budgets. </span>
                  Our estimating work is designed to help you protect your budget, not just justify ours.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">People first. </span>
                  A professional and relaxed job site is more productive and safer. We work hard, we joke around, and we treat everyone on site with respect.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 sm:py-16 bg-brandcream border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">Services</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">What we do</h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                From early budgets to final punch list, we support projects with accurate numbers and hands on management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Estimating services</h3>
                <p className="text-sm text-slate-700">
                  Good projects start with honest numbers. We provide estimating services to owners, architects, developers, and other contractors who
                  need a clear picture of cost before moving forward.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>Full quantity takeoffs by trade</li>
                  <li>Budget and detailed estimates</li>
                  <li>Bid leveling and scope review</li>
                  <li>Alternates and value options</li>
                  <li>Support during pre bid questions and clarifications</li>
                </ul>
                <p className="text-xs text-slate-500 mt-2">
                  Already have a preferred general contractor but want a second set of eyes on the numbers, we can act as an independent estimating partner.
                </p>
              </div>

              <div className="bg-[#F2E9DA] border border-slate-100 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">General contracting</h3>
                <p className="text-sm text-slate-700">
                  When you are ready to build, we manage the entire process from permitting through final walk through.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>Tenant finish outs and interior remodels</li>
                  <li>Office, retail, and specialty spaces</li>
                  <li>Residential renovations and additions</li>
                  <li>Select ground up light commercial projects</li>
                </ul>
                <p className="text-xs text-slate-500 mt-2">
                  We do not pursue heavy civil infrastructure work or high rise development. This keeps our focus on the projects we are best suited to deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 sm:py-16 bg-brandcream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">Contact</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                Let us know what you are planning
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Send us a quick note with a short description of your project and we will follow up to talk through scope, schedule, and next steps.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
              <div>
                <form
                  className="bg-[#F2E9DA] rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4"
                  action="send-contact.php"
                  method="POST"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Name</label>
                      <input
                        type="text"
                        name="Name"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Company or organization</label>
                      <input
                        type="text"
                        name="Company"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                      <input
                        type="email"
                        name="Email"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="Phone"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Project location</label>
                      <input
                        type="text"
                        name="Location"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Project type</label>
                      <select
                        name="Type"
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-brandcream focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                      >
                        <option value="">Select a type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Brief description</label>
                    <textarea
                      name="Description"
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
                      placeholder="Tell us a little about scope, schedule, and what you need help with."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-semibold bg-brandbrown text-brandcream hover:bg-black shadow-sm transition-colors"
                  >
                    Send message
                  </button>

                  <p className="text-[11px] text-slate-600 mt-2">
                    Submissions from this form are sent to <span className="font-semibold">info@miqconstruct.com</span>.
                  </p>
                </form>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="bg-slate-900 text-slate-50 rounded-3xl p-6">
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F9F4EC] mb-3">
                    Contact information
                  </h3>
                  <p className="text-base font-semibold mb-1">Rukan Construction</p>
                  <p className="text-xs text-slate-300 mb-4">A DBA of MIQ Construct LLC</p>
                  <p className="mb-2 text-sm">
                    13330 Noel Rd, Apt 625<br />
                    Dallas, Texas 75240
                  </p>
                  <p className="mb-2 text-sm">
                    Dallas local: <span className="font-semibold">972 342 3789</span><br />
                    Zoom number: <span className="font-semibold">214 251 8154</span><br />
                    Email: <span className="font-semibold">info@miqconstruct.com</span>
                  </p>
                  <p className="text-xs text-slate-300">
                    Prefer Zoom or video chat, mention it in your message and we will send a link.
                  </p>
                </div>

                <div className="bg-slate-900 text-[#F9F4EC] rounded-3xl p-6 border border-slate-800">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F9F4EC] mb-3">
                    Service areas
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>Dallas Fort Worth area</li>
                    <li>Houston metroplex</li>
                  </ul>
                  <p className="text-[11px] text-[#F9F4EC] mt-3">
                    If your project is near these markets and you are not sure whether it fits, reach out and we will see if it is a match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
