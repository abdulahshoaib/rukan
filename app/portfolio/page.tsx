import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-2">
            Portfolio
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
            Project portfolio
          </h1>
          <p className="text-sm text-slate-700 mb-4 max-w-2xl">
            This page is being populated. We are adding project photos and job details here. Check back soon for a full list of completed work.
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-center mb-8">
            Coming soon
          </h2>

          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-[#F2E9DA] p-8 text-center">
            <p className="text-sm text-slate-700 mb-2">
              Project gallery will appear here.
            </p>
            <p className="text-xs text-slate-500">
              When you are ready to add jobs, you or your web person can insert image blocks and descriptions inside this section.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
