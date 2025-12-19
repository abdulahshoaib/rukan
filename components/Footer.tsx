import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brandcream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 text-center md:text-left">
          Rukan Construction is a DBA of MIQ Construct LLC, a Texas based construction and estimating firm, subsidiary of AIQ Construction LLC,
          serving residential and commercial clients across the Dallas Fort Worth area and the Houston metroplex since 2017.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-slate-600">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#services" className="hover:text-black">Services</a>
          <Link href="/portfolio" className="hover:text-black">Portfolio</Link>
          <a href="#contact" className="hover:text-black">Contact</a>
          <Link href="/terms" className="hover:text-brandbrown">Terms</Link>
          <Link href="/privacy" className="hover:text-brandbrown">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
