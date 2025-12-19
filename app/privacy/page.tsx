import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 bg-brandcream">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-9 object-contain text-brandbrown font-bold text-lg">
              RUKAN
            </div>
          </Link>
          <Link href="/" className="text-xs text-slate-600 hover:text-black">
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Online Privacy Notice
          </h1>
          <p className="text-sm text-slate-700 mb-3">
            This Online Privacy Notice describes how MIQ Construct LLC doing business as Rukan Construction collects, uses, and protects information when you
            visit Rukanconstruction.com or contact us through the site.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">Information we collect</h2>
          <p className="text-sm text-slate-700 mb-3">
            We may collect personal information that you choose to provide, including your name, company, email address, phone number, project information,
            and any other details you include in contact forms or emails.
          </p>
          <p className="text-sm text-slate-700 mb-3">
            We may also collect basic technical information about your visit, such as IP address, browser type, device type, and pages visited.
            This information is used to operate the site and understand how visitors use our content.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">How we use information</h2>
          <p className="text-sm text-slate-700 mb-3">
            We use the information we collect to respond to your requests, provide estimates and project information, manage our relationship with you,
            improve our services and website, and comply with legal obligations. We do not sell your personal information.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">Cookies and analytics</h2>
          <p className="text-sm text-slate-700 mb-3">
            Our site may use cookies or similar technologies to remember your preferences and help us understand how visitors use the site.
            You can choose to set your browser to refuse cookies or to alert you when cookies are being sent,
            although some parts of the site may not function properly without cookies.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">Contact</h2>
          <p className="text-sm text-slate-700 mb-3">
            If you have questions about this Online Privacy Notice or our handling of personal information,
            you can contact Rukan Construction at the mailing address or email shown on the Contact section of the main site.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-brandcream">
        <div className="max-w-4xl mx-auto px-4 py-4 text-xs text-slate-500">
          © Rukan Construction, a DBA of MIQ Construct LLC.
        </div>
      </footer>
    </div>
  );
}
