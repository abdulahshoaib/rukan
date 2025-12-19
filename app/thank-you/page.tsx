import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 bg-brandcream">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-12 object-contain text-brandbrown font-bold text-xl">
              RUKAN
            </div>
          </Link>
          <Link href="/" className="text-xs text-slate-600 hover:text-black">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Thank you for reaching out
          </h1>
          <p className="text-sm text-slate-700 mb-4">
            Your message has been sent to the Rukan Construction team. We will review your project details and follow up with you soon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-brandbrown text-brandcream hover:bg-black shadow-sm transition-colors"
          >
            Return to homepage
          </Link>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-brandcream">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 text-center">
          © Rukan Construction, a DBA of MIQ Construct LLC.
        </div>
      </footer>
    </div>
  );
}
